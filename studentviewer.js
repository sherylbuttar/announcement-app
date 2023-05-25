
var teacherGrade = [] ;
var teacherGender = [] ; 
var teacherClub = [] ; 
var teacherDetails = [] ; 
	
var stuGrade ;
var stuGender ;
var stuClub ;

// all variables - store globally

var announcementTextHolder = "";

// makes value of this variable to blank

var noResults = "Sorry, no announcements matched your criteria.";

// displays this when no criteria is matched

function displayAnnouncement() {

	teacherGrade = JSON.parse(localStorage.getItem("teacherGrKey"));
	teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
	teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
	teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));

	//retrieves all items, stringify

	stuGrade = localStorage.getItem("studentGrKey");
	stuGender = localStorage.getItem("studentGenderKey");
	stuClub = localStorage.getItem("studentClubKey");

	for (var i = 0; i < teacherGender.length; i++) {

		if ((teacherGrade[i] === stuGrade || teacherGrade[i] == "All") &&
		(teacherGender[i] === stuGender || teacherGender[i] == "All") &&
		(teacherClub[i] === stuClub || teacherClub[i] == "All")) {

			announcementTextHolder += teacherDetails[i];
			
		} 

	}

	if (announcementTextHolder == "") {

			announcementTextHolder = noResults;

			// if statement to run if no criteria matches
		}

	document.getElementById("htmlTAnnouncement").innerHTML = announcementTextHolder;

}

