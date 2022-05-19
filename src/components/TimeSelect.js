import styled from 'styled-components';
import axios from 'axios';
import { useParams , Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function MovieSelect({id}){
  
    const [showtimes, setShowtimes] = React.useState([]);
    let params = useParams();
    console.log("params.id: "+params.id);

	useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.id}/showtimes`);

		promise.then(resposta => {
			setShowtimes(resposta.data);
		});

	}, []);

	if(showtimes.length ==  0) {
		return (<h1>Loading...</h1>);
	}

    console.log(showtimes); 

    return( 
        
            <Container>
            {showtimes.days.map((showtime) => (
                <h1 >
                    {showtime.weekday}: {showtime.date}
                </h1>
            ))}
            </Container>
    );
}

const Container= styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 90px;
`