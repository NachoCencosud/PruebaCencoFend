import "./Header.css";
import React from 'react'

const Header = ({children}) => {
  return (
    <div className="header-top">{children}</div>
  )
}

export default Header