//global variables
var correctAnswers = 0;
var wrongAnswers = 0;
var time = 0;
var timeleft = 30;
var intervalid;
var clockRunning = false;
// var choices;
// var percentCorrect = (correctAnswers/questionArray.length)*100;

//Create objects to hold the questions, answers, image references
var images = ["../images/Magic GIF-downsized_large.gif", "../images/Kobe Bryant GIF-downsized_large.gif", "../images/Sky Hook GIF-downsized_large.gif"];


var firstQuestion = {
    question: "Who was the driving force behind Showtime?",
    choices: ["Elgin Baylor","Jamal Wilkes","Magic Johnson","Michael Cooper","Byron Scott"],
    answer: "Magic Johnson",
    answerImage: images[0], 
};

var secondQuestion = {
    question: "Who was the creator of the \"Sky Hook\"?",
    choices: ["Andrew Bynum","George Mikan","Wilt Chamberlain","Vlade Divac","Kareem Abdul Jabbar"],
    answer: "Kareem Abdul Jabar",
    answerImage: images[2], 
};

var thirdQuestion = {
    question: "Who originially wore number 8, then changed to 24?",
    choices: ["Shaquille O\'Neal","Lebron James","Kobe Bryant","Eddie Jones","Brandon Ingram"],
    answer: "Kobe Bryant",
    answerImage: images[1], 
};

var fourthQuestion = {
    question: "He has led three teams to the NBA finals?",
    choices: ["Robert Horry","James Worthy","Steve Nash","Lebron James","Nick Van Exel"],
    answer: "Lebron James",
    // answerImage: images[2], 
};

var fifthQuestion = {
    question: "Who was the only player to win the finals MVP award while playing for the team that lost?",
    choices: ["Jerry West","Norm Nixon","Mychal Thompson","Shaquille ONeal","Karl Malone"],
    answer: "Jerry West",
    answerImage: images[2], 
};
//displays the question after the start button
function display() {
    $('#question1').html(firstQuestion.question);  
    $('#question2').html(secondQuestion.question);
    $('#question3').html(thirdQuestion.question);
    $('#question4').html(fourthQuestion.question);
    $('#question5').html(fifthQuestion.question);
    
}

//enter multiple choice options below the question
function showChoices() {
      for (var j = 0; j < firstQuestion.choices.length; j++) {
        var selection = document.createElement("p");
        
        selection.textContent = firstQuestion.choices[j]; 
        question1.appendChild(selection);
    }
}



//enter multiple choice options below the question
function showChoices() {
      for (var j = 0; j < firstQuestion.choices.length; j++) {
        var selection = document.createElement("p");
        
        selection.textContent = firstQuestion.choices[j]; 
        question1.appendChild(selection);
    }
    for (var j = 0; j < secondQuestion.choices.length; j++) {
        var selection = document.createElement("p");
        
        selection.textContent = secondQuestion.choices[j]; 
        question2.appendChild(selection);
    }
    for (var j = 0; j < thirdQuestion.choices.length; j++) {
        var selection = document.createElement("p");
        
        selection.textContent = thirdQuestion.choices[j]; 
        question3.appendChild(selection);
    }
    for (var j = 0; j < fourthQuestion.choices.length; j++) {
        var selection = document.createElement("p");
        
        selection.textContent = fourthQuestion.choices[j]; 
        question4.appendChild(selection);
    }
    for (var j = 0; j < fifthQuestion.choices.length; j++) {
        var selection = document.createElement("p");
        
        selection.textContent = fifthQuestion.choices[j]; 
        question5.appendChild(selection);
    }

}

//process with click events, hover options

 window.onload = function() {
    $("#startTimer").on("click", start)
    $("#done").on("click", stop);
    $("#stopGame").hide();
    };

   
 

  function start() {
    $('#startTimer').hide(); 
    $("#stopGame").show();
        intervalid = setInterval(function count() {
        $("#timer").html( timeleft + " seconds remaining");
        timeleft--;
        if(timeleft <= 0){
          clearInterval(start);
        $("#timer").html("Time's Up")
        }
    }, 1000);
    display();
    showChoices();
   
  }

  function stop() {
      clearInterval(intervalid);
  }
   








