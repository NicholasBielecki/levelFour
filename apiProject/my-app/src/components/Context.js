import React, {useState, useEffect} from "react";

const AppContext = React.createContext()
const axios = require('axios').default;

function ContextProvider(props){

    const [randomAnimal, setRandomAnimal] = React.useState("")
    const [animalList, setAnimalList] = React.useState([])
    const [buttonStatus, setButtonStatus] = React.useState(false)

    
    function getRequest(){
        setButtonStatus(false)

        axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then(responce =>{ 
        setRandomAnimal(responce.data)
        })
        .catch(error => console.log(error))
    }


    function like(){
        setButtonStatus(true)

       setAnimalList(prevState =>{
            return[
                ...prevState,
             randomAnimal
            ]
        })        
    }

    function deleteFunction(event){
        console.log(event.target.value)
        setAnimalList(prevState =>{
            prevState.splice(event.target.value, 1)
            return[
                ...prevState
            ]
        })
    }



    return(
        <AppContext.Provider value={{getRequest : getRequest, randomAnimal : randomAnimal, like : like, animalList : animalList, buttonStatus : buttonStatus, deleteFunction : deleteFunction}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextProvider}