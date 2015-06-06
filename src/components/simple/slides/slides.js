var React = require('react');


var Slides = React.createClass({
    render: function() {
        var slides = this.props.slides;
        return (
            <div>
                <MainSlide active={slides.main.active} />
                <MetaSlide active={slides.meta.active} />
            </div>
        );
    }
});

var MainSlide = React.createClass({
   render: function() {
       var active = this.props.active == 'true' ? 'slide active-slide' : 'slide';
       return (
           <section className={active}>
               <div className="container">
                   <div>
                       <h3>Development from the past until today</h3>
                   </div>
                   <div className="col span_2">
                       <a href="#" className="button info">Sign Up</a>
                   </div>
                   <div class="col span_3">
                       <a href="#" className="button btn-bkg">Try Editor</a>
                   </div>
               </div>
           </section>
       );
   }
});

var MetaSlide = React.createClass({
    render: function() {
        var active = this.props.active == 'true' ? 'slide active-slide' : 'slide';
        return (
            <section className={active}>
                <div className="container">
                    <p>
                    A home page is generally the first page a visitor navigating to a website from a search engine will
                    see, and may also serve as a landing page to attract the attention of visitors. The home page is
                    used to facilitate navigation to other pages on the site, by providing links to important and recent
                    articles and pages, and possibly a search box. For example, a news website may present the
                    headlines and first paragraphs of top stories, with links to the full articles, in a dynamic web
                    page that reflects the popularity and recentness of stories.
                    </p>
                </div>
            </section>
        );
    }
});


module.exports = Slides;