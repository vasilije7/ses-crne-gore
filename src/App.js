import HomePage from "./components/HomePage";
import { useState } from "react";
//import { BrowserRouter } from "react-router-dom";
//import MainRouter from "./MainRouter";
function App() {
  const [headerToggler, setHeaderToggler] = useState(false);
  return (
    <div className="App">
      <HomePage
        headerToggler={headerToggler}
        setHeaderToggler={setHeaderToggler}
      />
    </div>
  );
}

export default App;
