import React from 'react';
import './Header.css'

function Header() {
  return (
    <main className='header mt-10'>
      {/* <h1>Fullstack Challenge 2022 🏅</h1> */}
      <div className='header-text'>
        <h1>Covid Daily Cases</h1>
        <p className="coodesh">This is a challenge by <a href="https://coodesh.com/">Coodesh</a></p>
      </div>
    </main>
  );
}

export default Header;