/* 
** Script for search and layout implementation in White Elegance Child Theme
** By: Brandyn Burbank for Studio Element (http://studio-element.com/)
** Last Update: 2 June 2017
*/


//create announcement banner in container

function listAnnouncements(container, announceElement) {
    (function($){
        $(container).html(announceElement);

        if ($(container + " .cg-show-announcements").children().length <= 0) {
            $(container).hide();
        }
    })(jQuery);
}


//Pageload scripts
(function($){
    $(document).ready(function(){
        var searchBox = $('.el-hidden-search');
        var searchButton = $('a[href="#search"]').parent();
        searchBox.hide();

        searchButton.click(function(e){
            
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
                searchBox.slideDown();
                searchBox.addClass("active");
                searchBox.find("input").first().focus();           
            } else {
                $(this).removeClass("active");
                searchBox.slideUp();
            }

            e.preventDefault();
            return false;
        });

        $("#close_search").click(()=>{
            searchButton.click();
        });


        //strip theme default announcement banner
        var announceElement = $('.cg-show-announcements').wrap('<p/>').parent().html();
        $('.cg-show-announcements').parent().remove();

        listAnnouncements("#announce_container", announceElement);
    });
})(jQuery);

