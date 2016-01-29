var React = require('react');
var Header = require('./header');
var Section = require('./section');
var Aside = require('./aside');
var Footer = require('./footer');
var Radium = require('radium');
var Content = require('content/index');


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
        padding: "50px 0 15px 0",
        textAlign: "center",
        text: {
            color: "white"
        }
    },
    "background-color": dark2
};

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header menuContent={Content.menu} style={headerStyle} />
                <Section sliderContent={Content.slides.main} style={sliderStyle}/>
                <Aside style={asideStyle}/>
                <Footer style={footerStyle} />
            </div>
        );
    }
}

module.exports = Main;