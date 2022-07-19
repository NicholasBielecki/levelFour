import React, {useRef} from "react";

function Display(props){
  
  const inputRef = useRef(null)

  function copy(event){
    event.preventDefault()
    inputRef.current.select()
  }
  
    return(
      <div className="display">
        <div className="backgroundDiv" style={{background: `linear-gradient(${props.angle}deg ,${props.colorOne}, ${props.colorTwo})` }}></div>


            <form>
                  <textarea ref={inputRef} className="textArea" readOnly value= {`background: linear-gradient(${props.angle}deg ,${props.colorOne}, ${props.    colorTwo}); 
                    -moz-background: linear-gradient(${props.angle}deg ,${props.colorOne}, ${props.colorTwo}); 
                    -webkit: linear-gradient(${props.angle}deg ,${props.colorOne}, ${props.colorTwo}`}/>

                <button className="displayButton" onClick={copy}>Copy Text</button>

            </form>
         

        

        </div>

    )
    
   
}


export default Display