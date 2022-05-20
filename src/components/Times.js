import styled from 'styled-components';
import axios from 'axios';
import { useParams , Link } from "react-router-dom";
import React from 'react';

export default function Times({showtimes}){
    

    return( 
        <>
            {showtimes.map((showtime) => (
                <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                    <Container id ={showtime.id} >
                        <Text>{showtime.name}</Text>
                    </Container>
                </Link>
            ))}

           
        </>
    );
}

const Text = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
` ;

const Container= styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 15px;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
`
const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    left:0;
    bottom:0;
    height: 117px;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
` ;
const PosterBox = styled.div`
    width: 64px;
    height:89px;;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    background: #ffffff;
` ;

const Poster = styled.img`
    width: 48px;
    height: 72px;;
` ;