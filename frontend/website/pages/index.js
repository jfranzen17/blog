import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from "../components/headMetaData.js"
import getFiveNewestPosts from "../api/getFiveNewestPosts.js"

export default class extends Component {
  static async getInitialProps () {
    const apiResult = await getFiveNewestPosts()
    return {
      posts: apiResult && apiResult.posts
    }
  }
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title="Philip Franzén"
          metaDescription="I'm a freelance journalist"
        />
        <Header />
        <div className="homepage-container">
          <div className="homepage-introduction">
            <p>I'm a freelance journalist based out of Berlin...I'm a freelance journalist based out of Berlin...I'm a freelance journalist based out of Berlin...I'm a freelance journalist based out of Berlin...I'm a freelance journalist based out of Berlin...I'm a freelance journalist based out of Berlin...I'm a freelance journalist based out of Berlin...I'm a freelance journalist based out of Berlin...I'm a freelance journalist based out of Berlin...</p>
          </div>
          <div className="homepage-latest-blog-posts">
            <h2>
              Latest Articles
              <a href="/blog" class="link">
                <span class="mask">
                  <div class="link-container">
                    <span class="link-title1 title">View all</span>
                    <span class="link-title2 title">View all</span>
                  </div>
                </span>
                <div class="link-icon">
                  <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                  <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </div>
              </a>
            </h2>
            <div className="homepage-latest-blog-posts-list">
              {
                this.props.posts ?
                this.props.posts.map((post, index) => {
                  return (
                    <a key={index} href={`/blog/${post.urlTitle}`}>
                      <div className="homepage-latest-blog-post">
                        <div className="homepage-latest-thumbnail">
                          <img src={post.thumbnailImageUrl} />
                        </div>
                        <div className="homepage-latest-blog-post-title">
                          <h3>{post.title}</h3>
                        </div>
                      </div>
                    </a>
                  )
                }) : null
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}