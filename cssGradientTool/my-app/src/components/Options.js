import React from "react";
import Display from "./Display"

export default function Options(){
const [colorOneState, setColorOneState] = React.useState([])
const [colorTwoState, setColorTwoState] = React.useState([])
const [angleState, setAngleState] = React.useState([])


function submitFunction(){
 setColorOneState(document.getElementById("colorOne").value)
 setColorTwoState(document.getElementById("colorTwo").value)
 setAngleState(document.getElementById("angleState").value)
}

    return(
        <div className="centerBox">
            <Display
            colorOne = {colorOneState}
            colorTwo = {colorTwoState}
            angle =   {angleState ? angleState : "0"}
            />
        <div className="options">
                <h4 className="optionsHeader">Options</h4>

                <div className="colorDiv">
                    Color 1
                    <span>{colorOneState}</span>
                    <input id="colorOne" type={"color"}></input>
                </div>

                <div className="colorDiv">
                    Color 2
                    <span>{colorTwoState}</span>
                    <input id="colorTwo" type={"color"}></input>
                </div>

                <div className="colorDiv">

                    <span>
                        Angle
                    <input id="angleState" className="numberInput" type={"number"}/>
                    </span>
                    
                    <button onClick={submitFunction}>Submit</button>
                </div>
                        </div>

                        </div>
    )
}