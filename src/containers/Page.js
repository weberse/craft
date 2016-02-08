import React, { Component, PropTypes } from 'react'
var Header = require('../components/header');
var Section = require('../components/section');
var Aside = require('../components/aside');
var Footer = require('../components/footer');
var Radium = require('radium');
import Content from 'content/index'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EditorActions from '../actions'


class Page extends Component {
    render() {
        return (
            <div>
                <Header menuContent={Content(this.props.contentType)} Styles={this.props.Styles} />
                <Section sliderContent={Content(this.props.contentPattern).slides.main} Styles={this.props.Styles} />
                <Aside Content={Content(this.props.contentPattern)} Styles={this.props.Styles} />
                <Footer Content={Content(this.props.contentPattern)} Styles={this.props.Styles}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Styles: state.editor.Styles,
        contentType: state.editor.contentType
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(EditorActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)