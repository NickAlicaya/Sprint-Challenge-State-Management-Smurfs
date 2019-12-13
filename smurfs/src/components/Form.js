import React, {useState,useEffect} from "react";

const Form =(props) => {
    const {name,age,height} = props;
    return (
       <form className="form" onSubmit={props.handleSubmit}>
 <br/> <br/>
       <input
       placeholder="Name"
       name={name}
       value={name}
       onChange={props.handleNameChange}
       />
       <br/>
       <br/>
       <input
       placeholder="Age"
       name={age}
       value={age}
       onChange={props.handleAgeChange}
       />
       <br/>
       <br/>
       <input
       placeholder="Height"
       name={height}
       value={height}
       onChange={props.handleHeightChange}
       />
       <br/>
       <br/>
       <button onClick={props.handleSubmit}>Submit</button>
       <br/>
       </form>

    )
}

export default Form






