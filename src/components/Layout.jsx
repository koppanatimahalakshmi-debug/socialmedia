import React from 'react'
import NavbarContainer from './navbar/NavbarContainer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <nav>
        <NavbarContainer/>
      </nav>
      <section>
        <Outlet/>
      </section>
    </main>
  )
}

export default Layout
