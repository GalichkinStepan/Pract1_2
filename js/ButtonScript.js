
$("#Button1").click(function () {
    let str = $('#InputBox').val();
    Set_Word(str);
    div_words.innerHTML = Kastil + words;
    $('#InputBox').val('');
})