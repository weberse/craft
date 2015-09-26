var React = require('react');
var Header = require('./header');
var Section = require('./section');
var Aside = require('./aside');
var Footer = require('./footer');

var content = {"menu": {"features" : {"title" : "Featers", }, "contact" : {"title" : "Contact", }, "support" : {"title" : "Support", }, "login" : {"title" : "Login", "type" : "login", }, "logout" : {"title" : "Logout", "type" : "logout", } }, "slides": {"main": {"title": "Development from the past until today", "buttons": {"primery": "Try Editor", "default": "Sign up"} }, "sub1": {"title": "It's free", "content": "Fast web prototyping. Every day it's growing.", "link": "learn more →"}, "sub2": {"title": "One Touch", "content": "Fast web prototyping. Every day it's growing.", "link": "learn more →"}, "sub3": {"title": "Minimalism", "content": "Download source files after editing, it's simple to understand and rebuild for your needs", "link": "learn more →"} }, "footer": {"sitemap": {"title": "Pricing", "title": "Clients", "title": "Partners", "title": "Press", "title": "Docs", "title": "About", "title": "Careers", "title": "Team", "title": "FAQ", "title": "FAQ", "title": "Blog", "title": "Status", "title": "Security", }, "copirigt": {"title": "© Copyright 2058, Example Corporation"} } };


var headerStyle = {
    brand: {
        fontSize: "28px",
        margin: "6px 0",
        color: "white"
    },
    height: "100px",
    padding: "25px"
};

var sliderStyle = {

}


var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Header menu={content.menu} style={headerStyle} />
                <Section />
                <Aside />
                <Footer />
            </div>
        );
    }
});

module.exports = Main;