$(document).ready(function () {
    $('#topics a').click(function (event) {
        event.preventDefault();
        $('#topics a.selected').removeClass('selected');
        $(this).addClass('selected');

        var topic = $(this).text();

//        $('#news tr').show();
//        if (topic !== 'All') {
//            $('#news tr:has(td):not(:contains(' + topic + '))').hide();
//        }

        $('#news').find('tr').show();
        if (topic !== 'All') {
            $('#news').find('tr:has(td)').not(function () {
                return $(this).children(':nth-child(4)').text() === topic;
            }).hide();
        }
    });
});