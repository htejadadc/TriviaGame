var questions = [{
	question: "Who played Batman in BATMAN FOREVER?",//Val Kilmer
	answers: ["George Clooney", "Val Kilmer", "Michael Keaton", "Christian Bale"],
	correct: 1
	},{
	question: "In which movie the GREED IS GOOD speach happen?",//Val Kilmer
	answers: ["Wall Street", "Trading Places", "Other People's Money", "The Bonfire of the Vanities"],
	correct: 0
	},{
	question: "Who many crew members the USCSS PROMETHEUS had?",//Val Kilmer
	answers: [6, 12, 18, 20],
	correct: 2
	},{
	question: "What is the year of JOHN WICK's Mustang?",//Val Kilmer
	answers: ["1969", "1968", "1970", "1963"],
	correct: 0
	},{
	question: "Who is the operator of the Nebuchadnezzar in THE MATRIX?",//Val Kilmer
	answers: ["Dozer", "Tank", "Mouse", "Switch"],
	correct: 1
	},{
	question: "What is the first words Darth Vader says in THE RETURN OF THE JEDI?",//Val Kilmer
	answers: ["You cannot hide forever Luke", "The Emperor is not as forgiving as I am", "Luke, I am your father", "You may dispense with the pleasantries, Comander"],
	correct: 3
	},{
	question: "What was the name of the evil Romulan who destroyed Vulcan?",//Val Kilmer
	answers: ["Chelin", "Zero", "Nero", "Zion"],
	correct: 2
	},{
	question: "Which actor plays Spock?",//Val Kilmer
	answers: ["Chris Pine", "Chris Hemsworth", "John Cho", "Zachary Quinto"],
	correct: 3
	}];

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var objective = false;
var appliedQuestion = 0;

function triviaGame(){

	var intervalTime;
	$(".answer").empty();

	function newQuestion(q){
		$(".question").html(questions[q].question);	
		for(var i = 0; i < questions[q].answers.length; i++) {
			$(".answer").append("<li>" + questions[q].answers[i] + "</li>");
		}
		$("li").on("click", function(event) {
			event.preventDefault();
			if ($(this).index() === questions[q].correct) {
				$(".question").html("Correct!");
				correct++;
				console.log("Correct!");
				sequence();
			} else{
				$(".question").html("Incorrect!");
				$(".question").append("The Correct answer is: " + questions[q].answers[questions[q].correct]);
				incorrect++;
				console.log("Incorrect!");
				sequence();
			}
		});			
	}

	function timer() {
		var clockCountDown = false;
		var countDown = {
			startTime: 31,
			start: function(){
				if (!clockCountDown) {
					intervalTime = setInterval(function(){
						countDown.startTime--;
						$("#clock").html("Time Remaining: " + countDown.startTime + " Seconds");
						if (countDown.startTime === 0) {
							unanswered++;
							sequence();
						}
					}, 1000);
				}
			}
		};
		countDown.start();
	};

	function sequence() {
		clearInterval(intervalTime);
		appliedQuestion++;
		clockCountDown = true;
		setTimeout(triviaGame, 3000);
	};

	function restart() {
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		objective = false;
		appliedQuestion = 0;
		$("#startOver").html("");
		triviaGame();
	};

	if (appliedQuestion < questions.length) {
		timer();
		newQuestion(appliedQuestion);
	} else {
		objective = true;
		$(".question").html("All done, this is how you did!");
		$(".answer").append("<li>" + "Correct Answers: " + correct + "</li>");
		$(".answer").append("<li>" + "Incorrect Answers: " + incorrect + "</li>");
		$(".answer").append("<li>" + "Unanswered: " + unanswered + "</li>");
		$("#startOver").html("Start Over?");		
	}

	$("#startOver").on("click", function(event) {
		restart();
	});
};

triviaGame();
