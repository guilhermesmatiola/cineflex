import React from "react";
import styled from 'styled-components';
import { useParams, Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <Link to={`/`}>
            <TopBar>
                <h1>CINEFLEX</h1>
            </TopBar>
        </Link>
        </>
    );
}

const TopBar=styled.div`
    width: 100%;
    background-color: #E8833A;
    
    h1{
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    color: #E8833A;
    background-color:#C3CFD9;
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 67px;
    width: 100%;
    }
`;
