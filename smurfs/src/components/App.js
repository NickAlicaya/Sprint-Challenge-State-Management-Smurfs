import React, { useState, useEffect } from "react";
import "./App.css";
import {connect} from "react-redux";
import {getSmurfs} from "../actions/GetSmurfs";
import {postSmurfs} from "../actions/PostSmurfs";
import Form from "../components/Form";
import SmurfList from "../components/SmurfList.js";


function App(props) {
  const [name,setName] = useState("");
  const [age,setAge] =useState("");
  const [height,setHeight] = useState("");
  

useEffect(() => {
  props.getSmurfs()
},[])

const handleSubmit = e => {
  e.preventDefault();
  props.postSmurfs({
    name:name,
    age:age,
    height:height,
    id:Date.now()
  })
  setName("")
  setAge("")
  setHeight("")
}

//notsure if this part will work check it
const handleNameChange = e => {
  e.preventDefault();
  setName(e.target.value)
}

const handleAgeChange = e => {
  e.preventDefault();
  setAge(e.target.value)
}
const handleHeightChange = e => {
  e.preventDefault();
  setHeight(e.target.value)
}


    return (
      <div>

      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form age={age} name={name} height={height} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleAgeChange={handleAgeChange} handleHeightChange={handleHeightChange}/>
        <SmurfList smurfs={props.smurfs}/>
      </div>

     
      </div>
    );
  }


function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  getSmurfs,
  postSmurfs
}


export default connect(mapStateToProps, mapDispatchToProps)(App);