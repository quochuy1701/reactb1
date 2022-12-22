import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header style={{ background: "black" }}>
        <div className="container px-lg-5" style={{ background: "black" }}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#" style={{ color: "#fff" }}>Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse  " id="navbarNav">
                    <ul className="navbar-nav  ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" style={{ color: "#fff" }}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav1" href="#" >Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav1" href="#" >Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    )
  }
}
