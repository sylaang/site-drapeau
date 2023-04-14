import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
        <NavLink className={ ({isActive } ) => isActive ? "nav-active" : "" } 
        to ="/">
            accueil
        </NavLink>
        <NavLink className={ ({isActive } ) => isActive ? "nav-active" : "" }
        to ="/a-propos">
            A-propos
        </NavLink>
        </div>
    );
};

export default Navigation;