import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>Hello here can text go</p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li><strong>Email</strong>: test.testsson@test.com</li>
              <li><strong>Linkedin</strong>: <a href="https://linkedin.com">Philip Franzén</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}