const questions = [
    {
        question: "What is JavaScript?",
        options: ["Programming Language", "Database", "Operating System", "Browser"],
        answer: "Programming Language"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    },
    {
        question: "Which symbol is used for single-line comments?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//"
    },
    {
        question: "Which method is used to print output in the console?",
        options: ["print()", "console.log()", "write()", "display()"],
        answer: "console.log()"
    },
    {
        question: "Which of the following is an array?",
        options: ["{}", "[]", "()", "<>"],
        answer: "[]"
    },
    {
        question: "Which method adds an element at the end of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        answer: "pop()"
    },
    {
        question: "What is the index of the first element in an array?",
        options: ["0", "1", "-1", "2"],
        answer: "0"
    },
    {
        question: "Which operator is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },
    {
        question: "Which keyword is used to declare a constant?",
        options: ["var", "let", "const", "constant"],
        answer: "const"
    },
    {
        question: "Which method converts a string into uppercase?",
        options: ["toUpperCase()", "upper()", "uppercase()", "toCapital()"],
        answer: "toUpperCase()"
    },
    {
        question: "Which loop is used to iterate over an array?",
        options: ["for", "if", "switch", "try"],
        answer: "for"
    },
    {
        question: "Which method returns the length of an array?",
        options: ["size()", "length", "count()", "total()"],
        answer: "length"
    },
    {
        question: "What is the correct way to write an if statement?",
        options: [
            "if x > 5",
            "if (x > 5)",
            "if x = 5 then",
            "if {x > 5}"
        ],
        answer: "if (x > 5)"
    },
    {
        question: "Which function is used to convert a string into an integer?",
        options: ["parseInt()", "parseString()", "toInteger()", "convertInt()"],
        answer: "parseInt()"
    }
];


const questionDispaly = document.querySelector("#Qustion");
const optionsDispaly = document.querySelector("#Option");

let currentQustion = 0;

const loadQuestion = () => {

   
    const Qustion = questions[currentQustion].question;
    questionDispaly.textContent = Qustion;
    optionsDispaly.innerHTML = '';

    questions[currentQustion].options.forEach((val) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="ans" value="${val}" class="me-3">${val}`;
        optionsDispaly.append(li);
    });

    const radio = document.querySelectorAll('input[name="ans"]');
    radio.forEach((input) => {
        input.addEventListener("change", () => {
            questions[currentQustion].selectedOption = input.value;
            console.log(questions[currentQustion]);
        });
    });

    radio.forEach((input) => {
        if (input.value == questions[currentQustion].selectedOption) {
            input.checked = true;
        }
    });
};

const nextQustion = () => {
    if (currentQustion < questions.length - 1) {
        currentQustion++;
        loadQuestion();
    } else {
        alert("All question Are complate .");
        document.getElementById("prevBtn").disabled = true;
        document.getElementById("nextBtn").disabled = true;
        checkAnswer();
    }
};

const prevQustion = () => {
    if (currentQustion > 0) {
        currentQustion--;
        loadQuestion();
    }
};

const checkAnswer = () => {
    let mark = 0;
    questions.forEach((question) => {
        if (question.selectedOption == question.answer) {
            mark++;
        }
    });

 console.log(`Your Mark: ${mark}/${questions.length}`);
  alert(`Quiz Finished! Your Score: ${mark}/${questions.length}`);
   clearInterval(intervalid); 
};



let ss = 0;
let mm = 0;

let timer = document.getElementById("timer");
const interval = 100;

const intervalid = setInterval(() => {
    const mmstr = mm > 9 ? `${mm}` : `0${mm}`;
    const str = ss > 9 ? `${mmstr}:${ss++}`:`${mmstr}:0${ss++}`;

    timer.textContent = str;
    if (ss > 59) {
        ss = 0;
        mm++;
        if (mm == 30) {
            alert("Time out.");
            clearInterval(intervalid);
            document.getElementById("prevBtn").disabled = true;
            document.getElementById("nextBtn").disabled = true;
        }
    }
}, interval);

loadQuestion();