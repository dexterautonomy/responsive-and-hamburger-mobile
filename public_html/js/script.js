$(document).ready(function(){
    var drawerIsDisplayed = false; //to track state of drawer
    
    $('#drawer').click(function(){
        if($('#myModal').is(':visible')){
            $('#myModal').css("display", "none");
            drawerIsDisplayed = false;
        }else{
            $('#myModal').css("display", "block");
            drawerIsDisplayed = true;
        }
    });
    
    $(window).click(function(event){
        
        if($(event.target).is($('#myModal'))){
            $('#myModal').css("display", "none");
        }
    });
    
    
    
    $(window).resize(function(){
        var screenWidth = $(window).width();
        
        if(screenWidth > 768){
            $('#myModal').css("display", "none");
        }
        else if(drawerIsDisplayed){
            $('#myModal').css("display", "block");
        }
        
    });
});

//$(document).contextmenu(function(){
//   return false; 
//});