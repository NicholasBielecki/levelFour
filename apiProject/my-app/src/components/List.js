import React from "react";
import { AppContext } from "./Context";

export default function List (){

    const {animalList, deleteFunction} = React.useContext(AppContext)

    let collapseDisplay = false
    if (animalList.length > 0){
        collapseDisplay = true
    }
    else{collapseDisplay = false}

    function alternateBorder(index){
        if(index % 2 === 0){
            return("blackBorder")
        }
        else{
            return("redBorder")
        }
    }

    let mappedList = animalList.map((param1, index) => {
        return(<div key={index}>
           <div className={`listDiv ${alternateBorder(index)}`} style={{display: collapseDisplay ? "flex" : "none"}}>
                <div> <b>Name:</b> {param1.name}</div>
                    <br></br>
                <img src={`${param1.image_link}`}/>
                    <br></br>
                <span> <b>Geological Range:</b> {param1.geo_range}</span>
                    <br></br>
                <span> <b>Habitat:</b> {param1.habitat}</span>
                    <br></br>
                <span> <b>Diet:</b> {param1.diet}</span>
                <br></br>
                <button value={index} onClick={deleteFunction}>Delete</button>
            </div>
        </div>)
    })

    return(
        <div className="listMainDiv">
             <h3 style={{display: collapseDisplay ? "none" : "block"}}>Add Some Animals To Your List</h3>
            {mappedList}
        </div>
    )
}