import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SigninLinks';
import SignedOutLinks from './SignOutLinks';

const Navbar = () => {
    return ( 
        <nav className="nav-wrapper #0d47a1 #263238 blue-grey darken-4">
            <div className="container">
                <Link to='/' className='brand-logo'>My Planner</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
     );
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(Navbar);