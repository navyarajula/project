
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './component/Signup';
import Auth from './component/Auth';
import AdminNavbar from './component/AdminNavbar';
import AddAcademy from './component/AddAcademy';
import AddCourse from './component/AddCourse';
import AddStudent from './component/AddStudent';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/adminNavbar" element={<AdminNavbar/>} />
        <Route path='/adminAcademy' element={<AddAcademy/>} />
        <Route path='/adminCourse' element={<AddCourse />} />
        
        {/* <Route path='/adminStudents' element={<AdminStudents/>} /> */}
        <Route path='/adminStudent' element={<AddStudent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
