import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NotFound from './Components/template/NotFound.tsx';
import ProtectedRoute from './Components/auth/ProtectedRoute.tsx';
import ProtectedRoutes from './Components/auth/ProtectedRoutes.tsx';
import useUserData from './hooks/useUserData.tsx';
import Departments from './pages/Departments/Departments.tsx';
import Appointments from './pages/Appointments/Appointments.tsx';
import Doctors from './pages/Doctors/Doctors.tsx';
import Inventories from './pages/Inventories/Inventories.tsx';
import MedicalRecords from './pages/MedicalRecords/MedicalRecords.tsx';
import Suppliers from './pages/Suppliers/Suppliers.tsx';
import Treatments from './pages/Treatments/Treatments.tsx';
import JWTTokens from './pages/JWTTokens/JWTTokens.tsx';
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
import Account from './pages/Account.tsx';

const App = () => {
  const { permissions, recoverPermissions, clearPermissions } = useUserData()

  
  useEffect(() => {
    if (permissions.length == 0) {
        recoverPermissions()
    } else {
      console.log(permissions)
    }
  }, []);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='*' element={<NotFound />} />

        <Route element={<ProtectedRoutes permission='view_roles'/>}>
          <Route path='/jwt-tokens' element={<JWTTokens />}/>
          <Route path='/appointments' element={<Appointments />}/>
          <Route path='/departments' element={<Departments />}/>
          <Route path='/doctors' element={<Doctors />}/>
          <Route path='/inventories' element={<Inventories />}/>
          <Route path='/medical-records' element={<MedicalRecords />}/>
          <Route path='/suppliers' element={<Suppliers />}/>
          <Route path='/treatments' element={<Treatments />}/>
          <Route path='/profile' element={<Account />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
