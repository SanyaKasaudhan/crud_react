
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./AddContact";
import './App.css';
import Home from './Home';
import UpdateContact from "./UpdateContact";

function App() {
  return (
    <div className="App">
     


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/update" element={<UpdateContact />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
