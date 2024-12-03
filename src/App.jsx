import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from '@components/pages/profile/profile';
import Main from '@/components/pages/main/Main';




function App() {


  return (
    <>

   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/profile" element={<Profile />}/>
   </Routes>
   </BrowserRouter>
    </>
  );
};

export default App
