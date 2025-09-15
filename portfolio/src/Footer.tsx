import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
<footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Brand / Name */}
        <p className="text-sm">
          © {new Date().getFullYear()} TR IT Software Development. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/ttrakgoropo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://github.com/PLThabangR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>


    </>
  )
}

export default Footer