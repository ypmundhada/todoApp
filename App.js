// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Header from './Header.js'
// import MainContent from './MainContent';
// import Footer from './Footer';
import TodoItem from './TodoItem';
import todosData from './todosData'
// import ContactCard from './ContactCard';
// import Joke from './Joke';
// import jokesData from './jokesData'
// import products from './Products'
// import Product from './Product'
import randomcolor from "randomcolor"
import Conditional from "./conditional"
import FormContainer from './formContainer';

// useEffect => to hook into a component's life CycleMethods:
// its a way to run code on every render.
// the function passed in as arg will run every time there is a re render:
// once initially(did mount), when a component updates(did update)
// replacement for 3 lifeCycle methods
// 1)componentDidMount
// 2)componentDidUpdate
// 3)componentWillUnmount

function App() {
  const [count,setCount] = React.useState(0)
  const [answer,setAnswer] = React.useState("Yes")
  const [color,setColor] = React.useState("")
  // function increment() {
  //   setCount(prevCount => prevCount + 1)
  // }
  // function decrement() {
  //   setCount(prevCount => prevCount - 1)
  // }
  React.useEffect(() => {
    setColor(randomcolor())
  }, [count])
  
  // React.useEffect(() => {
  //   setColor(randomcolor())
  // }, [])
  // the above will run only once when the component Mounts
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    },1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return(
    <div>
      <h1 style={{color:color}}>{count}</h1>
    </div>
  )
}


// React Hooks:
// 1)useState
// 2)useEffect
// function App() {
//   const value = React.useState("Yes")
//   // whatever is put as an arg in useState is the initial value of the state
//   // console.log(value);
//   // Creating State
//   // Array Destructuring
//   const [answer] = React.useState("Yes")
//   // the second item in the array returned, is a function which allows us to change the state.

//   return(
//     <div>
//       <h1>Is state important to know? {value[0]}</h1>
//       <h1>Is state important to know? {answer}</h1>
//     </div>
//   )
// }
// class App extends React.Component {
//   constructor() {
//       super()
//       this.state = {
//           answer: "Yes"
//       }
//   }
  
//   render() {
//       return (
//           <div>
//               <h1>Is state important to know? {this.state.answer}</h1>
//           </div>
//       )
//   }
// }

// function App() {
//   return(
//     <FormContainer/>
//   )
// }
// class App extends React.Component{
//   constructor() {
//     super()
//     this.state = {
//       firstName:"",
//       lastName:"",
//       age:0,
//       gender:"",
//       destination:"",
//       dietaryRestrictions:{
//         sugar:false,
//         bloodPressure:false,
//         lactase:false
//       }
//     }
//     this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(event){
//     const {name,value,checked,type} = event.target
//     if (type === "checkbox") {
//       this.setState(prevState => {
//         // [name]:checked
//         return{
//           dietaryRestrictions: {
//             ...prevState.dietaryRestrictions,
//             [name]:checked
//           }
//         }
//       })
//     }
//     else{
//       this.setState({
//         [name]:value
//       })
//     }
//   }
//   render() {
//     return(
      // <form>
      //   <input 
      //     type="text" 
      //     name="firstName" 
      //     value = {this.state.firstName} 
      //     onChange={this.handleChange} 
      //     placeholder="First Name"
      //   />
      //   <br/>
      //   <input 
      //     type="text" 
      //     name="lastName" 
      //     value = {this.state.lastName} 
      //     onChange={this.handleChange} 
      //     placeholder="Last Name"
      //   />
      //   <br/>
      //   <input
      //     type="number"
      //     name="age"
      //     value={this.state.age}
      //     onChange={this.handleChange}
      //   />
      //   <br/>
      //   <input
      //     type="radio"
      //     name="gender"
      //     value="male"
      //     checked={this.state.gender==="male"} 
      //     onChange={this.handleChange} 
      //   />Male
      //   <br/>
      //   <input
      //     type="radio"
      //     name="gender"
      //     value="female" 
      //     checked={this.state.gender==="female"}
      //     onChange={this.handleChange} 
      //   />Female
      //   <br/>
      //   <select
      //     name="destination"
      //     value={this.state.destination}
      //     onChange={this.handleChange}
      //   >
      //     <option value="">Please Select a destination</option>
      //     <option value="kashmir">Kashmir</option>
      //     <option value="switzerland">Switzerland</option>
      //     <option value="london">London</option>
      //     <option value="new orleans">New Orleans</option>
      //   </select>
      //   <br/>
      //   <label>
      //     <input
      //       type="checkbox"
      //       name="sugar"
      //       checked={this.state.dietaryRestrictions.sugar}
      //       onChange={this.handleChange}
      //     />Sugar
      //   </label>
      //   <br/>
      //   <label>
      //     <input
      //       type="checkbox"
      //       name="bloodPressure"
      //       checked={this.state.dietaryRestrictions.bloodPressure}
      //       onChange={this.handleChange}
      //     />Blood Pressure
      //   </label>
      //   <br/>
      //   <label>
      //     <input
      //       type="checkbox"
      //       name="lactase"
      //       checked={this.state.dietaryRestrictions.lactase}
      //       onChange={this.handleChange}
      //     />Lactase
      //   </label>
      //   <h1>Your Name: {this.state.firstName} {this.state.lastName}</h1>
      //   <h2>Your Age: {this.state.age} Gender: {this.state.gender}</h2>
      //   <h2>Destination: {this.state.destination}</h2>
      //   <h2>Restrictions:</h2>
      //   <p>
      //     <span style={{display: this.state.dietaryRestrictions.sugar ? "inline" : "none"}}>Sugar,</span>
      //     <span style={{display: this.state.dietaryRestrictions.bloodPressure ? "inline" : "none"}}>Blood Pressure,</span>
      //     <span style={{display: this.state.dietaryRestrictions.lactase ? "inline" : "none"}}>Lactase</span>
      //   </p>
      // </form>
//     )
//   }
// }


// React Forms:
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state={
//       firstName:"",
//       lastName:"",
//       isFriendly:true,
//       gender:"",
//       favColor:"blue"
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
    // this.setState({
    //   [name] : value
    //   // [event.target.name]: event.target.value
    // })
  
  // handleChange(event) {
  //   const {name,value,type,checked} = event.target
  //   console.log(type);
  //   if (type === "checkbox"){
  //     this.setState({
  //       [name] : checked
  //     })
  //   }
  //   else {
  //     this.setState({
  //       [name] : value
  //     // as it represents a string it can be wrap in sw. brackets
  //     })
  //   }
  // }
  // render() {
  //   return(
      // Controlled Form => we want what is displayed inside of our form to perfectly match with what is in our state.
      // In the below case state updates according to changes in the input box.
      // But in Controlled Forms state directs what is showing inside of the input box
      // So, whatever is in input box is because of the current version of state
      // Or the "value" of input, or what shows in the input box to match whatever the state is.
//       <form>
//         <input 
//           type="text" 
//           value={this.state.firstName} 
//           placeholder="First Name" 
//           onChange={this.handleChange} 
//           name="firstName"
//         />
//         <br/>
//         <input 
//           type="text" 
//           value={this.state.lastName} 
//           placeholder="Last Name" 
//           onChange={this.handleChange} 
//           name="lastName"
//         />
//         {/* <h1>{this.state.firstName}{this.state.lastName}</h1> */}
//         <br/>
//         <textarea 
//           value={"Some default value"}
//           onChange={this.handleChange}/>
//         <br/>
//         <label>
//           <input 
//             type="checkbox" 
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//             />Is Friendly?
//         </label>
//         <br/>
//         <label>
//           <input 
//             type="radio" 
//             name="gender"
//             value="male"
//             checked={this.state.gender==="male"}
//             onChange={this.handleChange}
//             />Male
//         </label>
//         <br/>
//         <label>
//           <input 
//             type="radio" 
//             name="gender"
//             value="female"
//             checked={this.state.gender==="female"}
//             onChange={this.handleChange}
//             />Female
//         </label>
//         <br/>
//         <select 
//           value={this.state.favColor}
//           name="favColor"
//           onChange={this.handleChange}
//         >
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//           <option value="red">Red</option>
//           <option value="orange">Orange</option>
//           <option value="yellow">Yellow</option>
//         </select>
//         <h1>{this.state.firstName}{this.state.lastName}</h1>
//         <h2>{this.state.gender}</h2>
//         <h2>{this.state.favColor}</h2>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }

// Fetching API data with React:
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       character : {},
//       isLoading:false
//     }
//   }
//   componentDidMount() {
//     this.setState({isLoading:true})
//     fetch('https://swapi.dev/api/people/1')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         character:data,
//         isLoading:false
//       })
//     })
//   }
//   render() {
//   //   if (this.state.isLoading) {
//   //     return(
//   //       <div>Loading...</div>
//   //     )
//   //   }
//   //   return(
//   //     <div>
//   //       {this.state.character.name}
//   //     </div>
//   //   )
//   const text = this.state.isLoading ? "Loading..." : this.state.character.name
//   return(
//     <div>
//       <p>{text}</p>
//     </div>
//   )
//   }
// }

// https://swapi.dev/
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state= {
//       data:todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(id) {
//     this.setState(prevState => {
//       const updatedTodos = prevState.data.map(todo => {
//         if (todo.id === id) {
//           return({
//             ...todo,
//             completed : !todo.completed
//           })
//         }
//         return(todo)
//       })
//       return({
//         data:updatedTodos
//       })
//     })
//   }
//   render() {
//     const todoItems = this.state.data.map(item => <TodoItem key={item.id} data={item} handleChange = {this.handleChange}/>)
//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     ) 
//   }
// }

// class App extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       isLoggedIn : false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState(prevState => {
//       return{
//         isLoggedIn : !prevState.isLoggedIn
//       }
//     })
//   }
//   render() {
//     if (this.state.isLoggedIn) {
//       return(
//         <div>
//           <button onClick={this.handleClick}>Log Out</button>
//           <p>Logged In</p>
//         </div>
//       )
//     }
//     return (
//       <div>
//         <button onClick={this.handleClick}>Log In</button>
//         <p>Logged Out</p>
//       </div>
//     )
    
//   }
// }

// Conditional Render:
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading:true
//     }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading : false
//       })
//     },1500)
//   }
//   render() {
//     return(
//       <div>
//         <Conditional isLoading={this.state.isLoading}/>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count:0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count : prevState.count + 1,
//         color : ""
//       }
//     })
//   }
//   componentDidMount() {
//     console.log("Mounted");
//   }
//   componentDidUpdate(prevProps,prevState) {
//     if (prevState.count !== this.state.count) {
//       const newColor = randomcolor()
//       this.setState({color:newColor})
    // }
    // console.log("Did Update");
    // const newColor = randomcolor()
    // // console.log(newColor);
    // this.setState(
    //   {color:newColor}
    // )
    // the above causes a infinite loop:
    // a componentDIdUpdate happens everytime the component re-renders:
    // so, what causes re-render => re-render happens anytime we change the state.
    // the first time we clicked, handleClick changed the state, which caused the render, 
    // which caused componentDidUpdate, which again caused render (setState), this keeps on repeating.
    // So, anytime we have to setState inside didUpdate, setState only under certain conditions.

  // }
//   render() {
//     console.log("Render")
//     return(
//       <div>
//         <h1 style={{color:this.state.color}}>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     )
//   }
// }

// Lifecycle Methods:
// 1)Render => determine what gets rendered to the screen.
// => how the component is displayed to the world.
// => any time react determines that state changes, which might affect how the component is supposed to display
//  react will run the render method.
// 2)ComponentDidMount
// very first time the component shows up, react will run this method
// can be used in an API call, the method will run just once
// 3)componentWillReceiveProps(Deprecated) => everytime component receives prrpos it will run this method.
// 4)shouldComponentUpdate => give some logic to think abt whether or not it is imp for a component to update.
// 5)componentWillUnmount => 
// 6)getDerivedStateFromProps
// 7)GetSnapshotBeforeUpdate()
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {}
//   }
//   componentDidMount() {

//   }
//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.whatever !== this.props.whatever) {
//   //       // do something important here
//   //   }
// }
//   shouldComponentUpdate(nextProps, nextState) {
//     // return true if want it to update
//     // return false if not
//   }
//   componentWillUnmount() {
//     // teardown or cleanup your code before your component disappears
//     // (E.g. remove event listeners)
//   }
//   getSnapshotBeforeUpdate() {
//     // create a backup of the current way things are
//     // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
// }

//   render() {
//     return (
//       <div>
//         Code Goes Here
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       data:todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(id) {
//     console.log("changed",id);
//     this.setState(prevState => {
//       const updatedData = prevState.data.map(todo => {
//         if (todo.id === id) {
//           console.log(todo)
//           return {
//             ...todo,
//             completed : !todo.completed
//           }
//         }
//         return todo
//       })
//       // console.log(prevState.data)
//       // console.log(updatedData)
//       return {
//         data:updatedData
//       }
//     })
//   }
  
//   render() {
//     const todoItems = this.state.data.map(item => <TodoItem key={item.id} data={item} handleChange={this.handleChange}/>)
//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     )
//   }
// }



// Changing State
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count:0
//     }
//     this.handleClick = this.handleClick.bind(this)
//     // any time you create a class method on which you want to use setState
//     // you need to bind that method to the class
//   }
//   handleClick() {
//     // console.log("click");
//     // this.setState({count:1})
//     // the above method of changing state can be used if we don't care what the previous version of state was.
//     // But if we care what the previous state was as we want to add 1 to it:
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//     // the function receives as parameter the prev version of state.
//     // and returns the new version of state
//   }
//   render() {
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     )
//   }
// }

// Handling events

// function handleClick() {
//   console.log("I was Clicked");
// }

// function App() {
//   return (
//     <div>
//       <img src="https://www.fillmurray.com/200/100" onMouseOver={() => console.log("Hovered")}/>
//       <br></br>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }


// React State
// state is the data that a component maintains.
// the data can change its value.
// props can not be changed by the components receiving the props.
// props are immutable, state can be changed.
// if we want a component to maintain state, it should be a class based component.
// to add state => add constructor.



// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       data : todosData
//     }
//   }
//   render() {
//     const todoItems = this.state.data.map(item => <TodoItem key = {item.id} data={item}/>)
//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
      
//     )
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn:true
//     }
//   }
//   render() {
//     let wordDisplay
//     if (this.state.isLoggedIn) {
//       wordDisplay="In"
//     }
//     else{
//       wordDisplay="Out"
//     }
//     return (
//       <div>
//         <h1>You are currently logged <span style={{display:this.state.isLoggedIn ? "inline" : "none"}}>in</span><span style={{display:this.state.isLoggedIn ? "none" : "inline"}}>Out</span></h1>
//         <h1>You are currently logged {wordDisplay} </h1>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name:"Yadnesh",
//       age:20
//     }
//   }
//   render() {
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//       </div>
//     )
//   }
// }

// function App() {
//      return (
//         <div>
//             <h1>Code goes here</h1>
//         </div>
//     )
// }

// Class based components:
// class App extends React.Component {
//   render() {
//     // display logic:
//     // inline styling logic
//     return (
//       <div>
//         <h1>Code goes here</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return(
//       <div>
//         <Header username="Yadnesh"/>
//         <Greeting/>
//       </div>
//     )
//   }
// }

// class Header extends React.Component {
//   render() {
//     return(
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     )
//   }
// }

// class Greeting extends React.Component {
//   render() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//       <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )

//   }
// }





// function App() {
//   // const firstname = "Yadnesh"
//   // const lastname = "Mundhada"
//   // const styles = {
//   //   color:"red",
//   //   backgroundColor:"#ff2d00",
//   //   fontSize:24
//   // }
//   // if (true) {
//   //   styles.color = "aqua"
//   // }
//   // const jokeComponents = jokesData.map(joke => {
//   //    return(
//   //      <Joke key={joke.id} question={joke.question} punchline = {joke.punchLine}/>
//   //    )
//   // })
//   // console.log(jokeComponents);

//   // const productComponents = products.map(product => {
//   //   return (<Product
//   //   key={product.id}
//   //   product = {product}
//     // name = {product.name}
//     // price={product.price}
//     // description={product.description}

//     // />)
//   // })
//   // const todoItem = todosData.map(item => {
//   //   return (
//   //     <TodoItem
//   //     key = {item.id}
//   //     data = {item}
//   //     />
//   //   )
//   // })
//   return (
    
//     // <div className="todo-list">
//     // {/* //   {/* <input type="checkbox"></input>
//     // //   <p>Placeholder text here</p>
//     // //   <input type="checkbox"></input>
//     // //   <p>Placeholder text here</p>
//     // //   <input type="checkbox"></input>
//     // //   <p>Placeholder text here</p>
//     // //   <input type="checkbox"></input>
//     // //   <p>Placeholder text here</p> */}
//     // {/* //   <TodoItem/> */}
//     // {/* //   <TodoItem/> */}
//     // {/* //   <TodoItem/> */}
//     // {/* //   <TodoItem/> */} 
//     // {todoItem}
//     //  </div>
    
//     // <div>
//     //   {/* <Header/>
//     //   <MainContent/>
//     //   <Footer/> */}
      
//     //   {/* <h1 style = {styles}>Hello {firstname + " " + lastname}!</h1>
//     //   <h1>Hello {`${firstname} ${lastname}`}!</h1>
//     // </div> */}
//     // Props:
//   //   <div className="contacts">
//   //   <ContactCard 
//   //     // name="Mr. Whiskerson" 
//   //     // imgUrl="http://placekitten.com/300/200" 
//   //     // phone="(212) 555-1234" 
//   //     // email="mr.whiskaz@catnap.meow"
//   //     contact={{
//   //       name: "Mr. Whiskerson", 
//   //       imgUrl: "http://placekitten.com/300/200", 
//   //       phone: "(212) 555-1234",
//   //       email: "mr.whiskaz@catnap.meow"}}
//   //   />
//   //   <ContactCard 
//   //     contact={{
//   //      name: "Fluffykins",
//   //      imgUrl: "http://placekitten.com/400/200",
//   //      phone: "(212) 555-2345",
//   //      email: "fluff@me.com"}}
//   // />

//   // <ContactCard 
//   //     contact={{
//   //      name: "Destroyer",
//   //      imgUrl: "http://placekitten.com/400/300",
//   //      phone: "(212) 555-3456",
//   //      email: "ofworlds@yahoo.com"}}
//   // />

//   // <ContactCard 
//   //     contact={{
//   //      name: "Felix",
//   //      imgUrl: "http://placekitten.com/200/100",
//   //      phone: "(212) 555-4567",
//   //      email: "thecat@hotmail.com"}}
//   // />
//   // </div>

//     // <div>
      
//       // {/* {productComponents} */}
//       // {/* {jokeComponents} */}
//       // {/* <Joke joke={{punchline:"It’s hard to explain puns to kleptomaniacs because they always take things literally."}} />
//       // <Joke
//       // joke={{
//       //   question:"What's the best thing about Switzerland?",
//       //   punchline:"I don't know, but the flag is a big plus!"
//       // }}/>
//       // <Joke
//       // joke={{
//       //   question:"Did you hear about the mathematician who's afraid of negative numbers?",
//       //   punchline:"He'll stop at nothing to avoid them!"
//       // }}/>
//       // <Joke
//       // joke={{
//       //   question:"Hear about the new restaurant called Karma?",
//       //   punchline:"There’s no menu: You get what you deserve."
//       // }}/>
//       // <Joke
//       // joke={{
//       //   question:"Did you hear about the actor who fell through the floorboards?",
//       //   punchline:"He was just going through a stage."
//       // }}/>
//       // <Joke
//       // joke={{
//       //   question:"Did you hear about the claustrophobic astronaut?",
//       //   punchline:"He just needed a little space."
//       // }}/> */}
//     // </div>


//   );
// }

export default App;

// React Props:
// <a href="https://google.com">This is a link</a>
// {/* <input placeholder="First Name" name="" type=""/>
// /* <img src=""/> */

// in the above examples, the href, placeholder, name, type, src are all the properties.
