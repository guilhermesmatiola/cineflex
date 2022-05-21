import styled from 'styled-components';
import axios from 'axios';
import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import Chair from './Chair';
import Forms from './Forms';

export default function ChairSelect(){
    const params = useParams();

    const [chairs, setChairs] = React.useState([]);

	useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`);

		promise.then(resposta => {
			setChairs(resposta.data);
            let arr=[];
            for(let i=0;i<resposta.data.seats.length+1;i++){
                arr.push(false);
            }
        });

	}, []);

    const [ids, setIds] = React.useState([]);
    const [chairnames, setChairnames] = React.useState([]);
    
    function Chairnames(element){
        for(let i=0;i<chairs.seats.length;i++){
            if(chairs.seats[i].id===element){
                setChairnames([...chairnames, (i+1)]);
            }
        }    
    }

    function selectChair(id){
        Chairnames(id);
        let newids=[...ids];
        for(let i=0;i<newids.length;i++){
            if(newids[i]===id){
                newids.splice(i);
                setIds(newids);
                
                return;
            }
        }
        newids.push(id);
        setIds(newids);
    }

	if(chairs.length ===  0) {
		return (<h1>Loading...</h1>);
	}


    return(
        <>
        <Text>Selecione o(s) assento(s)</Text>
        <ContainerChairs>
            {chairs.seats.map((seat) => (
                <Chair object={seat} ids={ids}  selectChair={selectChair} idCadeira={seat.id} key={seat.id}/>
            ))}
        </ContainerChairs>
        <ChairInfos>
            <Column>
                <GreenBall></GreenBall>
                <h3>Selecionado</h3> 
            </Column>
            <Column>
                 <GreyBall></GreyBall>
                 <h3>Disponível</h3> 
            </Column>
            <Column>
                 <YellowBall></YellowBall>
                 <h3>Indisponível</h3> 
            </Column>
        </ChairInfos>
        <Forms title={chairs.movie.title} date={chairs.day.date} time={chairs.name} ids={ids} chairs={chairnames}/>
        <Footer>
            <PosterBox >
                <Poster id={chairs.movie.id} src={chairs.movie.posterURL} alt={chairs.movie.title}/>
            </PosterBox>
            <TextDate> {chairs.movie.title} <br/>{chairs.day.weekday} - {chairs.name}</TextDate>
        </Footer>
        </>
    );
}

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
const TextDate = styled.h1`
    display: flex;
`;

const ContainerChairs = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-left: 39px;
    margin-right: 39px;
`;

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
`;

const ChairInfos = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    
`;
const GreenBall= styled.div`
    width: 26px;
    height: 26px;
    box-sizing: border-box;
    border: 1px solid #1AAE9E;
    border-radius: 12px;
    background: #8DD7CF;
    
`;
const GreyBall= styled.div`
    
    width: 26px;
    height: 26px;
    box-sizing: border-box;
    background: #C3CFD9;
    border-radius: 12px;
    border: 1px solid #7B8B99
    
`;
const YellowBall= styled.div`
    
    width: 26px;
    height: 26px;
    box-sizing: border-box;
    border: 1px solid #F7C52B;
    border-radius: 12px;
    background: #FBE192;

`;
const Column = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    margin-top: 5px;
    color: #4E5A65;
    }
`;