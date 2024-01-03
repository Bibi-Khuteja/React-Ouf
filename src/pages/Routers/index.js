import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import MainScreen from "../MainScreen";
import { GetPaths } from "../../NavigationPaths/navigations";
import About from "../AboutUs";
import Contact from "../ContactUs";
import HowItWorks from "../Working";


const RouterMain = () => {
  // const paths = GetPaths();
  return (
    <>
      <Routes>
        <Route path={GetPaths.HOME} element={<HomePage />} />
        <Route path={GetPaths.About} element={<About/>} />
        <Route path={GetPaths.Contact} element={<Contact />} />
        <Route path={GetPaths.Why} element={<HowItWorks />} />
        <Route path={GetPaths.OnSuccess} element={<MainScreen />} />
      </Routes>
    </>
  );
};

export default RouterMain;
