import React from 'react'
import Header from '../../Header/header'
import LinkDin from '../../Assets/Images/Socials/Linkdin.svg'
import Git from '../../Assets/Images/Socials/Github.svg'
import Twitter from '../../Assets/Images/Socials/Twiter.svg'

const HomePage = () => {
  return (
    <>
    <div className="header-container">
        <Header/>
    </div>
    <div className="home-container">
       <div className="home-content gap-4 d-flex align-items-center justify-content-center h-100">
        <div className="my-profession">
            <p>Fullstack Developer</p>
            <p>Mumbai,India</p>
            <div className="social-handle">
            <a href="#">
                <img src={LinkDin} alt="" />
            </a>
            <a href="#" className='px-2'>
            <img src={Git} alt="" />
            </a>
            <a href="#">
            <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
        <div className="my-name">
            <p className='display-1'>Aarif</p>
            <p className='display-1'>Anis</p>
            <p className='display-1'>Ansari</p>
        </div>
       </div>
    </div>
    </>
  )
}

export default HomePage
