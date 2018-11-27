jQuery(document).ready(function() {
    jQuery(".button-down").click(function() {
        jQuery("ul.menu").slideToggle(300);

    });

    jQuery("ul.menu span").click(function() {
        jQuery("ul.menu").slideToggle(300);
    });


    jQuery(".category-in").click(function() {
        jQuery(".main-left-side-list").toggleClass('active');

    });


    jQuery("#add-btn").click(function() {
        jQuery(".add-form").slideToggle(300);

    });

    $(".chocolate-cake").hover(
        function() {
            $(".plate-img").toggleClass("chocolate-cake-img");
        }
    );
    $(".honey-cake").hover(
        function() {
            $(".plate-img").toggleClass("honey-cake-img");
        }
    );
    $(".carrot-cake").hover(
        function() {
            $(".plate-img").toggleClass("carrot-cake-img");
        }
    );

});