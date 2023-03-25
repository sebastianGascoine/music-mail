function logoutClicked(){
    console.log("session logoutClicked")
        $.get("/logout",function(data){
    console.log("session logout function callback");
            window.location = data.redirect;
        });
        return false;
}
    function logoutClicked(){
        $.get("/test",function(data){
        console.log('response ' + data.grade);
        });
        return false;
    }
    
    $(document).ready(function(){
    console.log("session doc ready")
        $.get("/userInfo",function(data){
    console.log("session get userInfo function callback");
    
            if (data.username)
                $("#session").html("Session " + data.username);
        });
    
        $("#logout").click(logoutClicked);
      $("#bbutton").click(handleClick);
    
    });
    