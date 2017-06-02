(function($){
    $(document).ready(function(){
        var searchBox = $('.el-hidden-search');
        searchBox.hide();

        $('a[href="#search"]').click(function(){
            searchBox.slideToggle();
        });     
    });
})(jQuery);