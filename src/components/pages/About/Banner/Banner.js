import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='about-banner'>
            <div className="bn-left">
                <h1>Outkos Academy</h1>
                <p>Outkos Academy is a company in Kosovë</p>
                <Link to='/' className="bn-link">Learn more</Link>
            </div>
    </div>
  )
}

export default Banner