var hash;
    hash = window.location.hash;
    hash = hash.replace("#key=",""); 
    console.log(hash);
var individualtopicRef = firebase.database().ref("/topics/" + hash + "/comments/")
 individualtopicRef.on('child_added',function(commentSnap){
           
            
            $('#container').append(commentSnap.val());
        });
 $('#enterComment').on('click',function(){
        
        // console.log(currentTopic);
        
         individualtopicRef.push($('#comment').val());
        
    });