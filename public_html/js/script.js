$(document).ready(function(){
    $('#drawer').click(function(){
        if($('#myModal').is(':visible')){
            $('#myModal').css("display", "none");
        }else{
            $('#myModal').css("display", "block");
        }
            
        
    });
    
    $(window).click(function(event){
        
        if($(event.target).is($('#myModal'))){
            $('#myModal').css("display", "none");
        }
    });
});

//$(document).contextmenu(function(){
//   return false; 
//});