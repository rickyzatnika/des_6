import { Routes, Route, useLocation } from "react-router-dom";

import Invitation from "../pages/invitation";
import Home from "../pages/home";
import { AnimatePresence } from "framer-motion";

import React, { lazy, Suspense } from 'react';


const GetId = lazy(() => import("./GetId"))

const AnimatedRoutes = () => {

    const location = useLocation()
    return (
        <>

            <AnimatePresence mode="wait">

                <Routes key={location.pathname} location={location}>


                    <Route path="/:uuid" element={<Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center bg-white">
                        <img src="loaders.svg" alt="" />
                    </div>}>
                        <GetId />
                    </Suspense>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/invitation/:uuid" element={<Invitation />} />

                </Routes>
            </AnimatePresence>

        </>
    )
}

export default AnimatedRoutes