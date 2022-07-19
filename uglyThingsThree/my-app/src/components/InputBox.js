import React, { useContext } from "react";
import { AppContext } from "./Context";


export default function InputBox(){

    const {inputBoxSubmit, inputBoxOnChange} = useContext(AppContext)

    return(
        <div className="inputDiv">
           <form className="inputForm" id="inputForm">
            <input placeholder="title" name="title" onChange={inputBoxOnChange}/>
            <input placeholder="URL" name="imgUrl" onChange={inputBoxOnChange}/>
            <input placeholder="description" name="description" onChange={inputBoxOnChange}/>
            <button type="button" onClick={inputBoxSubmit}>Submit</button>
           </form>
        </div>
    )
}