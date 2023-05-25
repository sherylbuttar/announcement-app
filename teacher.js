 var teacherGrade = [];
 var teacherGender = [];
 var teacherClub = [];
 var teacherDetails = [];

// variable names

 var counter = 0 ;

 // set counter to 0


function getTData() {

	teacherGrade[counter] = document.getElementById('htmlTGrade').value ;
	teacherGender[counter] = document.getElementById('htmlTGender').value ;
	teacherClub[counter] = document.getElementById('htmlTClub').value ;
	teacherDetails[counter] = document.getElementById('htmlTAnnouncement').value ;

	// save html values selected by user to assigned variables

	counter++;

	alert (teacherGrade + ', ' + teacherGender + ', ' + teacherClub + ', ' + teacherDetails);

	//give alert : all variables and values selected with a comma in between to confirm that all values are selected
	
	localStorage.setItem("teacherGrKey", JSON.stringify(teacherGrade));
	localStorage.setItem("teacherGenderKey", JSON.stringify(teacherGender));
	localStorage.setItem("teacherClubKey", JSON.stringify(teacherClub));
	localStorage.setItem("teacherDetailsKey", JSON.stringify(teacherDetails));

	//local storage : save all values selected from teachercreator.html
	//stringify all values


}

function checkArray() {

	var checkGender; 

	checkGender = JSON.parse(localStorage.getItem("teacherGrKey"));
	alert("Gender from Local Storage = ", checkGender);

}
