import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from '@components/pages/profile/profile.jsx';
import Main from '@/components/pages/main/Main.jsx';
import CalendarPage from '@/components/pages/calendar/calendar.jsx'
import NotFound404 from '@/components/pages/404/404.jsx';
import Login from '@/components/pages/login/login.jsx';



function App() {


  return (
    <>

   <BrowserRouter>
   <Routes>
   <Route path="/login" element={<Login />}/>
    <Route path="/" element={<Main />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path='/calendar' element={<CalendarPage />} />
    <Route path='*' element={<NotFound404 />} />
   </Routes>
   </BrowserRouter>
    </>
  );
};

export default App
