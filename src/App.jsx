import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <main className="relative">
        <Navbar />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
