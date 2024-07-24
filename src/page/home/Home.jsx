import React from 'react'
import './home.css'
import me from './images/it_me.jpeg'

const bio_text = () => {
  return (
    <>
    <h3 className='d-flex justify-content-center '>Julian Witjaksono</h3>
    </>
  )  
}

const img_profile = () => {
  return (
    <>
      <img src = {me} className=" img-fluid rounded-circle justify-content-center " alt="Julian"/>
    </>
  )
}

const profile_me = () => {
  return(
      <>
        <p>Hello, my name is Julian,</p>
      </>

  )
}

function Home  ()  {
  return (
    <div>
        <div className="hero-section">
            <div className="container d-flex align-items-center justify-content-center fs-1 text-white flex-column">
              <div className="image-text">
                {img_profile()}
                {bio_text()}
              </div>
            </div>
            {profile_me()}
        </div>
    </div>
  )
}

export default Home

