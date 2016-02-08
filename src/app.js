// import React, { Component } from 'react'
// import { Router, Route, Link } from 'react-router'
// import Main from './components/main'
// // import Main from './layouts/onepage'
// import About from './components/about'

// export default class App extends Component {
//     render() {
//         let menu = this.props.menu;
//         return (
//            	<Router>
// 				<Route path="/" component={Main} />
// 				<Route path="about" component={About}/>
// 				<Route path="features" component={Main}/>
// 				<Route path="contact" component={Main}/>
// 			</Router>
//         );
//     }
// }

//import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import App from 'containers/App'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
const rootElement = document.getElementById('app')

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)
//
//import React, { Component } from 'react'
//import { Router, Route, Link } from 'react-router'
//import Main from './components/main'
//// import Main from './layouts/onepage'
//import Webpage from './pages/webpage'
//import About from './components/about'
//
//export default class App extends Component {
//    render() {
//        let menu = this.props.menu;
//        return (
//           	<Router>
//				<Route path="/" component={Webpage} />
//				<Route path="/webpage" component={Webpage} />
//			</Router>
//        );
//    }
//}
