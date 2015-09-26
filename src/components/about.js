import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'

var Header = require('./header');
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
    }
};

var headerStyle = {
    brand: {
        fontSize: "28px",
        margin: "0px 0 20px 0px"
    },
    padding: "25px"
};

var titleStyle = {
    lineHeight: "1.3em",
    fontFamily: '"Neuzeit Book",sans-serif',
    fontSize: "48px",
    margin: "20vh 10vh 35vh 10vh",
    height: "100%",
    a: {
	    textDecoration: "none",
	    color: "#BA2A29"
	}
};
// .about footer {
//     margin: 4em 0 10px;
// }
// .about h3{
//     font-size: 1.8em;
// }
// .about a{
//     text-decoration: none;
//     color: #BA2A29;
// }
// .about li p{
//     padding: 1em 1em 0 0;
//     font-size: 1.3em;
// }

export default class About extends Component {
    render() {
        return (
        	<div>
	        	<Header menuContent={content.menu} style={headerStyle} />
	            <div className="about pure-g">
					<div style={titleStyle} className="pure-u-1">
						We are the <a href="#">team</a> with passion to make big things in simple way. Our main goal is aesthetics and accent on content.
						<a href="#">Contact</a> us, we will help to get web page
					</div>
					<ul className="pure-u-1">
						<li>
							<h3><a href="#">Philosophy</a></h3>
							<p>
								I think you like visit coffe bar, you know smells like best coffee and peaple like to visit this place. A simple menu dreamed up to match the drinks you love. Read more about how make web page comfy to visit in bars.  
							</p>
						</li>
						<li>
							<h3><a href="#">Usability</a></h3>
							<p>
								100 years experiance on surfing web pages, analitics and experiments. Web page is place where we search some information and the road to the goal has to be easy.
							</p>
						</li>
						<li>
							<h3><a href="#">Development</a></h3>
							<p>
								Web-based application or single page of plain text, our devs support project from the begining and have full vision of process. We try to invent and construct modules and tools that helps us to grow up 
							</p>
						</li>
					</ul>
				</div>
			</div>
        );
    }
}