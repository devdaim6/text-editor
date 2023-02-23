import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);

  //alert function
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title={"textEdits"} theme="white"/>
      <div className="container">
        <Alert alert={alert} />
      </div>
      <div className="container ">
        <Form showAlert={showAlert}  />
      </div>
    </>
  );
}

export default App;
