import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share"

function Footer() {
    return (
        <div className="footer">
            <div className="conatiner">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Wendell, North Carolina</p>
                        </div>
                        <div className="d-flex">
                            <p><a href="tell:302-373-4953">302-373-4953</a></p>
                        </div>
                        <div className="d-flex">
                            <p>ashechandlar@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" href="#home">Home</a>
                                <br/>
                                <a className="footer-nav" href="#about">About Me</a>
                                <br/>
                                <a className="footer-nav" href="#services">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav" href="#experience">Experience</a>
                                <br/>
                                <a className="footer-nav" href="#portfolio">Portfolio</a>
                                <br/>
                                <a className="footer-nav" href="#contact">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://ashechan.github.io/"}
                            quote={"Web Design and Development"}
                            hashtag="#webdesign"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                            url={"https://ashechan.github.io/"}
                            quote={"Web Design and Development"}
                            hashtag="#webdesign"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                            url={"https://ashechan.github.io/"}
                            quote={"Web Design and Development"}
                            hashtag="#webdesign"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                            url={"https://ashechan.github.io/"}
                            quote={"Web Design and Development"}
                            hashtag="#webdesign"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy; 
                            {new Date().getFullYear()} All Rights Reserved
                            </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
