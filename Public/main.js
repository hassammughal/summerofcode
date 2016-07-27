var DATA = [];
load();

 $("#submit").click(function(value){
    var takeInput = $('#input').val();
    
    DATA.push(takeInput);
    RenderJSON(DATA);
    save();
    $("#input").val('');
});

function RenderJSON(data){

        $('#container').empty();
        for(var i=0; i<data.length;i++){
            
        $('#container').append("<div id="+i+"><input type='checkbox'/> <label> "+data[i]+"</label><br></div>");
            
        $('#'+i).click(function(){
            var index = $(this).attr("id");
            $(this).remove();

            //var index = DATA.indexOf(myId);
            if(index > -1){
                DATA.splice(index,1);
                save();
            }
        });
    }
}

function save(){
    // localStorage.myData = JSON.stringify(DATA);
    $.ajax({
	    url: '/setTodo', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}

function load(){

    // DATA = JSON.parse(localStorage.myData);
    // RenderJSON(DATA);
    $.get('/getTodo',function(res){
		DATA = res;
        RenderJSON(DATA);

        console.log(res);   
	});
}        


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
	    url: '/setTodo', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}

// This method loads data from the server
function load(){

    $.get('/goTodo',function(res){
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
