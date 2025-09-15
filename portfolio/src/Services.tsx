
const Services = () => {
  return (
    <>
 <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-indigo-100 rounded-xl">
          {/* Example icon */}
          <svg
            className="w-6 h-6 text-indigo-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Full Stack Development</h3>
      </div>
      <p className="mt-3 text-gray-600">
        I build responsive web applications from front-end to back-end using React,
        Node.js, Express, and databases like MongoDB/PostgreSQL.
      </p>
      <a
        href="https://example.com/services"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
      >
        Learn More →
      </a>
    </div>


    </>
  )
}

export default Services