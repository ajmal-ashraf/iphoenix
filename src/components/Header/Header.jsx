import { useState } from 'react'
import './Header.css'

const Header = () => {

   const [active , isActive] = useState(false)

  return (
    <>
      <header>
          <nav className='container'>
              <div className='logo'>
                <h3><a href='#home'>iPhoɘnix.</a></h3>
              </div>
              <div className='nav-bar'>
                 <ul className={ active ? "list-style is-active" : "list-style"}>
                    <li className='list-item active'>
                       <a href='#home'>Home</a>
                    </li>
                    <li className='list-item'>
                       <a href='#about'>About</a>
                    </li>
                    <li className='list-item'>
                       <a href='#product'>Products</a>
                    </li>
                    <li className='list-item'>
                       <a href='#collection'>Collection</a>
                    </li>
                    <li className='list-item'>
                       <a href='#contact'>Contact</a>
                    </li>
                 </ul>
                 <div className='icon'>
                     <i className="fa-solid fa-bars" onClick={() => isActive(!active)}></i>
                 </div>
              </div>
          </nav>
      </header>
    </>
  )
}

export default Header
