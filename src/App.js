import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import { useState } from 'react';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(() => {
      setAlert(null); 
    }, 2000);
  }
  return (
    <>
    <Navbar title=""/>
<Alert alert={alert}/>
   <div className="container "> <Form showAlert={showAlert}/></div>
  
    </>
  );
}

export default App;
