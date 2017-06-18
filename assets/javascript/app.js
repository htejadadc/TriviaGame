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
	question: "Who played Batman in BATMAN FOREVER?",//Val Kilmer
	answers: ["George Clooney", "Val Kilmer", "Michael Keaton", "Christian Bale"],
	correct: 1
	},{
	question: "Who played Batman in BATMAN FOREVER?",//Val Kilmer
	answers: ["George Clooney", "Val Kilmer", "Michael Keaton", "Christian Bale"],
	correct: 1
	},{
	question: "Who played Batman in BATMAN FOREVER?",//Val Kilmer
	answers: ["George Clooney", "Val Kilmer", "Michael Keaton", "Christian Bale"],
	correct: 1
	},{
	question: "Who played Batman in BATMAN FOREVER?",//Val Kilmer
	answers: ["George Clooney", "Val Kilmer", "Michael Keaton", "Christian Bale"],
	correct: 1
	},{
	question: "Who played Batman in BATMAN FOREVER?",//Val Kilmer
	answers: ["George Clooney", "Val Kilmer", "Michael Keaton", "Christian Bale"],
	correct: 1
	}];

function newQuestion(q){
	$(".question").html(questions[q].question);	
	for(var i = 0; i < questions[q].answers.length; i++) {
		$(".answer").append("<li>" + questions[q].answers[i] + "</li>");
	}
}

function timer() {
	var intervalTime;
	var clockCountDown = false;
	var countDown = {
		startTime: 30,
		start: function(){
			if (!clockCountDown) {
				intervalTime = setInterval(function(){
					countDown.startTime--;
					$("#clock").html("Time Remaining: " + countDown.startTime + " Seconds");
					if (countDown.startTime === 0) {
						countDown.stop();
					}
				}, 1000);
				clockCountDown = true;
			}
		},
		stop: function(){
			clearInterval(intervalTime);
		}
	};
	countDown.start();
};
timer();
newQuestion(0);

