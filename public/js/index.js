$(function () {
    $('#buttonNavbarNavDropdown').click(function(){
        if($('#buttonNavbarNavDropdown').hasClass("collapsed")) {
            $('.header').removeClass('white');
            $('#navbarImage').attr('src', 'images/burger_menu.svg');
        } else {
            $('.header').addClass('white');
            $('#navbarImage').attr('src', 'images/close_icon.svg');
        }
    });
});
