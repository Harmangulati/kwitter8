//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAOvcdUA9p877jB4xparNQZ12M_SlHiTu0",
      authDomain: "kwitter-23736.firebaseapp.com",
      databaseURL: "https://kwitter-23736-default-rtdb.firebaseio.com",
      projectId: "kwitter-23736",
      storageBucket: "kwitter-23736.appspot.com",
      messagingSenderId: "587388896764",
      appId: "1:587388896764:web:2b42cfd6a095ad18bb1e79"
    };
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value',
 function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=  message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn-btn warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+" </span></button><hr>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function send(){     
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message:msg,
like:0      
});
document.getElementById("msg").value=" ";     
}
function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
window.location= "index.html";  
}
function updatelike(message_id){
console.log("Cliked on like button- "+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedlike=Number(likes)+1;
console.log(updatedlike);
firebase.database().ref(room_name).child(message_id).update({
 like:updatedlike     
});
}