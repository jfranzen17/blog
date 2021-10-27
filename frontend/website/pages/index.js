import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <Header/>
                <div className="homepage-container">
                    Hompage content goes here.
                </div>
                <Footer/>
            </div>
        )
    }
}