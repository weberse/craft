var React = require('react');
var Header = require('../components/header');
var Features = require('../components/features');
var Section = require('../components/section');
var Aside = require('../components/aside');
var Footer = require('../components/footer');
var About = require('../components/about');

var content =
{
    "menu":{

        "contact":{
            "title":"Contact"

        },
        "about":{
            "title":"About"

        },
        "features":{
            "title":"Features"

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
    "features": {
        icon1: "/assets/icons/svg/camping35.svg",
        icon2: "/assets/icons/svg/cooking61.svg",
        icon3: "/assets/icons/svg/baggage33.svg"
    },
    "footer":{
        "sitemap":{
        },
        "copyright":{
            "title":"© Copyright 2058, Example Corporation"
        }
    }
};

var headerStyle = {
    brand: {
        fontSize: "28px",
        margin: "0px 0 20px 0px",
        textDecoration: "none"
    },
    padding: "25px"
};

var sliderStyle = {
    padding: "100px 0 100px 17%"
};

var asideStyle = {
    borderRight: "1px dotted #3e3c42",
    padding: "20px 50px 80px 30px"
};


var footerStyle = {
    minHeight: "150px",
	padding: "0 0 0 50px",
    copyright:{
        paddingTop: "50px",
        textAlign: "center"
    }
};


var featuresStyle = {
    padding: "100px 0 100px 25px"
};


var Main = React.createClass({
    render: function() {
        return (
            <div>
                <About sliderContent={content.slides.main} style={sliderStyle}/>
                <Features content={content.features} style={featuresStyle} />
                <Aside style={asideStyle}/>
                <Footer style={footerStyle} />
            </div>
        );
    }
});

module.exports = Main;