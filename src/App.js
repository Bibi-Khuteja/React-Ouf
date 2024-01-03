import "./App.css";
import HomePage from "./pages/HomePage";
import MainScreen from "./pages/MainScreen";
import RouterMain from "./pages/Routers";
import RouterPages from "./pages/Routers";
import {Routes,Route} from "react-router-dom";



function App() {
  return (
    <div className="App">

{/*       
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ad-form" element={<MainScreen />} />
      </Routes>
      */}

      <RouterMain />
    </div>
  );
}

export default App;
