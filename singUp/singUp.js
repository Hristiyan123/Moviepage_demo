
let signUpBtn = document.getElementById("signUpBtn");

signUpBtn.onclick = function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
  if(checkIfblank(username) || checkIfblank(password) || checkIfblank(password2)){
    console.log("kk");
  }

  else{
    let data = {
      username: username, 
      password: password,
      password2: password2
    };
  
  axios.post('http://localhost:8080/register?username='+ data.username + '&password1=' + data.password + '&password2=' + data.password2)
  .then(function(response) {
    console.log("Success:", response.data);
    window.location.href = "/html"
  })

  .catch(function(error){
    console.log("Error:", error)
  })
  }
};

function checkIfblank(text){
  return text==="" || text === null || /^\s*$/.test(text); 
}


