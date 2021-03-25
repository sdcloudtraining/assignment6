// HANDLE THE LOAD EVENT OF THE WINDOW
window.onload = function(e){

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
var width = 800;
var height = 700;
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width,height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(400,300)
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
var elems = document.body.getElementsByTagName("*");

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
document.getElementById('cancel').onclick = function (){ closeSesame();}
function closeSesame(){
    window.close()
}
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
// document.getElementById('submit').onclick = function (){ 
document.getElementById('empForm').addEventListener('submit', (e) => {


e.preventDefault();


// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT

var id="";
var name="";
var ext="";
var email="";
var dept="";


// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

id = document.getElementById('id').value;
name = document.getElementById('name').value;
ext = document.getElementById('extension').value;
email = document.getElementById('email').value;
dept = document.getElementById('department').value;

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE


// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
window.opener.document.querySelector('loginDetails').innerHTML= `${id}, ${name}, ${ext}, ${email}, ${dept}`;

//CORS POLICY PREVENTS TESTING AGAIN LIKE LAST WEEK'S ASSIGNMENT.  WINDOW.OPENER IS ISOTERIC.  I'LL PROBABLY NEVER USE IT.
//the template literal with multiple variables will probably not look good but i just wanted to get the info to the parent, not make it spaced correctly.

// CLOSE THE POPUP

closeSesame();

});
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
}