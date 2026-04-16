import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'

export default function App() {
  const location = useLocation()

  return (
    <div className="site-shell">
      <BackgroundEffects />
      <Navbar />

      <AnimatePresence mode="wait">
        <main key={location.pathname} className="main-content">
          <Outlet />
        </main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}