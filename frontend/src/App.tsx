import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './template/Home.tsx';
import Register from './template/Register';
import Login from './template/Login';
import NotFound from './template/NotFound.tsx';
import ProtectedRoute from './Components/auth/ProtectedRoute.tsx';
import ProtectedRoutes from './Components/auth/ProtectedRoutes.tsx';
import CrudPage from './template/CrudPage.tsx';
import CrudCard from './template/CrudCard.tsx';
import useUserData from './hooks/useUserData.tsx';
import Departments from './pages/Departments/Departments.tsx';
import Appointments from './pages/Appointments/Appointments.tsx';
import AccessTokens from './pages/AccessTokens/AccessTokens.tsx';
import Doctors from './pages/Doctors/Doctors.tsx';
import Inventories from './pages/Inventories/Inventories.tsx';
import Invoices from './pages/Invoices/Invoices.tsx';
import MedicalRecords from './pages/MedicalRecords/MedicalRecords.tsx';
import Roles from './pages/Roles/Roles.tsx';
import Suppliers from './pages/Suppliers/Suppliers.tsx';
import Treatments from './pages/Treatments/Treatments.tsx';

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
          <Route path='/access-tokens' element={<AccessTokens />}/>
          <Route path='/appointments' element={<Appointments />}/>
          <Route path='/departments' element={<Departments />}/>
          <Route path='/doctors' element={<Doctors />}/>
          <Route path='/inventories' element={<Inventories />}/>
          <Route path='/invoices' element={<Invoices />}/>
          <Route path='/medical-records' element={<MedicalRecords />}/>
          <Route path='/suppliers' element={<Suppliers />}/>
          <Route path='/treatments' element={<Treatments />}/>
          <Route path='/roles' element={<Roles />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
