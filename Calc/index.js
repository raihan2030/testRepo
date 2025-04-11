let username;
document.getElementById("submit").onclick = function() {
   username = document.getElementById("myInp").value;
   document.getElementById("welcome").textContent = `Selamat datang, ${username}!`;
}
