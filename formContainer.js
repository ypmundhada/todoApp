import React from "react"
import FormComponent from "./formComponent"
class FormContainer extends React.Component{
    constructor() {
      super()
      this.state = {
        firstName:"",
        lastName:"",
        age:0,
        gender:"",
        destination:"",
        dietaryRestrictions:{
          sugar:false,
          bloodPressure:false,
          lactase:false
        }
      }
      this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event){
      const {name,value,checked,type} = event.target
      if (type === "checkbox") {
        this.setState(prevState => {
          // [name]:checked
          return{
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]:checked
            }
          }
        })
      }
      else{
        this.setState({
          [name]:value
        })
      }
    }
    render() {
        return (
            <FormComponent
             handleChange={this.handleChange}
             data = {this.state}
            />
        )
    }
  }

export default FormContainer