import React from 'react'
import styled from 'styled-components';
 

const GreyH1 = styled.h1`
  color: #666;
`;
export default function Paragraph(props) {
    console.log(props)
    return (
        <div>
            <GreyH1>{props.data.title}</GreyH1>
            <p>
                
            </p>
            <img src={props.data.hdurl}/>
        </div>
    )
}
