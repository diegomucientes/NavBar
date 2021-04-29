//este componente debe ajustar la barra de navegación y los componentes FormWrapper (y accederá a useState).
import React, {useState,useContext } from 'react';
import userContext from '../Context/userContext';


const Wrapper = (props) => {
    
    const [name, setname] = useState("Pedro");
    const {children} = props;
    
    return (
        <div className="wrapper">
            <userContext.Provider value={{name,setname}}>
                {children}
            </userContext.Provider>
           
        </div>
    );
}

export default Wrapper;
