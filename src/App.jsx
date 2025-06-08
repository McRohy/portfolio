
import Navbar from './Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <main className="relative bg-gradient-to-b from-white via-gray-500 to-black">
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  )
}

export default App
