import React, {useState, useEffect} from 'react'
import logo from "../images/logo.svg"
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close-menu.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(768)

  useEffect(() => {
    if (window.innerWidth >= width) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [])

  return (
    <>
    <header className=" absolute flex items-center justify-between 
    px-5 py-8 w-full">
    <div>
        <img src={logo} alt=""/>
    </div>

   {isOpen && ( <nav className="absolute mt-56 w-9/12 ml-16 md:relative
   md:mt-0 md:w-auto md:ml-0">
        <ul className="bg-white shadow-2xl rounded-2xl py-3
        md:bg-transparent md:shadow-none md:rounded-none md:py-0
        md:flex">
            <li className="py-4 border-b border-gray-200 px-5 cursor-pointer md:px-0 md:py-0 md:border-none md:text-white md:mx-3">About</li>
            <li className="py-4 border-b border-gray-200 px-5 cursor-pointer md:px-0 md:py-0 md:border-none md:text-white md:mx-3">Discover</li>
            <li className="py-4 px-5 cursor-pointer md:px-0 md:py-0 md:border-none md:text-white md:mx-3">Get Started</li>
        </ul>
    </nav>
    )}
    <div className="md:hidden">
      {isOpen ? (<img src={close} alt=""
      className="w-5 cursor-pointer" 
      onClick={() => setIsOpen (!isOpen)} /> 
      ): (
      <img src={hamburger} alt="" className="w-6 cursor-pointer"
      onClick={() => setIsOpen (!isOpen)}
    />
      )}
    </div>
    </header>
    </>
    
  )
}

export default Header