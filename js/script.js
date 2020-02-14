$(document).ready(function(){

// collapsed menu
        $('header .toggle-button').on('click', function () {
            var header = $('header');
            header.toggleClass('collapsed-header');
        });
});