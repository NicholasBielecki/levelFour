import React from "react";
import {ContextProvider} from "./components/Context"
import InputBox from "./components/InputBox";
import Card from "./components/Card";

//This App is was an assignment to introduce us to React Context. I used a basic submit form and send it to an API set up by V School. Whenever changes are made to the list, my State changes in order to properly  display the desired list.

export default function MyApp(props){
   


    return(
        <div className="mainContainer">
        
        <ContextProvider>
           <InputBox/>
           <Card/>
        </ContextProvider>
    </div>
    
    )
}

