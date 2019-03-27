//first we create the questions

var questions = [
    { q: "What was the first full length CGI movie?", 
    a: ["Bugs Life ", "Monsters Inc ", "Toy Story "],
    cA: "Toy Story "
},
    {q: "which of these is NOT a name of one of the spice girls?",
    a: ["Fred Spice ", "Sporty Spice ", "Posh Spice "],
    cA: "Fred Spice "
},
    {q:"Which NBA team won the most titles in the 90s?",
    a: ["New York Knicks ", "Los Angeles Lakers ", "Chicago Bulls "],
    cA: "Chicago Bulls "
}

];

var counter = 100;
var time; 
var correct = 0;
var incorrect = 0;

var countdown = function(){
//this count im not to sure but span calls this id 
    $("#count").html(counter);  
    counter--;
   // $("#start-area").html("<h2> Time Remaing: " + counter + "</h2>");

   if (counter == 0 ){
        done();
    }

}


// input type = radio is the fill in circle thang
var startGame = function(){
//time is a div that we created in html to specifically hold the time 
    $("#time").prepend("<h2> Time Remaing: <span id='count'>100</span> seconds </h2>");

    timer = setInterval(countdown, 1000);
    $("#start").hide();
  
    for (var i = 0; i < questions.length; i ++){
       
        $("#start-area").append(questions[i].q).append("<br>");
        for ( var j = 0; j < questions[i].a.length; j ++){
// we have to give it a name so that only one radio buton can be selected at a time
// the '' are important or else itll ignore the space 
// i.e if los angeles was selected itll read it as los 
            $("#start-area").append("<input type ='radio' name = 'check-" + i + "' value = '"+ questions[i].a[j]+"'  >");    
            $("#start-area").append(questions[i].a[j]);          
        }
        $("#start-area").append("<br><br>");
    }

    $("#start-area").append("<button id ='donebutton'> Done </button>");
};


// so u click from start-area first then you get to donebutton so thats why it is there
// so if u appended a button from click itll parent all of the new buttons
// we put the done funciton there so that if they run out of time it just ends it
$("#start-area").on("click", "#donebutton", done = function(){
   // this is how we grab the value of input radio via jquery 
   //input[name='name']:checked .. val();
   for (var i = 0; i < questions.length; i ++){ 
        var radioValue = $("input[name = 'check-"+i+"']:checked").val();
        console.log(radioValue);    
        console.log(questions[i].cA);
// so earlier it wouldnt work because in your questions array u had a space
// so u didnt catch that in the console.log      
        if (radioValue == questions[i].cA){
            correct++;
        }
        else{
            incorrect++;
        }  
    }
    $("#start-area").html("Correct answers:" + correct +
    "<br> Incorrect answers: " + incorrect);



})





$("#start").on("click", function(){
    startGame();    
})