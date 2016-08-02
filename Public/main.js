var listItems = [];

// The method fires when user 1 presses send button
// The method pushes data to the DATA[] array, Renders and saves
 $("#submit").click(function(value){
    var takeInput = $('#input').val();
    if(takeInput != ""){
         listItems.push(takeInput);
    RenderJSON(listItems);
    save();
    
    }
   
});


// This method appends the messages and displays it in the view. 
// This method is also responsible for "Clearing" the chat from Server.
function RenderJSON(data){

        $('#container').empty();
        for(var i=0; i<data.length;i++){    //This loop traverses through the DATA[] array to display message on view.
            var valueToAdd = data[i];
        $('#container').append('<div id="'+valueToAdd+'"> <input type="checkbox" id="'+valueToAdd+'"> <span id="'+valueToAdd+'">'+valueToAdd+'</span> </br> </div>');
        $('#'+valueToAdd).on('click', function() {
            var myid=$(this).attr("id");
            var index = listItems.indexOf(txt);
            if(index >-1){
                listItems.splice(index, 1)
            }
        })  

        
    }
}

// This method sends data to the server and stores it there.
function save(){
    $.ajax({
	    url: '/setToDoList', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: todoList,
	    success:function(res){console.log(res);}
	});
}

// This method loads data from the server
function load(){

    $.get('/getToDoList',function(res){
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
