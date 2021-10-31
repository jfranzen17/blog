import { Component } from "react"

import Header from "../../../components/header.js"
import Footer from "../../../components/footer.js"
import HeadMetaData from "../../../components/headMetadata.js"

export default class extends Component {
  static async getInitialProps ({ query }) {
    return {
      tag: query.tag
    }
  }

  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title={`Blog posts tagged as "${this.props.tag}" | Coding Blog`}
          metaDescription={`All blog posts tagged as "${this.props.tag}".`}
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