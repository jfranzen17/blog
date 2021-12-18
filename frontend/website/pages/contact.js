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
          <div class="envelope" title="">
            <div class="back"></div>
              <form class="letter">
                <p>
                  <label>Name:</label>
                    <input type="text" name="name" />
                </p>
                <p>
                  <label>Email:</label>
                  <input type="email" name="email" />
                </p>
              <p>
                <label>Message:</label>
                <textarea></textarea>
              </p>
            <input type="submit" value="Send"/>
           </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}