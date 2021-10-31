import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from "../components/headMetadata.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title="Contact"
          metaDescription="You can contact me here."
        />
        <Header />
        <div className="contact-container">

          . . .

        </div>
        <Footer />
      </div>
    )
  }
}