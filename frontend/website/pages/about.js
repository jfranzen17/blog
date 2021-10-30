import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="about-container">
          <div className="about-section">
            <h1>About Me</h1>
            <p>Allo jag skriver artiklar</p>
            <p>Här can du hitta artiklar jag skriver</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}