import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white-600 p-4 text-white'>
      <ul className='flex gap-4'>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/input'>Input</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;