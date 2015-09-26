var React = require('react');
var Header = require('./header');
var Section = require('./section');
var Aside = require('./aside');
var Footer = require('./footer');

var content =
{
    "menu":{
        "features":{
            "title":"Features"

        },
        "contact":{
            "title":"Contact"

        },
        "support":{
            "title":"Support"

        },
        "login":{
            "title":"Login",
            "type":"login"

        },
        "logout":{
            "title":"Logout",
            "type":"logout"
        }
    },
    "slides":{
        "main":{
            "title":"Development from the past until today",
                "buttons":{
                    "primary":"Try Editor",
                    "default":"Sign up"
            }
        },
        "sub1":{
            "title":"It's free",
                "content":"Fast web prototyping. Every day it's growing.",
                "link":"learn more →"
        },
        "sub2":{
            "title":"One Touch",
                "content":"Fast web prototyping. Every day it's growing.",
                "link":"learn more →"
        },
        "sub3":{
            "title":"Minimalism",
                "content":"Download source files after editing, it's simple to understand and rebuild for your needs",
                "link":"learn more →"
        }
    },
    "footer":{
        "sitemap":{
            "title":"Pricing",
            "title":"Clients",
            "title":"Partners",
            "title":"Press",
            "title":"Docs",
            "title":"About",
            "title":"Careers",
            "title":"Team",
            "title":"FAQ",
            "title":"FAQ",
            "title":"Blog",
            "title":"Status",
            "title":"Security"
        },
        "copyright":{
            "title":"© Copyright 2058, Example Corporation"
        }
    }
};

var headerStyle = {
    brand: {
        fontSize: "28px",
        margin: "6px 0",
        color: "white"
    },
    padding: "25px"
};

var sliderStyle = {
    padding: "100px 0 100px 0"
};

var asideStyle = {
    borderRight: "1px dotted #3e3c42",
    padding: "20px 50px 80px 30px"
};


var footerStyle = {
    minHeight: "150px",
	padding: "30px 0"
};


var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Header menuContent={content.menu} style={headerStyle} />
                <Section sliderContent={content.slides.main} style={sliderStyle}/>
                <Aside style={asideStyle}/>
                <Footer style={footerStyle} />
            </div>
        );
    }
});

module.exports = Main;