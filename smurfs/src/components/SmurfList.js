import React, {useState,useEffect} from "react";

const SmurfList = (props) => (
    <div className="smurfCards">
        {props.smurfs.map((smurf)=>{
return<div className="smurfCard" key={smurf.id}>
        <h3>{smurf.name}</h3> 
        <h4>{smurf.age}</h4>
        <h4>{smurf.height}</h4>
    </div>
        })}
        </div>
)

export default SmurfList