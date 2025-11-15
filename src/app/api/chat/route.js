'use server';

import 'dotenv/config';
import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

async function loadKB() {
  const kbPath = path.join(process.cwd(), 'src', 'data', 'chatbotdata.json');
  const data = await fs.readFile(kbPath, 'utf-8');
  return JSON.parse(data);
}

function selectContext(kb, userText) {
  const text = userText.toLowerCase();
  const sections = [];
  const intro = kb.knowledge_base?.introduction;
  if (intro) sections.push(`Introduction: ${intro.what_is_rainwater_harvesting} ${intro.why_it_matters}`);

  const cats = kb.knowledge_base?.categories || {};
  const map = [
    ['domestic', ['home', 'house', 'roof', 'flush', 'garden', 'domestic']],
    ['commercial_and_residential_societies', ['apartment', 'society', 'office', 'building', 'residential', 'commercial']],
    ['industrial_and_factory', ['industrial', 'factory', 'warehouse', 'manufacturing', 'oil', 'grease']],
    ['roads_and_public_infrastructure', ['road', 'highway', 'drain', 'storm', 'public']],
    ['government_and_public_projects', ['government', 'municipal', 'policy', 'check dam', 'village']],
    ['agricultural_and_rural', ['farm', 'pond', 'agriculture', 'rural', 'livestock']]
  ];
  for (const [key, kws] of map) {
    if (kws.some(k => text.includes(k))) {
      const c = cats[key];
      if (c) {
        sections.push(`${key.replaceAll('_',' ')} overview: ${c.overview}`);
        if (c.steps) sections.push(`Steps: ${c.steps.join('; ')}`);
        if (c.benefits) sections.push(`Benefits: ${c.benefits.join('; ')}`);
        if (c.common_questions) sections.push(`Common Qs: ${Object.values(c.common_questions).join('; ')}`);
      }
    }
  }

  const faq = kb.knowledge_base?.faq;
  if (faq && /cost|safe|clean|first flush|bill|reduce/.test(text)) {
    sections.push(`FAQ: is_rainwater_safe=${faq.is_rainwater_safe}; cost=${faq.how_much_does_a_system_cost}; cleaning=${faq.how_often_to_clean}; first_flush=${faq.what_are_first_flush_systems}; bills=${faq.can_it_reduce_water_bills}`);
  }
  const ts = kb.knowledge_base?.troubleshooting;
  if (ts && /flow|odour|overflow|smell|block/.test(text)) {
    sections.push(`Troubleshooting: low_water_flow=${ts.low_water_flow}; bad_odour_in_tank=${ts.bad_odour_in_tank}; overflowing_tank=${ts.overflowing_tank}`);
  }
  return sections.join('\n');
}

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const kb = await loadKB();
    const context = selectContext(kb, message);

    const prompt = `You are HydroLoop Assistant. Use the provided knowledge base context to give practical, step-by-step guidance about rainwater harvesting. If something is unknown, say so and suggest next steps.\n\nContext:\n${context}\n\nUser question: ${message}`;

    const response = await client.responses.create({
      model: 'openai/gpt-oss-20b',
      input: prompt,
    });

    const output = response?.output_text || 'No response';
    return NextResponse.json({ text: output });
  } catch (err) {
    return NextResponse.json({ error: String(err?.message || err) }, { status: 500 });
  }
}