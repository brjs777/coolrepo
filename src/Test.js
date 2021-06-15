import './test.css'
import React from 'react'
import Nav from './components/Nav'

const Test = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className="content-item">
                    <img src="./images/a3.jpg" alt="" />
                </div>
                <div className="content-item">
                   <img src="./images/a3.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Test
