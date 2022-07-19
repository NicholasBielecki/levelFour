import React, {useState, useEffect} from "react";


const AppContext = React.createContext()
const axios = require('axios').default;


function ContextProvider(props){
    console.log("render")

//Used so on page load contents from API are displayed. 
useEffect(()=> getRequest(), [])


    const [inputState, setInputState] = useState([])
    const [listState, setListState] = useState([])


    function inputBoxOnChange(event){
        event.preventDefault()
        setInputState(prevState => {
            return{
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }


    function inputBoxSubmit(event){
        event.preventDefault()
        document.getElementById("inputForm").reset()
      
        axios.post("https://api.vschool.io/<NicholasBielecki>/thing/", inputState)
    .then(() => getRequest())
    .catch(error => console.log(error))
//Resets Inputbox for future uses.
    setInputState([])
    }

   
    function deleteFunction(event){
        event.preventDefault()

        axios.delete(`https://api.vschool.io/<NicholasBielecki>/thing/${listState[event.target.value]._id}`)  
        .then(() => getRequest())
        .catch(error=>console.log(error))
    }

    function saveEdit(event, editedContent){
        event.preventDefault()
        axios.put(`https://api.vschool.io/<NicholasBielecki>/thing/${listState[event]._id}`, editedContent)
        .then(() => getRequest())
        .catch(error=>console.log(error))
    }

    function getRequest(){
        axios.get("https://api.vschool.io/<NicholasBielecki>/thing/")
        .then(responce =>{ 
        setListState(responce.data)
        })
        .catch(error => console.log(error))
    }


    return(
<AppContext.Provider  value={{inputBoxSubmit : inputBoxSubmit, inputBoxOnChange : inputBoxOnChange, deleteFunction : deleteFunction, saveEdit : saveEdit, listState : listState }}>
   {props.children}
</AppContext.Provider>
    )
}


export {AppContext, ContextProvider}