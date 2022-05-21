import styled from 'styled-components';
import React from 'react';

export default function Card({object,ids,selectChair,idCadeira}) { 

    let color="#C3CFD9";
    let border="#808F9D";

    let isSelected=false;

    for(let i=0;i<ids.length;i++){
        if(ids[i]===idCadeira){
            isSelected=true;
        }
    }

    if(isSelected){
        color="#8DD7CF";
        border="#1AAE9E"
    }else{
        if(object.isAvailable){
            color="#C3CFD9";
            border="#808F9D"
        }else{
            color="#FBE192";
            border='#F7C52B';
        }  
    }
        
    return(
        <>
            <ChairState onClick={()=>{if(object.isAvailable){selectChair(idCadeira)}else{alert("Esse assento não está disp")}}} color={color} border={border}>
                <h1>{object.name}</h1> 
            </ChairState>
        </>
    );
}

const ChairState = styled.div`
    cursor: pointer;
    width: 26px;
    height: 26px;
    box-sizing: border-box;
    border: 1px solid ${props => props.border};
    border-radius: 12px;
    background-color:${props => props.color};
    margin:4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #000000;
    }
`