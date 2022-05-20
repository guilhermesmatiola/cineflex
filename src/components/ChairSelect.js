import styled from 'styled-components';
import axios from 'axios';
import { useParams , Link } from "react-router-dom";
import React, { useEffect } from 'react';
import Times from './Times';
import Chair from './Chair';

export default function ChairSelect({idSessao}){
    let params = useParams();
    console.log("params.idSessão: "+params.idSessao);

    const [chairs, setChairs] = React.useState([]);

	useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`);

		promise.then(resposta => {
			setChairs(resposta.data);
            let arr=[];
            for(let i=0;i<resposta.data.seats.length+1;i++){
                arr.push(false);
            }
            setIsSelected(arr);
        });

	}, []);

    const [isSelected, setIsSelected] = React.useState([false]);

    function selectChair(id){
        
        let newStates=[...isSelected];
        newStates[id]=true;
        setIsSelected(newStates);
    }

	if(chairs.length ===  0) {
		return (<h1>Loading...</h1>);
	}

    return(
        <>
        <Text>Selecione o(s) assento(s)</Text>
        <ContainerChairs>
            {chairs.seats.map((seat) => (
                <Chair object={seat} selected={isSelected[seat.id+1]} selectChair={selectChair} key={seat.id}/>
            ))}
        </ContainerChairs>
        
        </>
    )
}

const ContainerChairs = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
    margin: 10px;
`

const Text = styled.h1`
    margin: 10px;
    color:#293845;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
` ;

const OrangeBoxes = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
`