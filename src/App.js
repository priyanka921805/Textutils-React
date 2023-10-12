import React, { useState } from "react";           //For ctrl + h = to replace the word
import "./App.css";
// import About from "./components/About";          // Never give "Node_module" with your app bcoz anyone
import Navbar from "./components/Navbar";        // can modify the app or re-create the app.
import TextForm from "./components/Textform";    // "Node_module" is present in ".gitignore" package
import Alert from "./components/Alert";           //  so Delete it from the app first.

// import { BrowserRouter as Router,
//     Routes, 
//     Route
//    } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");        //whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
        <Alert alert={alert} />
        <div className="container my-3">
          {/*  /users --> Components 1
            /users/home --> Components 2 */}
            {/* <Routes>
              <Route exact path="/aboutText" element={<About />} />
            </Routes> */}
            {/* <Routes> */}
            {/* <Route exact path="/"> */}
            <TextForm
                    showAlert={showAlert}
                    heading="Enter Your Experience"
                    mode={mode}
                   />
           {/* </Routes>*/}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
