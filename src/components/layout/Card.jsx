import './Card.css'
import React from 'react'

export default props =>
    <div className="card">
        <div className="content">
            {props.children}
        </div>
        <div className="footer">
            {props.titulo}
        </div>
    </div>