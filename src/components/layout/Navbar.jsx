import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SigninLinks';
import SignedOutLinks from './SignOutLinks';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? ( <SignedInLinks/> ): ( <SignedOutLinks/> );
    return ( 
        <nav className="nav-wrapper #0d47a1 #263238 blue-grey darken-4">
            <div className="container">
                <Link to='/' className='brand-logo'>My Planner</Link>
                { links }
            </div>
        </nav>
     );
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);