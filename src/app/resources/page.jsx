export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Resources</h1>
        <p className="text-gray-600">
          Explore guidance, roadmaps, techniques, and tools for rainwater harvesting and sustainable water management.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <a href="/roadmaps" className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-800">Rainwater Harvesting Roadmaps</h2>
            <p className="text-gray-600 mt-2 text-sm">Step-by-step guides to design and implement systems.</p>
          </a>
          <a href="/quiz" className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-800">Interactive Quiz</h2>
            <p className="text-gray-600 mt-2 text-sm">Test and improve your water conservation knowledge.</p>
          </a>
          <a href="/chat" className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-800">AI Chatbot Assistance</h2>
            <p className="text-gray-600 mt-2 text-sm">Ask questions and get tailored guidance.</p>
          </a>
          <a href="/blog" className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-800">Knowledge Articles</h2>
            <p className="text-gray-600 mt-2 text-sm">Techniques, maintenance best practices, and more.</p>
          </a>
        </div>
      </div>
    </div>
  );
}