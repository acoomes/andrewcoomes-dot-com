$(document).ready(function () {
    $.fn.fullpage({
        resize: false,
		slidesColor: ['#012', '#023', '#134'],
        anchors: ['welcome', 'experience', 'contact'],
        loopHorizontal: false,
        css3: true,
        navigation: true, 
        navigationTooltips: ['welcome', 'experience', 'contact'],
    });
    $(".next-section-button").click(function() {
        $.fn.fullpage.moveSectionDown();
    });
    $(".connection-menu").delay(800).fadeIn(1000);
}); 