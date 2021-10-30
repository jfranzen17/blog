import { Component } from "react"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <Header/>
                <div className="blog-post-container">
                    <h1>Blog Posts</h1>
                    <div className="blog-post-list">
                        <a href="/blog/post-title">
                            <div className="blog-posts-list-item">
                                <div className="blog-posts-thumbnail">
                                    <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"/>
                                </div>
                                <div className="blog-post-list-item-title-and-date">
                                    <h2>Blog Post Title</h2>
                                    <div className="blog-post-list-item-date">
                                        <span>28/10/2021</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/blog/post-title">
                            <div className="blog-posts-list-item">
                                <div className="blog-post-thumbnail">
                                    <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png"/>
                                </div>
                                <div className="blog-posts-list-item-title-and-date">
                                    <h2>Blog Post Title</h2>
                                    <div className="blog-posts-list-item-date">
                                        <span>29/10/2021</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}