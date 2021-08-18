/*$('#checkboxid').click(function(){
    $('#pass').attr('type',$('#checkboxid').is(':checked')? 'text':'password');
})*/

$('#btn').click(function(){
   var fname= $('#firstname').val();
   var lname= $('#lastname').val();

   var name=fname+' '+lname;
   $('#fullname').val(name);

})


let viewloginpwd = false
function changepwd() {
    let getpwdview = $("#pass");
    if (viewloginpwd === false)
    {
        getpwdview.attr("type", "text");
        viewloginpwd = true;

    }
    else if (viewloginpwd === true)
    {
        getpwdview.attr("type", "password");
        viewloginpwd = false;

    }

}
