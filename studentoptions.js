var stuGrade
var stuGender
var stuClub

// variable names

function getStuData() {

	stuGrade = document.getElementById('htmlSGrade').value
	stuGender = document.getElementById('htmlSGender').value
	stuClub = document.getElementById('htmlSClub').value

	// save html values selected by user to assigned variables

	alert (stuGrade + ', ' + stuGender + ', ' + stuClub);

	//give alert : all variables and values selected with a comma in between to confirm that all values are selected

	localStorage.setItem ("studentGrKey", stuGrade)
	localStorage.setItem ("studentGenderKey", stuGender)
	localStorage.setItem ("studentClubKey", stuClub)

	//local storage : save all values selected from teachercreator.html


}


