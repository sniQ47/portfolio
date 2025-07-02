export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-600 to-purple-800 text-white">
      
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Oussama Taouji</h1>
        <nav className="flex gap-6">
          <a href="#projects" className="text-xl hover:text-purple-200 transition">Projects</a>
          <a href="#contact" className="text-xl hover:text-purple-200 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 grid place-items-center p-6">
        <section className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Oussama</h1>
          <p className="text-xl mb-10 leading-relaxed">
            I don't know what I'm doing... but somehow I make it work!
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <OutlineButton href="#projects">
              See My Work
            </OutlineButton>
            <OutlineButton href="#contact">
              Let's Talk
            </OutlineButton>
          </div>
        </section>
      </main>
    </div>
  );
}



function OutlineButton({ href, children }) {
  return (
    <a 
      href={href}
      className="px-8 py-3 rounded-lg font-bold text-lg 
                 border-2 border-white text-white hover:bg-white hover:text-purple-800"
    >
      {children}
    </a>
  );
}