import React, { Component, PropTypes } from 'react'
var Header = require('./header');
var Section = require('./section');
var Aside = require('./aside');
var Footer = require('./footer');
var Radium = require('radium');
var Content = require('content/index');
var Editor = require('./editor');


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

class Main extends Component {
    render() {
        return (
            <div>
                <Header menuContent={Content.menu} />
                <Section sliderContent={Content.slides.main} />
                <Aside />
                <Footer />
                <Editor props={this.props} />
            </div>
        );
    }
}

Main.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}

module.exports = Main;