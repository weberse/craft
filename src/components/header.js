//var React = require('react');


import React from 'react';
import Slider from './Slider';
import Menu from './Menu';

var content = {"menu": {"features" : {"title" : "Featers", }, "contact" : {"title" : "Contact", }, "support" : {"title" : "Support", }, "login" : {"title" : "Login", "type" : "login", }, "logout" : {"title" : "Logout", "type" : "logout", } }, "slides": {"main": {"title": "Development from the past until today", "buttons": {"primery": "Try Editor", "default": "Sign up"} }, "sub1": {"title": "It's free", "content": "Fast web prototyping. Every day it's growing.", "link": "learn more →"}, "sub2": {"title": "One Touch", "content": "Fast web prototyping. Every day it's growing.", "link": "learn more →"}, "sub3": {"title": "Minimalism", "content": "Download source files after editing, it's simple to understand and rebuild for your needs", "link": "learn more →"} }, "footer": {"sitemap": {"title": "Pricing", "title": "Clients", "title": "Partners", "title": "Press", "title": "Docs", "title": "About", "title": "Careers", "title": "Team", "title": "FAQ", "title": "FAQ", "title": "Blog", "title": "Status", "title": "Security", }, "copirigt": {"title": "© Copyright 2058, Example Corporation"} } };

//React.render(<Slider slides={content.slides} />,  document.getElementById('slider'));
//React.render(<Menu menu={content.menu} />,  document.getElementById('menu'));

var Header = React.createClass({
    render: function() {
        return (
            <div className="custom-wrapper pure-g" id="menu">
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="pure-menu">
                        <a href="#" className="pure-menu-heading custom-brand">Brand</a>
                        <a href="#" className="custom-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
                    </div>
                </div>

                <div className="pure-u-1 pure-u-md-1-3">
                    <Menu menu={content.menu}/>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Signup</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;