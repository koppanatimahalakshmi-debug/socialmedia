import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import Profile from './Profile'

const NavbarContainer = () => {
  return (
    <>
    <article>
      <Logo/>
      </article>
      <article>
        <Navigation/>
        </article>
        <article>
          <Profile/>
          </article>
          </>
  )
}

export default NavbarContainer;
