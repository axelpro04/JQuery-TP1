$(document).ready(function () {
    $('#new').hide();
    let target = Math.floor(Math.random() * 100),
        counter = 0;
    console.log(target);
    $('#btn').click(function () {
        counter++;
        if ($('#number').val() < target) {
            $('p').html('Plus');
        } else if ($('#number').val() > target) {
            $('p').html('Moins');
        } else {
            $('p').html('Correct! ' + counter + ' essai(s).');
            $('#btn').attr('disabled', '');
        }
    });   
});