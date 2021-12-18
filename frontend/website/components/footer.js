import { Component } from "react";

export default class extends Component {
    render () {
        return (
            <footer className="footer-wrapper">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className="footer-social-links">
                    <a href="#" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a href="#" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
                    <a href="#" title="Email" target="_blank"><i class="fa fa-google-plus"></i></a>
                    <a href="#" title="LinkedIn+" target="_blank"><i class="fa fa-linkedin"></i></a>
                </div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href="/">Home</a>
					<a href="/blog">Articles</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				</p>
				<p>PHILIP FRANZÉN &copy;</p>
			</div>

		</footer>
        )
    }
}