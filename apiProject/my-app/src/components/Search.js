import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { AppContext } from "./Context";

const axios = require('axios').default;

export default function Search(){

const {getRequest, randomAnimal, like, buttonStatus} = React.useContext(AppContext) 

let collapseDisplay = false

// function collapseDisplayFunction (){
//     if (typeof(randomAnimal) === "object" ){
//         collapseDisplay = true
//     }
// }
// collapseDisplayFunction()

if (typeof(randomAnimal) === "object" ){
    collapseDisplay = true
}
else{collapseDisplay = false}


    return(
        <div className="searchMainDiv">

            <h3 style={{display: collapseDisplay ? "none" : "block"}}>Hit New Animal to Get Started!</h3>

           <h5 style={{display: collapseDisplay ? "block" : "none"}}>Use the New Animal button to search for a random animal. If you want to save it to your list, hit Like!</h5>

                <button onClick={getRequest}>New Animal</button>

                <br></br>

            <div className="searchDisplay" style={{display: collapseDisplay ? "flex" : "none"}}>
                <div> <b>Name:</b> {randomAnimal.name}</div>
                    <br></br>
                <img src={`${randomAnimal.image_link}`}/>
                    <br></br>
                <span> <b>Geological Range:</b> {randomAnimal.geo_range}</span>
                    <br></br>
                <span> <b>Habitat:</b> {randomAnimal.habitat}</span>
                    <br></br>
                <span> <b>Diet:</b> {randomAnimal.diet}</span>
            </div>

            <br></br>

                <button style={{display: collapseDisplay ? "block" : "none"}} disabled = {buttonStatus} onClick={like}>Like</button>

                <br></br>

          

          
        </div>
    )
}