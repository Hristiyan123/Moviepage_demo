let user = {
  userName:"",
  token:""
}
let signinBtn = document.getElementById("signinBtn");

signinBtn.onclick = function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if(checkIfblank(username) || checkIfblank(password)){
    console.log("kk");
  }

  else{
    let data = {
      username: username, 
      password: password
    };
  
  axios.post('http://localhost:8080/login?username='+ data.username + '&password=' + data.password)
  .then(function(response) {
    console.log("Success:", response.data);
    user.userName=response.data.user.name;
    user.token=response.data.token;
    localStorage.setItem('userToken', user.token);
    console.log(user);
    window.location.href = "/moviepage/moviePage.html";
  })

  .catch(function(error){
    console.log("Error:", error);
  })
  }
};

function checkIfblank(text){
  return text==="" || text === null || /^\s*$/.test(text); 
}


