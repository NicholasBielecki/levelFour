import React, { useContext, useState } from "react";
import { AppContext } from "./Context";

export default function Card(){

    const {deleteFunction, saveEdit, listState} = useContext(AppContext)
    //The boolean is used to either hide or show the edit form. 
    const [editBoolean, setEditBoolean] = useState(false)
    const [editedContent, setEditedContent] = useState([])


    function toggleEdit(event){
       event.preventDefault()
       setEditBoolean(!editBoolean)
    }

    function handleChange(event){
        event.preventDefault()
        setEditedContent(prevState => { 
            return{
            ...prevState,
            [event.target.name] : event.target.value
        }
        })}

    function handleSubmit(event){
        event.preventDefault()
        setEditBoolean(!editBoolean)
        saveEdit(event.target.button.value, editedContent)
        console.log(event.target.button.value)
    }

    //Template used to create a Div from API. I give each card a value so I edit or delete it at the proper index. 
    let mappedList = listState.map( (param1, index) =>{
        return(
                
            <div key={index} className="card" value={1}>
            <form onSubmit={handleSubmit}>
                <h1>{param1.title} </h1>
                <input onChange={handleChange} name="title" style={{display: editBoolean ? "block" : "none"}}/>
                <img src= {param1.url} alt=""/>
                <input onChange={handleChange} name="imgUrl" style={{display: editBoolean ? "block" : "none"}}/>
                <h4>{param1.description}</h4>
                <input onChange={handleChange} name="description" style={{display: editBoolean ? "block" : "none"}}/> 
                <button value={index} name={"button"} style={{display: editBoolean ? "block" : "none"}}>Submit Edits</button>               
            </form>
         

           <button className="cardButton" value={index} onClick={deleteFunction}>Delete</button>
           <button className="cardButton" style={{display: editBoolean ? "none" : "block"}}  onClick={toggleEdit}>Edit</button>
        </div>
        )
    })

 
    return(
        <div>
            {mappedList}
        </div>
    )
}
