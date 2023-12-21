import './App.css';
import React from 'react';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import Edit from './components/Edit';
import { Route, BrowserRouter, Routes} from 'react-router-dom';




function App() {
  //const global = useGlobalContext ();
  console.log(global);
  return ( 
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<AllStudents/>}></Route>
            <Route path="/add" element={<AddStudent/>}></Route>
            <Route path="/update/:id" element={<Edit/>}></Route>

          </Routes>
      </BrowserRouter>
  </div>

    
  );

}




export default App;

