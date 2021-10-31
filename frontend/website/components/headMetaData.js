import { Component } from "react"
import Head from "next/head"

export default class extends Component {
  render() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="Images/second-ph-logo-bigger-noshadow-png" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.metaDescription} />
      </Head>
    )
  }
}