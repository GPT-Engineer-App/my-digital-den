import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-base-100 shadow-lg">
        <div className="container mx-auto px-5 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">My Portfolio</div>
          <div className="space-x-4">
            <a href="#about" className="btn btn-ghost">
              About
            </a>
            <a href="#projects" className="btn btn-ghost">
              Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-base-200 text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">Hello, I'm John Doe</h1>
          <p className="text-xl mt-4">Frontend Developer | React Enthusiast</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto px-5 py-10">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="text-lg mt-5">I am a passionate Frontend Developer with a love for creating interactive and user-friendly applications using React. With a background in computer science, I have a strong foundation in software development principles and a keen eye for design.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-base-200 py-10">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center">Contact Me</h2>
          <div className="flex justify-center mt-6">
            <a href="mailto:john.doe@example.com" className="btn btn-circle btn-outline">
              <FaEnvelope size={24} />
            </a>
            <a href="https://github.com/johndoe" className="btn btn-circle btn-outline ml-4">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/johndoe" className="btn btn-circle btn-outline ml-4">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-base-100 text-center py-4">
        <span>© 2023 John Doe. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
