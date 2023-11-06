const ques = [
    {
        'ques': 'What is aslo called Mark-up language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'ques': 'What does CSS stands for ?',
        'a': 'Hyper text mark-up language',
        'b': 'Object oriented language',
        'c': 'Cascading style sheet',
        'd': 'Jason object notation',
        'correct': 'c'
    },
    {
        'ques': 'What does HTML stands for ?',
        'a': 'Hyper text mark-up language',
        'b': 'Cascading style sheet',
        'c': 'Hyper text making language',
        'd': 'None of above',
        'correct': 'a'

    },
    {
        'ques': 'Choose the correct HTML tag for the largest heading',

        'a': '<heading>',
        'b': '<h6>',
        'c': '<head>',
        'd': '<h1></h1>',
        'correct': 'd'
    },
    {
        'ques': 'What is the correct HTML tag for inserting a line break?',
        'a':'<br>' ,
        'b':'<lb>' ,
        'c': '<break>' ,
        'd':'None of the above' ,
        'correct' :'a' ,

    },
    {
        'ques':'What is the correct HTML for creating a hyperlink?' ,
        'a':'<a url="http://www.w3schools.com">W3Schools.com</a>' ,
        'b': '<a name="http://www.w3schools.com">W3Schools.com</a>',
        'c': '<a href="http://www.w3schools.com">W3Schools</a>',
        'd': '<a>http://www.w3schools.com</a>',
        'correct' :'c' ,
    },
    {
        'ques':'What is the correct HTML for inserting an image' ,
        'a':'<img alt="MyImage">image.gif</img>',
        'b': '<img src="image.gif" alt="MyImage">',
        'c':'<image src="image.gif" alt="MyImage">',
        'd': '<img href="image.gif" alt="MyImage">',
        'correct' : 'b',
    },
    {
        'ques':'How can you make a numbered list?' ,
        'a': '<ol>',
        'b': '<ul>',
        'c':'<dl>' ,
        'd':'<list>' ,
        'correct' :'a' ,
    },
    {
        'ques':'What is the correct HTML for making a checkbox?' ,
        'a': '<checkbox>',
        'b': '<input type="checkbox">' ,
        'c': '<check>' ,
        'd':'<input type="check">',
        'correct' : 'b',
    },
    {
        'ques':'What is the correct HTML for referring to an external style sheet?' ,
        'a':'<stylesheet>mystyle.css</stylesheet>' ,
        'b': '<style src="mystyle.css">',
        'c': '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        'd': 'None of these' ,
        'correct' :'c' ,
    }

]


let index = 0;
let right = 0,
    wrong = 0;
let total = ques.length;
let Qbox = document.getElementById('Qbox');
const Radio = document.querySelectorAll('.Radio')
console.log(Qbox)


const question = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = ques[index];
    Qbox.innerText = `${index + 1}) ${data.ques}`
    Radio[0].nextElementSibling.innerText = data.a;
    Radio[1].nextElementSibling.innerText = data.b;
    Radio[2].nextElementSibling.innerText = data.c;
    Radio[3].nextElementSibling.innerText = data.d;
}

const submit = () => {
    const data = ques[index];
    const ans = getanswer();
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    console.log(right);
    console.log(wrong);
    index++;
    question();
    return;
}

let answer;
const getanswer = () => {

    Radio.forEach((opt) => {
        if (opt.checked) {
            answer = opt.value;
        }

    })
    return answer
}

const reset = () => {
    Radio.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    let accuracy = (right / total) * 100;
    const box = document.getElementById('box');


    if(accuracy<30){
        box.innerHTML = `<h2>Thanks for attending the quiz...</h2>
        <br>
        <h3>Correct : ${right}/${total}</h3>
        <br>
        <h3>Acuuracy : ${accuracy}%</h3>
        <br>
        <h2>You need to work hard...</h2>`
         box.style.minHeight = "400px"
         box.style.display = "flex";
         box.style.justifyContent = "center";
         box.style.alignItems = "center";
         box.style.fontSize = "2rem"
        
    }
    else if(accuracy>30 && accuracy<60){
        box.innerHTML = `<h2>Thanks for attending the quiz...</h2>
        <br>
        <h3>Correct : ${right}/${total}</h3>
        <br>
        <h3>Acuuracy : ${accuracy}%</h3>
        <br>
        <h2>You can do it better next-time...</h2>`
         box.style.minHeight = "400px"
         box.style.display = "flex";
         box.style.justifyContent = "center";
         box.style.alignItems = "center";
         box.style.fontSize = "2rem"
    }
    else if(accuracy>60 && accuracy<80){
        box.innerHTML = `<h2>Thanks for attending the quiz...</h2>
        <br>
        <h3>Correct : ${right}/${total}</h3>
        <br>
        <h3>Acuuracy : ${accuracy}%</h3>
        <br>
        <h2>Nice! You need little improvement...</h2>`
         box.style.minHeight = "400px"
         box.style.display = "flex";
         box.style.justifyContent = "center";
         box.style.alignItems = "center";
         box.style.fontSize = "2rem"
    }
    else if(accuracy>80 && accuracy<90){
        box.innerHTML = `<h2>Thanks for attending the quiz...</h2>
        <br>
        <h3>Correct : ${right}/${total}</h3>
        <br>
        <h3>Acuuracy : ${accuracy}%</h3>
        <br>
        <h2>Good! You have good knowledge...</h2>`
         box.style.minHeight = "400px"
         box.style.display = "flex";
         box.style.justifyContent = "center";
         box.style.alignItems = "center";
         box.style.fontSize = "2rem"
    }
    else{
        box.innerHTML = `<h2>Thanks for attending the quiz...</h2>
        <br>
        <h3>Correct : ${right}/${total}</h3>
        <br>
        <h3>Acuuracy : ${accuracy}%</h3>
        <br>
        <h2>Greate!!! You have done a excellent job...</h2>`
         box.style.minHeight = "400px"
         box.style.display = "flex";
         box.style.justifyContent = "center";
         box.style.alignItems = "center";
         box.style.fontSize = "2rem"
         
    }

}
question();
