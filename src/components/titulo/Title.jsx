import React from 'react'

export default function Title(props) {
    return (
        <div className="navbar-expand-lg navbar-light bg-light p-5">
            <h1>{props.title}</h1>
        </div>
    )
}
