import React from 'react'

export default function Paragraph(props) {
    console.log(props)
    return (
        <div>
        <h1>{props.data.title}</h1>
        <p>
            
        </p>
        <img src={props.data.hdurl}/>
        </div>
    )
}
