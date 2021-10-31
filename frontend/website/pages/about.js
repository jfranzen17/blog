import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from "../components/headMetaData.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title="About Me"
          metaDescription="I'm a freelance journalist."
        />
        <Header />
        <div className="about-container">

          . . .

        </div>
        <Footer />
      </div>
    )
  }
}