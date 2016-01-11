
var Tabs = (function() {

    var tabsContainer;

    var Tabs = function(config) {

        tabsContainer = config.tabs;
        this.tabsHeader = $(tabsContainer).find('.tab-links');

        this.tabsHeader.on('click', 'a', onTabsLinkClick);


    };

    function onTabsLinkClick(event) {
        var currentAttrValue = $(this).attr('href');

        $(tabsContainer + ' ' + currentAttrValue).slideDown(400)
            .siblings()
            .slideUp(400);


        $(this).parent('li').addClass('active')
            .siblings()
            .removeClass('active');
    }


    return Tabs;
})();


$(document).ready(function() {

    var tabs = new Tabs({
        tabs: '.tabs'
    })
});