import Link from 'next/link'
import React from 'react'
import "./about.css"

const Layout = ({ children }) => {
  return (
    <div>
        <ul className="about-menu">
            <li>
                <h4>About Navbar</h4>
            </li>
            <li>
                <Link href="/about">about Main</Link>
            </li>
            <li>
                <Link href="/about/aboutstudent">About Student</Link>
            </li>            
            <li>
                <Link href="/about/aboutcollege">About Teacher</Link>
            </li>
        </ul>
        {children}
    </div>
  )
}

export default Layout