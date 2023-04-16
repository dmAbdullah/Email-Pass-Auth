import React from 'react';
import { Link } from 'react-router-dom';

const Hader = () => {
    return (
        <nav className='mb-4 d-flex gap-3'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/register-rbs'>RegisterRBS</Link>
        </nav>
    );
};

export default Hader;