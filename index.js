let num = 0;
document.getElementById("inc").onclick = function() {
   num++;
   document.getElementById("num").textContent = num;
}

document.getElementById("dec").onclick = function() {
   num--;
   document.getElementById("num").textContent = num;
}

document.getElementById("reset").onclick = function() {
   num = 0;
   document.getElementById("num").textContent = num;
}

