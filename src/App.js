
import React,{useState} from 'react';
 
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
const [mode,setmode]=useState('light');
const [text,setText]=useState('black');
const [alert,setalert]=useState(null);

const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  });
  setTimeout(() => {
   setalert(null);
  }, 1500);


}
const togle=()=>{
if(mode==='light')
  {
    setmode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Dark mode enabled","Success")
  }
else{
  setmode('light');
  document.body.style.backgroundColor='white';
  showAlert("light mode enabled","Success")
} 
}
const textTogel=()=>
  {
    if(text==='white')
      {
        setText('black');
      }
    else{
      setText('white');
    }
  }






  return (
   <>
  
   <Navbar mode={mode} togle={togle} text={textTogel}/>
   <Alert alert={alert}/>
   <div className="container">
   <TextForm heading="enter text" mode={mode} showAlert={showAlert}/>
   </div>
  
   </>
  );
}

export default App;
