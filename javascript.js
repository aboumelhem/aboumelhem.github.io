$(document).ready(function() {
    var wrapper = $('#timeline-events'),
    element = wrapper.find('.anitem'),
    lastElement = wrapper.find('.anitem:last-child'),
    lastElementTop = lastElement.position().top,
    elementsHeight = element.outerHeight(),
    scrollAmount = lastElementTop - 2 * elementsHeight;

    $('#timeline-events').animate({
        scrollTop: scrollAmount
    }, 1500, function() {
        lastElement.addClass('current-last');
    });
});