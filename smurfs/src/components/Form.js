import React, {useState,useEffect} from "react";

const Form =(props) => {
    const {name,age,height} = props;
    return (
       <form onSubmit={props.handleSubmit}>

       <input
       placeholder="Name"
       name={name}
       value={name}
       onChange={props.handleNameChange}
       />
       <br/>

       <input
       placeholder="Age"
       name={age}
       value={age}
       onChange={props.handleAgeChange}
       />
       <br/>

       <input
       placeholder="Height"
       name={height}
       value={height}
       onChange={props.handleHeightChange}
       />
       <br/>

       <button onClick={props.handleSubmit}>Submit</button>

       </form>

    )
}

export default Form






