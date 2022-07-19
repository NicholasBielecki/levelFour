import React, {useState, useEffect, useRef} from "react"

export default function App(){
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const someReference = useRef(null)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            setIsTimeRunning(false)
           setWordCount(calculateWordCount(text))
        }
    }, [timeRemaining, isTimeRunning])

   
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled = {!isTimeRunning}
                useRef = {someReference}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button disabled = {isTimeRunning} onClick={() =>{setIsTimeRunning(true); setTimeRemaining(5); setText(""); setWordCount(0)}}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

