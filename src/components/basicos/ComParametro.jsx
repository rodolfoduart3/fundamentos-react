import React from 'react'

export default (props) => {
    // props é somento leitura!
    // props.titulo = "Outro título"
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    )
}