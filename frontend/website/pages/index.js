import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from "../components/headMetaData.js"

export default class extends Component {
    render () {
      return (
        <div className="layout-wrapper">
          <HeadMetaData
          title= "Philip Franzén" 
          metaDescription="Philip Franzén is a freelance journalist."
          />
          <Header />
          <div className="homepage-container">
  
            . . .
  
          </div>
          <Footer />
        </div>
      )
    }
  }