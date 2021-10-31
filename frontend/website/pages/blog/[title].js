import { Component } from "react"
import Prism from "prismjs"

import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetaData from "../../components/headMetadata.js"

export default class extends Component {
    componentDidMount() {
      Prism.highlightAll()
    }
  
    render () {
      return (
        <div className="layout-wrapper">
          <HeadMetaData
            title="Your Blog Post Title"
            metaDescription="This is a description"
          />
          <Header />
          <div className="blog-post-container">
  
            . . .
  
          </div>
          <Footer />
        </div>
      )
    }
  }