import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Services from './pages/Services'
import About from './pages/About'
import Process from './pages/Process'
import Testimonials from './pages/Testimonials'
import Contactus from './pages/Contactus'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className='relative flex flex-col items-center justify-center min-w-[100%] min-h-screen pb-64'>
      <Header />
      <Home />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Contactus />
      <Footer />
    </main>
  )
}
