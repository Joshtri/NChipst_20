//js

//For Register Page
const mainPageView = (req, res) => {
    res.render("mainPage", {
    } );
}
// For View 
const homeView = (req, res) => {

    res.render("home", {
    } );
}

module.exports =  {
    mainPageView,
    homeView
};