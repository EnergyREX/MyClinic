import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
  const { permissions, recoverPermissions } = useUserData();

  useEffect(() => {
    if (permissions.length === 0) {
      recoverPermissions();
    }
  }, [permissions, recoverPermissions]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* Rutas protegidas solo para usuarios logueados */}
        <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<ProtectedRoute permission='view_dashboard'><Home /></ProtectedRoute>} />
        <Route path="/jwt-tokens" element={<ProtectedRoute permission="view_jwttokens"><JWTTokens /></ProtectedRoute>} />
        <Route path="/appointments" element={<ProtectedRoute permission="view_appointments"><Appointments /></ProtectedRoute>} />
        <Route path="/departments" element={<ProtectedRoute permission="view_departments"><Departments /></ProtectedRoute>}/>
        <Route path="/doctors" element={<ProtectedRoute permission='view_doctors'><Doctors /></ProtectedRoute>} />
        <Route path="/inventories" element={<ProtectedRoute permission="view_inventories"><Inventories /></ProtectedRoute>} />
        <Route path="/medical-records" element={<ProtectedRoute permission="view_medical_records"><MedicalRecords /></ProtectedRoute>}/>
        <Route path="/suppliers" element={<ProtectedRoute permission="view_suppliers"><Suppliers /></ProtectedRoute>} />
        <Route path="/treatments" element={<ProtectedRoute permission="view_treatments"><Treatments /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute permission="view_profile"><Account /></ProtectedRoute>} /></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
