import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import UserPage from "./conponents/pages/UserPage/UserPage";
import UserDetailsPage from "./conponents/pages/UserDetailsPage/UserDetailsPage";


const App:FC = () => {
  return (
      <Routes>
         <Route path={''} element={<MainLayout/>}>
             <Route index element={<Navigate to={'users'}/>}/>
             <Route path={'users'} element={<UserPage/>}>
                 <Route path={':id'} element={<UserDetailsPage/>}/>
             </Route>
         </Route>
      </Routes>
  );
};

export {App}