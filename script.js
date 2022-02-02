$('#nmbr-boock').on('input', function() {
    let value = $('#nmbr-boock').val();
    let reslt = 25 * value ; 
    $('#result').text(reslt);
});
$('#nmbr-magazine').on('input', function() {
    let value = $('#nmbr-magazine').val();
    let reslt = 15 * value ; 
    $('#result-magazine').text(reslt);
});