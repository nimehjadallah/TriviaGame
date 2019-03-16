$( document ).ready(function() {

        var game = {
            questions: [
            {
                   question: 'A poke bowl is a diced raw fish dish that originated in which U.S. state?',
                   choices: ['Hawaii', 'Louisiana', 'Maryland', 'New York'],
                   id: "firstQuestion",
                   answer: 0
            }, {
                question: 'Tom yum is a type of hot and sour soup that originated in which country?',
                choices: ['China', 'Japan', 'Thailand', 'Indonesia', 'Vietnam'],
                id: 'secondQuestion',
                answer: 2
            }, {
                question: 'What fruit is thrown at the annual food fight festival held in Buñol, Spain?',
                choices: ['Avocado', 'Cherry', 'Apple', 'Kiwi', 'Tomato'],
                id: 'thirdQuestion',
                answer: 4
            }, {
                question: 'Which fast food restaurant chain once tested bubble gum broccoli as a children’s menu item?',
                choices: ['Chic-fil-A', "McDonald's", "Wendy's", 'Burger King'],
                id: 'forthQuestion',
                answer: 1
            }, {
                question: 'Foie gras is a french delicacy made from the liver of what animal?',
                choices: ['Chicken', 'Deer', 'Duck or Goose', 'lamb'],
                id: 'fifthQuestion',
                answer: 2
            }, {
                question: 'In cooking, margarine is used as a substitute for what ingredient?',
                choices: ['olive oil', 'Butter', 'vegetable oil', 'Cococnut oil'],
                id: 'sixthQuestion',
                answer: 1
    
            }, {
                question: 'If a liquor is 100 proof how much alcohol does it contain by percentage?',
                choices: ['75%', '50%', '100%', '25%'],
                id: 'seventhQuestion',
                answer: 1
            }, {
                question: 'Founded in 1921, this company was credited with being the first “fast food” chain?',
                choices: ['Pizza Hut', 'Burger King', "McDonald's", 'White Castle'],
                id: 'eightQuestion',
                answer: 3
            }, {
                question: 'In which country did cheddar cheese originate?',
                choices: ['England', 'Switzerland', 'Denmark', 'Germany'],
                id: 'ninthQuestion',
                answer: 0
            }, {
                question: 'Chimichurri is a green sauce that originated in what country?',
                choices: ['Italy', 'Argentina', 'Mexico', 'India'],
                id: 'question-ten',
                answer: 1
            }
            ]}
    
        
    
        $(".startBtn").on("click", function (){
           
            $('.wrapper').show();
            console.log('hello');
    
            $(".jumbotron").hide();
        });
    
        var number = 30;
        $('#timeLeft').on('click', run);
    
       
        function decrement(){
        
            number--;
            $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
            if (number === 0){
            stop();
            $('#message').html('time up!');
            checkAnswers();
            }
        }
        
        function run(){
            counter = setInterval(decrement, 1000);
        }
        
        function stop(){
            clearInterval(counter);
        }
    
        run();
    
   
    function formTemplate(data) {
   
        var qString = "<form id='questionOne'>"+"<br>"+ data.question +"<br>";
        var choices = data.choices;
    
        for (var i = 0; i < choices.length; i++) {
            var possible = choices[i];
            console.log(possible);
            qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;
    
        }
        return qString + "</form>";
    }
    window.formTemplate = formTemplate;
    
    function buildQuestions(){
        var questionHTML = ''
        for (var i = 0; i<game.questions.length; i++) {
            questionHTML = questionHTML + formTemplate(game.questions[i]);
        }
        $('#questions-container').append(questionHTML);
    
    }
    
    function isCorrect(question){
        var answers = $('[name='+question.id+']');
        var correct = answers.eq(question.answer);
        var isChecked = correct.is(':checked');
        return isChecked;
    }
    
    buildQuestions();
    
    function resultsTemplate(question){
        var htmlBlock = '<div>'
        htmlBlock = htmlBlock + question.question + ': ' + isChecked;
        return htmlBlock + "</div>";
    }
    
    function checkAnswers (){
    
        var resultsHTML = '';
        var guessedAnswers = [];
        var correct = 0;
        var incorrect = 0;
        var unAnswered =0
    
    
        for (var i = 0; i<game.questions.length; i++) {
            if (isCorrect(game.questions[i])) {
                correct++;
            } else {
   
                if (checkAnswered(game.questions[i])) {
                    incorrect++;
                } else {
                    unAnswered++;
                }
            }
    
        }
  
        $('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);
    }
    
   
    function checkAnswered(question){
        var anyAnswered = false;
        var answers = $('[name='+question.id+']');

        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                anyAnswered = true;
            }
        }
    
        return anyAnswered;
    
    }
    
  
        $('#doneButton').on('click', function() {
        checkAnswers();
        stop();
        $("#messageDiv").html("Game Over!");
        })
    });


