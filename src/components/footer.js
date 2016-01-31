var React = require('react');
var Styles = require('styles/index');
var Content = require('content/index');

var List = React.createClass({
   render: function(){
       return (
           <div>
               {this.props.links.map(function(result) {
                   return  <div style={Styles.footer.link} key={result.title}><a href="#">{result.title}</a></div>;
               })}
           </div>
       );
   }
});

var Footer = React.createClass({
    render: function() {
        return (
            <footer style={Styles.footer} >
                <div className="content pure-g">
                    {Content.footer.sitemap.groups.map(function(result) {
                        return  <div style={Styles.footer.block} className="pure-u-1-1 pure-u-md-1-5">
                                    <div>{result.title}</div>
                                    <List links={result.links} />
                                </div>;
                    })}
                </div>
                <div style={Styles.footer.copyright}>
                    <small style={Styles.footer.copyright.text} className="center">
                        {Content.footer.copyright.title}
                    </small>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;