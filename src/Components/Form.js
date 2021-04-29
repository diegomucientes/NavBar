import React,{useContext} from 'react';
import userContext from '../Context/userContext';


const Form = () => {
    const {name,setName} = useContext(userContext);
    return (
        <form>
            <label htmlFor="name">Your name:</label>
            <input id="name"value={name}onChange={(e)=>setName(e.target.value)}></input>
        </form>   
    );
}

export default Form;
