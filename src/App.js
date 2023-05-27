
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
  }

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');

  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#101235'
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
  <Router>
{/*<Navbar title = "Text Utilities" aboutText = "About TextUtils"/>*/}
{/*<TextForm showAlert={showAlert} heading= "Enter the text to analize below" mode={mode}/>*/}
<Navbar title="Text Utils" mode={mode} toggleMode ={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading= "Enter the text to analize below" mode={mode}/>}/>
      </Routes>
</div>
</Router>
    </>
  );
}

export default App;
