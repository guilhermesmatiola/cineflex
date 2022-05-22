import styled from 'styled-components';
import React from 'react';
import {useLocation,Link} from "react-router-dom";

export default function Success(){

    const {state} = useLocation();
    const {name ,cpf, title , date ,time, chairs} = state;


    // for(let i=0;i<chairs.length;i++){
    //     if(chairs[i]===chairs[i]){
    //        chairs.splice(i); 
    //     }
    // }
    
    
    console.log(state);

    return( 
        <>
        
        <Container>
            <Text> Pedido feito <br></br> com sucesso! </Text> 
        </Container>
        <SuccessLabel>
            <LabelItem></LabelItem>
            <Bold> Filme e sessão </Bold>
            <TextBasic> {title} <br></br> {date} {time}  </TextBasic>
            <LabelItem></LabelItem>
            <Bold> Ingressos </Bold>
                {chairs.map((chairs) => (
                <TextBasic> Assento {chairs} </TextBasic>
                ))}
            <LabelItem></LabelItem>
            <Bold> Comprador </Bold>
            <TextBasic> Nome: {name} <br></br> CPF: {cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8]+'-'+cpf[9]+cpf[10]} </TextBasic>
            
        </SuccessLabel>
        
        <Container>
            <Link style={{ textDecoration: 'none' }} to={`/`}>
                <OrangeBox>
                    Voltar pra Home
                </OrangeBox>    
            </Link>
        </Container>
        </>
    );
}
const SuccessLabel = styled.div`
    margin-left: 29px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const LabelItem = styled.div`
    margin-bottom: 35px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    margin-top: 80px;
` ;

const OrangeBox= styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin-top:15px ;
`

const Text = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
` ;
const TextBasic = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    
    letter-spacing: 0.04em;
    color: #293845;
`
const Bold= styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    margin-bottom: 8px;
    letter-spacing: 0.04em;
    color: #293845;
`