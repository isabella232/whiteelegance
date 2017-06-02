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
        searchBox.hide();

        $('a[href="#search"]').click(function(){
            searchBox.slideToggle();
        });

        //strip theme default announcement banner
        var announceElement = $('.cg-show-announcements').wrap('<p/>').parent().html();
        $('.cg-show-announcements').parent().remove();

        listAnnouncements("#announce_container", announceElement);
    });
})(jQuery);

