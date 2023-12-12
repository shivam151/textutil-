import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
 import {BrowserRouter as Router, Switch, Route, } from "react-router-dom"

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}
   const togglemode =()=>{
    if (mode  ==='light') {
      setmode ('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enable","success")
    }else{
      setmode ('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success")
    }
   }
  return (
    <>
    <Router>
  <Navbar title="Textutils" aboutText="About" mode={mode}  togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container my-3">

   <Switch>
          <Route exact path="/about">
          <About mode={mode}/> 
          </Route> 
         
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>
           </Route>
   </Switch> 
 
  
  </div>
  </Router> 
   </>
  );
}
export default App;
