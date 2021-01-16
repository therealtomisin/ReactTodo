import React from 'react'

function Header(props) {

    return (
        <div className = 'header'>
            <h1 className='header-text'>{props.text}</h1>
        </div>
    )
}

export default Header
