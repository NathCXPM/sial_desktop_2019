/**
 * Home Search Block
 * @requires inView
 */
(function($) {
    $(function() {
        $('.key-figures').addClass('is-ready');
        inView('.home-search .ql-item').on('enter', function(el) {
            el.classList.add('is-in-viewport');
        }).on('exit', function(el) {
            el.classList.remove('is-in-viewport');
        });
    });
})(jQuery);
//# sourceMappingURL=home-search.js.map