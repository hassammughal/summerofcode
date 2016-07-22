var currentTopic;
var topicRef = firebase.database().ref('/topics/');
topicRef.on('child_added',function(snapshot){
   $('#table1 tbody').append("<tr id='"+snapshot.key+"'><td><a href='topic.html#key="+snapshot.key+"'>"+snapshot.val().title+"</td><td>"+snapshot.val().username+"</td><td>"+snapshot.val().time+"</td><td><button type='button' data-toggle='modal' data-target='#delItem' class='btn btn-danger btn-block' id='btnDel'>X</button></td></tr>");
    $('#'+snapshot.key +" #btnDel").on('click',function(){
        currentTopic = snapshot.key;
    });

    

    $('#deleteItem').on('click',function(){
    var item = firebase.database().ref('/topics/'+currentTopic);
    item.remove();
    $('#'+currentTopic).remove();

});
});

$('#submit').on('click',function(){
     var date = new Date();
    var obj = {
        "title" : $('#topic').val(),
        "username" : $('#user').val(),
        "time" : date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() +"  "+ date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
        "comments" : {

        }
    }


    topicRef.push(obj);
});

 


    

