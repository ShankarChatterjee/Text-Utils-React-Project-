
import React,{ useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
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
  const toggleMode = ()=>{
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
   
{/*<Navbar title = "Text Utilities" aboutText = "About TextUtils"/>*/}
<Navbar title="Text Utils" mode={mode} toggleMode ={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
  <TextForm showAlert={showAlert} heading= "Enter the text to analize below" mode={mode}/>
  {/*<About/>*/}
</div>

    </>
  );
}

export default App;
