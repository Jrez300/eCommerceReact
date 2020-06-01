import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="footerContainer">

                <footer className="footer">
                    <nav className="footernav">
                        <ul>

                            <li><a href="https://www.facebook.com/adidasyeezy/"><img src={require('../../images/Facebook.webp')} alt="fb" /></a></li>
                            <li><a href="https://www.instagram.com/yeezymafia/?hl=en"><img src={require('../../images/ig.webp')} alt="ig" /></a></li>
                            <li><a href="https://twitter.com/theyeezymafia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" ><img
                                src={require('../../images/twitter.webp')} alt="twitter"/></a></li>
                        </ul>
                        <p>&copy; All Rights Reserved </p>
                    </nav>
                </footer>

            </div>
        );
    }
}

export default Footer;