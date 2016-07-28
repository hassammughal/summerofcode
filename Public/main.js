var DATA = [];
load();

var nick = window.prompt("Enter username");
// The method fires when user 1 presses send button
// The method pushes data to the DATA[] array, Renders and saves
 $("#fsubmit").click(function(value){
    var takeInput = $('#finput').val();
    
    DATA.push(nick+":"+takeInput);
    console.log(DATA);
    RenderJSON(DATA);
    save();
    $("#finput").val('');
   
});


// This method appends the messages and displays it in the view. 
// This method is also responsible for "Clearing" the chat from Server.
function RenderJSON(data){

        $('#container').empty();
        for(var i=0; i<data.length;i++){    //This loop traverses through the DATA[] array to display message on view.
            
        $('#container').append(data[i]+"</br>");

        
        $("#clear").click(function(value){
           DATA = [];
           save();
        });
    }
}

// This method sends data to the server and stores it there.
function save(){
    $.ajax({
	    url: '/setMessage', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}

// This method loads data from the server
function load(){

    $.get('/getMessage',function(res){
		DATA = res;
        RenderJSON(DATA);
	});
}


// This method is responsible for creating intervals, so the page refreshes automatically

$(document).ready(
    function(){
        setInterval(function(){
            $('#container').html(load());
        },1000);
    }
);
