import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SigninLinks';
import SignedOutLinks from './SignOutLinks';

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? ( <SignedInLinks profile = { profile }/> ): ( <SignedOutLinks/> );
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
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

export default connect(mapStateToProps)(Navbar);