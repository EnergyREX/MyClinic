import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './template/Home.tsx';
import Register from './template/Register';
import Login from './template/Login';
import NotFound from './template/NotFound.tsx';
import ProtectedRoute from './Components/atoms/ProtectedRoute.tsx';
import ProtectedRoutes from './Components/organisms/ProtectedRoutes.tsx';
import { CrudPage } from './template/CrudPage.tsx';
import CrudCard from './template/CrudCard.tsx';
import useUserData from './hooks/useUserData.tsx';
import Departments from './pages/Departments.tsx';

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
          <Route path='/departments' element={<Departments />}/>
          <Route path='/appointments' element={<CrudPage />}/>
          <Route path='/doctors' element={<CrudPage />}/>
          <Route path='/inventories' element={<CrudPage />}/>
          <Route path='/invoices' element={<CrudPage />}/>
          <Route path='/jwt-tokens' element={<CrudPage />}/>
          <Route path='/medical-records' element={<CrudPage />}/>
          <Route path='/crud-card' element={<ProtectedRoute permission='view_roles' element={<CrudCard />}/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
