import React from "react";
import { Input } from './styles.input';

const Inputs = ({ label, type, name, value, onChange, onBlur, changeTheColorOfButtonDemo, error, placeholder, id }) => {
  
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      
      <Input 
        placeholder={placeholder}
        error={error}
        id={id} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={changeTheColorOfButtonDemo}
        /> 
    </>
      
  )
};



export default Inputs;