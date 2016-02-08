
function Styles(colors){
    return {
        header: {
            a: {
                "text-decoration": "none",
                "color": "white"
            },
            brand: {
                fontSize: "28px",
                margin: "0px 0 20px 0px",
                textDecoration: "none",
                color: "white"
            },
            "background-color": colors.dark,
            padding: "25px"
        },
        slider: {
            padding: "100px 0 100px 17%"
        },
        aside: {
            borderRight: "1px dotted #3e3c42",
            padding: "20px 50px 80px 30px"
        },
        "footer": {
            minHeight: "150px",
            "background-color": colors.dark2,
            "block": {
                "padding": "10px 0 10px 0"
            },
            "link": {
                "padding": "5px 0 0 0"
            },
            padding: "20px 0 0 50px",
            copyright:{
                padding: "50px 0 15px 0",
                textAlign: "center",
                text: {
                    color: "white"
                }
            }
        }
    }
}



module.exports = Styles;