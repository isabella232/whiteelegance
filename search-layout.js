var announceElement;

(function($){
    $(document).ready(function(){
        var searchBox = $('.el-hidden-search');
        searchBox.hide();

        $('a[href="#search"]').click(function(){
            searchBox.slideToggle();
        });

        announceElement = $('.cg-show-announcements').wrap('<p/>').parent().html();

        $('.cg-show-announcements').parent().remove();

        listAnnouncements("#announce_container");
    });
})(jQuery);

function listAnnouncements(container) {
    (function($){
        $(container).html(announceElement);
    })(jQuery);
}