import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="py-5" style={{ background: "black" }}>
                <div className="container">
                    <p className='m-0 text-center text-white'>Copyright © Your Website 2022</p>
                </div>
            </footer>
        )
    }
}
