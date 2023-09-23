let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
const quizArray = [
    {
        id: "0",
        question: "Which is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "1",
        question: "Which is the only continent in the world without a desert?",
        options: ["North America", "Asia", "Africa", "Europe"],
        correct: "Europe",
    },
    {
        id: "2",
        question: "Who invented Computer?",
        options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
        correct: "Charles Babbage",
    },
    {
        id: "3",
        question: "What do you call a computer on a network that requests files from another computer?",
        options: ["A client", "A host", "A router", "A web server"],
        correct: "A client",
    },
    {
        id: "4",
        question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
        options: ["Peripheral", "Clip art", "Highlight", "Execute"],
        correct: "Peripheral",
    },
    {
        id: "5",
        question: "The main computer that stores the files that can be sent to computers that are networked together is:",
        options: ["Clip art", "Mother board", "Peripheral", "File server"],
        correct: "File server",
    }, {
        id: "6",
        question: "How can you catch a computer virus?",
        options: ["Sending e-mail messages", "Using a laptop during the winter", "Opening e-mail attachments", "Shopping on-line"],
        correct: "Opening e-mail attachments",
    },
    {
        id: "7",
        question: "Google (www.google.com) is a:",
        options: ["Search Engine", "Number in Math", "Directory of images", "Chat service on the web"],
        correct: "Search Engine",
    },
    {
        id: "8",
        question: "Which is not an Internet protocol?",
        options: ["HTTP", "FTP", "STP", "IP"],
        correct: "STP",
    },
    {
        id: "9",
        question: "Which of the following is not a valid domain name?",
        options: ["www.yahoo.com", "www.yahoo.co.uk", "www.com.yahoo", "www.yahoo.co.in"],
        correct: "www.com.yahoo",
    },
    {
        id: "10",
        question: "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
        options: ["if (i <> 5)", "if i <> 5", "if (i != 5)", "if i =! 5 then",],
        correct: "if (i != 5)",
    },


    {
        id: "11",
        question: "The external JavaScript file must contain the &lt;script&gt; tag.",
        options: [

            "True",
            "False"

        ],
        correct: "False",

    },

    {
        id: "12",
        question: "How do you create a function in JavaScript?",
        options: [

            "function myFunction()",
            "function:myFunction()",
            "function = myFunction()",

        ],
        correct: "function myFunction()",

    },
    {
        id: "13",
        question: "How do you call a function named &quot;myFunction&quot;?",
        options: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",

        ],
        correct: "myFunction()",

    },
    {
        id: "14",
        question: "How to write an IF statement in JavaScript?",
        options: [

            "if i = 5 then", "if i == 5 then",
            "if (i == 5)",
            " if i = 5",

        ],
        correct: "if (i == 5)",

    },
    {
        id: "15",
        question: "Which of the following is a disadvantage of using JavaScript?",
        options: [

            "Client-side JavaScript does not allow the reading or writing of files.",
            "JavaScript can not be used for Networking applications because there is no such support available.",
            "JavaScript doesn't have any multithreading or multiprocess capabilities.",
            "All of the above."

        ],
        correct: "All of the above.",

    },
    {
        id: "16",
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [

            "rnd(7.25)",
            "Math.round(7.25)",
            "Math.rnd(7.25)",
            "round(7.25)"

        ],
        correct: "Math.round(7.25)",

    },
    {
        id: "17",
        question: "How do you find the number with the highest value of x and y?",
        options: [

            "Math.max(x, y)",
            "Math.ceil(x, y)",
            "top(x, y)",
            "ceil(x, y)"

        ],
        correct: "Math.max(x, y)",

    },
    {
        id: "18",
        question: "JavaScript is the same as Java.",
        options: [

            "true",
            "false"

        ],
        correct: "false",

    },
    {
        id: "19",
        question: "How can you detect the client&rsquo;s browser name?",
        options: [

            "navigator.appName",
            "browser.name",
            "client.navName"

        ],
        correct: "navigator.appName",

    },
    {
        id: "20",
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [

            "onchange",
            "onclick",
            "onmouseclick",
            "onmouseover"

        ],
        correct: "onclick",

    },
    {
        id: "21",
        question: "How do you declare a JavaScript variable?",
        options: [

            "var carName;",
            "variable carName;",
            "v carName;"

        ],
        correct: "var carName;",

    },
    {
        id: "22",
        question: "Which operator is used to assign a value to a variable?",
        options: [

            "*",
            "-",
            "=",
            "x"

        ],
        correct: "=",

    },
    {
        id: "23",
        question: "What will the following code return: Boolean(10 &gt; 9)",
        options: [

            "NaN",
            "false",
            "true"

        ],
        correct: "true",

    },
    {
        id: "24",
        question: "Is JavaScript case-sensitive?",
        options: [

            "No",
            "Yes"

        ],
        correct: "Yes",

    }
];
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
nextBtn.addEventListener(
    "click",
    (displayNext = () => {

        questionCount += 1;

        if (questionCount == quizArray.length) {

            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");

            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {

            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";

            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });

    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {

    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {

        i.options.sort(() => Math.random() - 0.5);

        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);

    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};