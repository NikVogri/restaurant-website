$(".burger-menu").click(() => {
    $(".navigation__list").slideToggle(500).toggleClass("display-me");
    $(".burger-menu").toggleClass("burger__menu--open");
});