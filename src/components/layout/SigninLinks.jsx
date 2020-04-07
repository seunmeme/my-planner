import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return ( 
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating #ffab40 orange accent-2'>SO</NavLink></li>
        </ul>
     );
}
 
export default SignedInLinks;