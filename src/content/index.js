var Content = {
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
        "sitemap": {
            "groups": [
                {
                    "title": "Info",
                    links: [
                        {
                            "title": "Projects",
                            "rout": "projects"
                        },
                        {
                            "title": "Clients",
                            "rout": "clients"
                        },
                        {
                            "title": "Partners",
                            "rout": "partners"
                        },
                        {
                            "title": "Social",
                            "rout": "social"
                        }
                    ]
                },
                {
                    "title": "About",
                    links: [
                        {
                            "title": "Press",
                            "rout": "press"
                        },
                        {
                            "title": "Docs",
                            "rout": "docs"
                        },
                        {
                            "title": "Blog",
                            "rout": "blog"
                        },
                        {
                            "title": "Team",
                            "rout": "about"
                        }
                    ]
                },
                {
                    "title": "Help",
                    links: [
                        {
                            "title": "FAQ",
                            "rout": "faq"
                        },
                        {
                            "title": "Status",
                            "rout": "status"
                        }
                    ]
                }
            ]

        },
        "copyright":{
            "title":"© 2016"
        }
    }
};

var ContentModule = function() {

    function footer() {
        return Content.footer;
    }

    return {
        footer: footer
    };
}();

module.exports = Content;

