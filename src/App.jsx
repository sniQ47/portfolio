export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-600 to-purple-800 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Oussama Taouji</h1>
        <nav className="flex gap-6">
          <a href="#about" className="text-xl hover:text-purple-200 transition">About Me</a>
          <a href="#projects" className="text-xl hover:text-purple-200 transition">Projects</a>
          <a href="#contact" className="text-xl hover:text-purple-200 transition">Contact</a>

        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] grid place-items-center p-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Oussama</h1>
          <p className="text-xl mb-10 leading-relaxed">
            I don't know what I'm doing... but somehow I make it work!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <OutlineButton href="#projects">See My Work</OutlineButton>
            <OutlineButton href="#about">About Me</OutlineButton>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-[80vh] grid place-items-center p-6 bg-white/10">
        <div className="max-w-4xl flex flex-col md:flex-row items-center gap-10">

          {/* Photo + CV Button */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg">
              <img 
                src="/me.jpg" 
                
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <DownloadCVButton />
          </div>
          
          {/* Text Content */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-200">About Me</h2>
            <div className="space-y-4 text-lg">
              <p>Here's some fun facts about me:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>*******</li>
                <li>Professional "Google searcher"</li>
                <li>******************</li>
                <li>My code works (most of the time)</li>
              </ul>
              <p className="italic">"If it works, don't ask why!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-[80vh] p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-200">My Projects</h2>
          <p className="text-center text-xl">Coming soon... maybe</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[80vh] p-6 bg-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-200">Contact Me</h2>
          <p className="text-center text-xl">Send carrier pigeon or try email</p>
        </div>
      </section>

    </div>


  );
}

/* Button Components */
function OutlineButton({ href, children }) {
  return (
    <a 
      href={href}
      className="px-8 py-3 rounded-lg font-bold text-lg border-2 
                 border-white text-white hover:bg-white hover:text-purple-800
                 transition-all duration-300"
    >
      {children}
    </a>
  );
}

function DownloadCVButton() {
  return (
    <a
      href="/cv.pdf"
      download="Oussama_Taouji_CV.pdf"
      className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white 
                 font-bold rounded-lg transition-colors shadow-md
                 hover:scale-105 transform duration-200"
    >
      Download My CV
    </a>
  );
}