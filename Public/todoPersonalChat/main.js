var DATA = [];
load();


// The method fires when user 1 presses send button
// The method pushes data to the DATA[] array, Renders and saves
 $("#fsubmit").click(function(value){
    var takeInput = $('#finput').val();
    
    DATA.push("sumair:"+takeInput);
    console.log(DATA);
    RenderJSON(DATA);
    save();
    $("#finput").val('');
   
});

// The method given below fires when second user presses send button
// Renders data into DATA[] array
$("#ssubmit").click(function(value){
    var takeSecondInput = $('#sinput').val();

    DATA.push("Asad:"+takeSecondInput);
    RenderJSON(DATA);
    save();
    $('#sinput').val('');
    
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
	    url: 'http://datastore.asadmemon.com/sumair', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}

// This method loads data from the server
function load(){

    $.get('http://datastore.asadmemon.com/sumair',function(res){
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
