var React = require('react');
var Header = require('./header');
var Section = require('./section');
var Aside = require('./aside');
var Footer = require('./footer');
var Radium = require('radium');

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
    "footer":{
        "sitemap":{
        },
        "copyright":{
            "title":"© Copyright 2058, Example Corporation"
        }
    }
};

//@dark: #303030;
//@dark1: #181818;
//@dark2: #181818;
//@light: #E6E2A2;
//@light1: #fff;
//@light2: #F5FAF8;
//@brand: #F0C000;
//@primary: #222;
//@success: #F0C000;
//@warning: #f9276f;
//@info: #F0D800;

var dark = '#303030';
var dark1 = '#181818';
var dark2 = '#181818';
var light = '#E6E2A2';

var mainStyle = {

}

var headerStyle = {
    brand: {
        fontSize: "28px",
        margin: "0px 0 20px 0px",
        textDecoration: "none",
        color: "white"
    },
    a: {
        "text-decoration": "none",
        "color": "white"
    },
    "background-color": dark,
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
	padding: "20px 0 0 50px",
    copyright:{
        paddingTop: "50px",
        textAlign: "center"
    },
    "background-color": light
};

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header menuContent={content.menu} style={headerStyle} />
                <Section sliderContent={content.slides.main} style={sliderStyle}/>
                <Aside style={asideStyle}/>
                <Footer style={footerStyle} />
            </div>
        );
    }
}

module.exports = Main;