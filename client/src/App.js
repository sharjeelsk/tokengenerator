import './App.css';
import axios from 'axios'
import React from 'react'
//http://localhost:3000/
function App() {
  const [state,setState] = React.useState("")
  
  const sendRequest=()=>{
    axios.post(`http://localhost:3002/generateToken`)
    .then(response=>{

      setState(response.data)
    })
    .catch(err=>console.error(err))
  }
  return (
    <div className="App">
    <h1>Token Generator</h1>      
    <p>after clicking on the button below a token will be generated</p>
    <div className="shadow-lg buttondiv">
      <p>{state}</p>
      <button onClick = {()=>sendRequest()} className="btn-grad">Click To Generate Token</button>
    </div>
    <footer>
     <p style={{marginTop:"10px"}}>A Gift By Tech Geeks To <span className="spanname">Rahat Mam</span></p>
    </footer>
    </div>
  );
}

export default App;
