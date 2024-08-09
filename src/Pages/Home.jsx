import React from 'react'
import { Link } from 'react-router-dom'


export default function home() {
  return (
    <div>
        <h1>Home page</h1>
        <Link to="/about">About</Link>
        <br />
        <br />
        <Link to="/contacts">Contacts</Link>

    </div>
  )
}
