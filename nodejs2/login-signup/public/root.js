$(function(){
    let startbtn=$('#getstarted')

    startbtn.click(function(){
        location.href = "api/login";
    })
    $("#Formid").submit(function(e){
        loadAjax();
        e.returnValue = false;
     })
    
})