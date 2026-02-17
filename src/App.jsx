import { useState } from 'react'
import Dashboard from './layouts/Dashboard';
import './App.css'
import { BrowserRouter,Navigate, Routes,Route} from 'react-router-dom';
import Login from './Pages/login';


function App(){
    const[IsLoggedIn,setIsLoggedIn]=useState(false);
    return(
<BrowserRouter>
<Routes>
    <Route path="*" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
    <Route path="/dashboard" element={IsLoggedIn ?< Dashboard/>:< Navigate to="/login"/>}></Route>
    
    
</Routes>
</BrowserRouter>
    


    )
}



export default App;
