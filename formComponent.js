import React from "react"
import FormContainer from "./formContainer"
function FormComponent(props) {
    return(
        <form>
        <input 
            type="text" 
            name="firstName" 
            value = {props.data.firstName} 
            onChange={props.handleChange} 
            placeholder="First Name"
        />
        <br/>
        <input 
            type="text" 
            name="lastName" 
            value = {props.data.lastName} 
            onChange={props.handleChange} 
            placeholder="Last Name"
        />
        <br/>
        <input
            type="number"
            name="age"
            value={props.data.age}
            onChange={props.handleChange}
        />
        <br/>
        <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender==="male"} 
            onChange={props.handleChange} 
        />Male
        <br/>
        <input
            type="radio"
            name="gender"
            value="female" 
            checked={props.data.gender==="female"}
            onChange={props.handleChange} 
        />Female
        <br/>
        <select
            name="destination"
            value={props.data.destination}
            onChange={props.handleChange}
        >
            <option value="">Please Select a destination</option>
            <option value="kashmir">Kashmir</option>
            <option value="switzerland">Switzerland</option>
            <option value="london">London</option>
            <option value="new orleans">New Orleans</option>
        </select>
        <br/>
        <label>
            <input
            type="checkbox"
            name="sugar"
            checked={props.data.dietaryRestrictions.sugar}
            onChange={props.handleChange}
            />Sugar
        </label>
        <br/>
        <label>
            <input
            type="checkbox"
            name="bloodPressure"
            checked={props.data.dietaryRestrictions.bloodPressure}
            onChange={props.handleChange}
            />Blood Pressure
        </label>
        <br/>
        <label>
            <input
            type="checkbox"
            name="lactase"
            checked={props.data.dietaryRestrictions.lactase}
            onChange={props.handleChange}
            />Lactase
        </label>
        <h1>Your Name: {props.data.firstName} {props.data.lastName}</h1>
        <h2>Your Age: {props.data.age} Gender: {props.data.gender}</h2>
        <h2>Destination: {props.data.destination}</h2>
        <h2>Restrictions:</h2>
        <p>
            <span style={{display: props.data.dietaryRestrictions.sugar ? "inline" : "none"}}>Sugar,</span>
            <span style={{display: props.data.dietaryRestrictions.bloodPressure ? "inline" : "none"}}>Blood Pressure,</span>
            <span style={{display: props.data.dietaryRestrictions.lactase ? "inline" : "none"}}>Lactase</span>
        </p>
        </form>
    )
}

export default FormComponent