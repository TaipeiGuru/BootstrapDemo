// The following array is where all the information is stored. The default array contains 6 objects, with four properties per object. The properties include the name of the occupation, the years of education needed, the average annual salary and the degree needed for the occupation. 
var professions = [
  {
    "title":"surgeon",
    "education":"13",
    "salary":"391,194",
    "degree":"Doctor of Medicine"
  },
  {
    "title":"professor",
    "education":"8",
    "salary":"153,555",
    "degree":"Doctoral Degree"
  },
  {
    "title":"lawyer",
    "education":"7",
    "salary":"120,910",
    "degree":"Juris Doctor"
  },
  {
    "title":"engineer",
    "education":"4",
    "salary":"213,253",
    "degree":"Bachelor's Degree"
  },
  {
    "title":"pilot",
    "education":"4",
    "salary":"130,059",
    "degree":"Bachelor's Degree"
  },
  {
    "title":"Java developer",
    "education":"4",
    "salary":"74,053",
    "degree":"Bachelor's Degree"
  }
];

// The following function corresponds to the pink button on the main page. When run, it will ask the user for the name of the job. It'll then use a for loop to sort through the array. If the user's data matches the "title" property of any object, it'll display the other properties of that object. 
function getJobInfo() {
  var title = prompt("Job title?" );
   for(var i = 0; i <= professions.length-1; i++){ 
    if(professions[i].title == title){
      document.getElementById("maintext").innerHTML = "This profession requires " +  professions[i].education + " years of school, has a salary of $" + professions[i].salary + " and requires the following degree: " + professions[i].degree;
      break;
    // The loop sorts through all indexes, from zero to the length of the array. If the loop reaches the array length and no match has been found, the user's job isn't in the array. Therefore, the function will tell the user that their input did not match.
    }else if(i == professions.length-1){
      document.getElementById("maintext").innerHTML = "Sorry, we could not find this job in the database.";
    }
  }
}

// The following function corresponds to the blue button on the main page. When run, it will ask the user for the occupation name, years of schooling, salary and degree. 
function addJob() {
  var name = prompt("Please provide the name of the occupation: ");
  var yrs = prompt("Please provide the number of years of education needed for this occupation: ");
  var sal = prompt("Please provide the average annual salary for this occupation: ");
  var deg = prompt("Please provide the minimum degree required for this occupation: ");
  // After the user inputs their data, a new object is created. It takes user input as the properties of the new object. After all fields are completed, the object gets pushed into the array, and the program alerts the user that their input was successful. 
  var newJob = {
    "title":name,
    "education":yrs,
    "salary":sal,
    "degree":deg
  }
  professions.push(newJob);
  document.getElementById("maintext").innerHTML = "All done! This occupation has been added into the database.";
}

// The following function corresponds to the green button on the main page. It first sets the HTML to a blank state, since the program will later use an assignment operator (+=) that could cause issues if text is present.
function listAllInfo() {
  document.getElementById("maintext").innerHTML = "";
  // The function then uses a for loop to sort through each object in the array. For each object, the program will print the four properties associated with it. It also includes ",br />" at the end so that the next iteration of the for loop (i.e. the next job) will print on a different line. 
  for(var j = 0; j < professions.length; j++){
    document.getElementById("maintext").innerHTML += "To be a " + professions[j].title + ", you will need " +  professions[j].education + " years of school and a degree of: " + professions[j].degree + ". You will have an annual salary of $" + professions[j].salary + ". <br /><br />";
  }
}

// The following function allows the user to delete a job from the array. It takes the user input (the name of the job) and incorporates a for loop to match each object's title property with the user input. If a match is found, that object is spliced from the array. If not, the program informs the user that their job could not be found.
function remove() {
  var removedJob = prompt("What job would you like to remove?" );
  for(var m = 0; m <= professions.length - 1; m++) {
    if(professions[m].title == removedJob){
      professions.splice(m, 1);
      document.getElementById("maintext").innerHTML = "The job '" + removedJob + "' has been removed.";
    }else if(m == professions.length - 1){
      document.getElementById("maintext").innerHTML = "Sorry, we could not find this job in the database.";

    }
  }
}

// The following function allows the user to clear the output field without having to perform one of the aforementioned functions. The user simply needs to click on the text and it'll disappear. 
function clearField(){
  document.getElementById("maintext").innerHTML = "";
}
// Help with the "<br />" from https://stackoverflow.com/questions/10982913/javascript-how-to-show-each-element-of-array-on-a-new-line

