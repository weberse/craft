import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import Page from './Page'
import Editor from './Editor'



export default class App extends Component {
    render() {
        return (
            <div>
                <Page />
                <Editor />
            </div>
        )
    }
}