import React, {useContext} from "react";
import {AppContext} from "./Context"


export default function Home(){

    

    return(
        <div className="homeMainDiv">
        <p className="largeFont">Welcome To My Zoo Animals Website!</p>   
        <p className="mediumFont">To start go to the search tab to start searching for zoo animals. If you like an animal, hit the like button and it will be added to your list!</p>

        <p className="smallFont">Credit to https://zoo-animal-api.herokuapp.com/ for maintaing the free API that is used on this website</p>


        </div>
    )
}