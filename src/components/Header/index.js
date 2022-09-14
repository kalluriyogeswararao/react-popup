import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <div className="logo-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button type="button" className="button" testid="hamburgerIconButton">
          <GiHamburgerMenu className="close" />
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
            testid="closeButton"
          >
            <IoMdClose className="home-icon" />
          </button>
          <ul className="home-icon-container">
            <li>
              <AiFillHome className="home-icon" />
              <Link to="/" className="heading">
                Home
              </Link>
            </li>
            <li>
              <BsInfoCircleFill className="home-icon" />
              <Link to="/about" className="heading">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
