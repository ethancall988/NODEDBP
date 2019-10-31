import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <h1>CHUCKS JOKES</h1>
      <nav>
        <Link to="/">Best Jokes </Link>

        <Link to="/TrashJokes">   Trash</Link>
      </nav>
    </header>
  )
}

export default Header