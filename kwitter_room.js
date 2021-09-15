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
   user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function Add_Room(){
 room_name= document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
  purpose:"Adding Room Name"     
 });
 localStorage.setItem("room_name",room_name);
 window.location= "kwitter_page.html";       
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomname- "+Room_names);
row= "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row; 
      //End code
      });
});
}
getData();
function redirectToRoomName(Name){
  console.log(Name);
  localStorage.setItem("room_name", Name);
  window.location="kwitter_page.html";    
}
function logout(){
 localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";  
}