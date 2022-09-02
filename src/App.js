
import "./styles.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Read from "./components/read";
import Update from "./components/update";
import Create from "./components/create";


export default function App() {
  return (
     <div className="main"> 
     
      
      <h1 className="main-header">react crud operations</h1>
    <BrowserRouter>
    <Routes history={history}>
   
     
      {/* <div> */}
      <Route exact path='/create' element={<Create />} />
      {/* </div> */}
      {/* <div style={{ marginTop: 20 }}> */}
          <Route exact path='/read' element={<Read />} />
        {/* </div> */}

        <Route path='/update' element={<Update />} />
    
   
    </Routes>
    </BrowserRouter>
     </div> 
  );
}
