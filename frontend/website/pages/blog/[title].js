import { Component } from "react"
import Prism from "prismjs"

import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"

export default class extends Component {
    componentDidMount() {
        Prism.highlightAll()
    }

    render () {
        return (
            <div className="layout-wrapper">
                <Header />
                <div className="blog-post-container">
                    <div className="blog-post-top-section">
                        <h1>Blog Title</h1>
                        <div className="blog-post-top-meta">
                            <span>30/10/2021</span>
                            <a className="blog-post-top-tag-btn">
                                <span>JavaScript</span>
                            </a>
                            <a className="blog-post-top-tag-btn">
                                <span>CSS</span>
                            </a>
                        </div>
                    </div>
                    <div className="blog-post-body-content">
                    <p>A short paragraph with a link to <a href="https://www.google.com">Google</a>.</p>
                    <p>An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. And add as much additional content here as you want. An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. Also an example of a <a href="https://www.google.com">link could go here</a>.</p>
                    <p>An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. And add as much additional content here as you want. An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. Also an example of a <a href="https://www.google.com">link could go here</a>.</p>
                    <p>Ordered List:</p>
                    <ol>
                        <li>A sentence goes here.</li>
                        <li>A short code snippet: <code>code snippet</code></li>
                        <li>A link inside a unordered list bullet <a href="https://www.google.com">Google</a></li>
                    </ol>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}