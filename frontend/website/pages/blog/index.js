import { Component } from "react"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetaData from "../../components/headMetadata.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title="Blog Posts"
          metaDescription="List of all articles-"
        />
        <Header />
        <div className="blog-posts-container">

          . . .

        </div>
        <Footer />
      </div>
    )
  }
}