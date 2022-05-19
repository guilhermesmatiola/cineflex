import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styledComponents from "styled-components";


import TopBar from "./TopBar";
import MovieSelect from "./MovieSelect";
import TimeSelect from "./TimeSelect";
import SessionSelect from "./TimeSelect";
import Sucess from "./Sucess";


export default function App(){
    return(
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/" element={<MovieSelect/>} />
                {/* <Route path="/filme:id" element={<TimeSelect/>} />
                <Route path="/sessao:id" element={<SessionSelect/>} />
                <Route path="/sucesso" element={<Sucess/>} /> */ }

            </Routes>
        </BrowserRouter>

    );
}