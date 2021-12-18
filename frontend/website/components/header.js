import { Component } from "react";

export default class extends Component {
    render () {
        return (
            <header className="header-wrapper">
                <div className="header-container">
                    <div className="header-logo">
                        <a href="/">
                        <span className="header-logo-text">PHILIP FRANZÉN.</span>
                        </a>
                    </div>
                    <div className="header-links">
                    <a className="btn-top-links" href="/blog">Articles</a>
                    <a className="btn-top-links" href="/about">About</a>
                    <a className="btn-top-links" href="/contact">Contact</a>
                    </div>
                </div>
            </header>
        )
    }
}