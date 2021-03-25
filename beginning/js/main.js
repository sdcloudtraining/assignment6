// HANDLE THE LOAD EVENT OF THE WINDOW
window.onload = function(e){
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
document.getElementById('btnAddEmployee').onclick = function (){ openSesame();}
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP

 function openSesame(){
    window.open("add-employee.html", "_blank");
 }
}
