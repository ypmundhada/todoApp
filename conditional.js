import React from "react"
function Conditional(props) {
    // if (props.isLoading) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }
    //     return(
    //         <h1>Some cool stuff about Conditional Rendering</h1>
    //     )
    return(
        <div>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about Conditional Rendering</h1>}
        </div>
    )
}
export default Conditional