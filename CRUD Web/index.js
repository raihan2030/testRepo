let tableBody = document.getElementById("tableBody");
let dataList = [];
// let id = 0;

document.getElementById("addData").addEventListener("click", function() {
   let id = document.getElementById("inpId").value.trim();
   let nama = document.getElementById("inpNama").value.trim();
   let umur = document.getElementById("inpUmur").value.trim();
   let status = document.getElementById("inpStatus").value.trim();
   
   if(id === "" || nama === "" || umur === "" || status === ""){
      window.alert("Input data tidak boleh kosong!")
   }
   else{
      // id++;
      let newData = {id: id, nama: nama, umur: umur, status: status};
      dataList.push(newData);

      updateTable();
   }
});

document.getElementById("clearAdd").addEventListener("click", function() {
   document.getElementById("inpId").value = ""
   document.getElementById("inpNama").value = ""
   document.getElementById("inpUmur").value = ""
   document.getElementById("inpStatus").value = ""
})

document.getElementById("reset").addEventListener("click", function(){
   id = 0;
   dataList = [];
   updateTable();
});

document.getElementById("deleteData").addEventListener("click", function() {
   let id = document.getElementById("inpIdDelete").value;
   let index = dataList.findIndex(data => data.id === id);
   if(index != -1){
      dataList.splice(index, 1)
   }
   else{
      window.alert("Data tidak ditemukan")
   }

   updateTable()
});

function updateTable() {
   tableBody.innerHTML = "";
   
   dataList.forEach((data) => {
      let row = tableBody.insertRow();
      row.insertCell(0).innerText = data.id;
      row.insertCell(1).innerText = data.nama;
      row.insertCell(2).innerText = data.umur;
      row.insertCell(3).innerText = data.status;
   });

   let jumlahBarisKosong = 5 - dataList.length;
   for(i = 0; i < jumlahBarisKosong; i++){
      let row = tableBody.insertRow();
      row.insertCell(0).innerText = "";
      row.insertCell(1).innerText = "";
      row.insertCell(2).innerText = "";
      row.insertCell(3).innerText = "";
   }

}


