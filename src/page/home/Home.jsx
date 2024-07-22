import React from 'react'
import './home.css'
import me from './images/it_me.jpeg'

function Home  ()  {
  return (
    <div>
        <section className="hero-section">
            <div className="container d-flex align-items-center justify-content-center fs-1 text-white flex-column">
            <img src = {me} class="rounded-circle" alt="Julian"/>
            </div>
            <h3 className='d-flex justify-content-center'>Julian Witjaksono</h3>
        </section>
        
      </div>
  )
}

export default Home

