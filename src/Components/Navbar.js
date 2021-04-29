import React, { useContext } from 'react';
import userContext from '../Context/userContext';

const Navbar = () => {
    const nombre = useContext(userContext);
    return (
        <div>
            <nav>
                Hello {nombre.name}
            </nav>
        </div>
    );
}

export default Navbar;
