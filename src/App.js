
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
function App() {
  return (
    <>
   
{/*<Navbar title = "Text Utilities" aboutText = "About TextUtils"/>*/}
<Navbar/>
<div className="container my-3">
  {/*<TextForm heading= "Enter the text to analize below"/>*/}
  <About/>
</div>

    </>
  );
}

export default App;
