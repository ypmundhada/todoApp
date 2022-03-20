import React from "react"
function Joke(props) {
    return(
        
        <div>
            <p style={{display: props.question ? "block":"none"}}>Question: {props.question}</p>
            <p>Answer: {props.punchline}</p>
        </div>
    )
}
export default Joke