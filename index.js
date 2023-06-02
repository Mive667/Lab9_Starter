// index.js

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

function init() {
    // Add the event listeners to buttons and calculator
    initCalculatorHandler(); 
    initButtonHandler();
}

function initCalculatorHandler() {
    let form = document.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        let operator = document.querySelector('#operator').value;
        // step3: try/ catch/ finally
        try {
            // step4: check number digit
            if (hasMoreThanTwoDigits(firstNum) || hasMoreThanTwoDigits(firstNum)) {
                throw new ExceedDigitError("number has more than 2 digits!")
            }

            // work successfully
            output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
            console.log("evaluation success!")
        }
        catch(err) {
            console.log(`evaluation fail:\n${err}`);
            output.innerHTML = "";
        }
        finally {
            console.log("evaluation end");
        }
    });
}

// step4
// custom Error
class ExceedDigitError extends Error {
    constructor(message) {
        super(message);
        this.name = "ExceedDigitError";
    }
}


// use regular expressions to check 
// if a number(string) has more than 3 digits -> true
function hasMoreThanTwoDigits(numberString) {
    return /^\-?\d{3,}$/.test(numberString);
  }
  

function initButtonHandler() {
    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
    
    // define function for each button
    let consoleLog = function () {
        console.log(`console log demo`);
    };
    
    let consoleError = function () {
        console.error(`console error demo`)
    };
    
    let consoleCount = function () {
        console.count(`console.count has been invoked`);
    };
    
    let consoleWarn = function () {
        console.warn(`console warn demo`);
    };
    
    let consoleAssert = function () {
        const num = 5;
        const reason = `the number should equal to 10!`;
        console.assert(num === 10, {num, reason});
    };
    
    let consoleClear = function () {
        console.clear();
        console.log(`console has been clean!`);
    };
    
    let consoleDir = function () {
        console.dir(Array.from(document.querySelectorAll('#error-btns > button')));
    };
    
    let consoleDirXml = function () {
        console.dirxml(Array.from(document.querySelectorAll('#error-btns > button')));
    };
    
    let consoleGroupStart = function () {
        console.group('Group');    
    };
    
    let consoleGroupEnd = function () {
        console.groupEnd('Group');
    };
    
    let consoleTable = function () {
        let userInfo = [
            {
                name:"mive",
                birthday:"0915"
            },
            {
                name:"luke",
                birthday:"0123"
            },
            {
                name:"kiwa",
                birthday:"0715",
                city:"NewYork"
            }
        ];
        console.table(userInfo);
    };
    
    let startTimeer = function () {
        console.time("timer1");
    };
    
    let endTimer = function () {
        console.timeEnd("timer1");
    };
    
    let consoleTrace = function () {
        const first = () => { second(); };
        const second = () => { third(); };
        const third = () => { fourth(); };
        const fourth = () => { console.trace(); };
        first();
    };
    
    let triggerGlobalError = function () {
        notDefinedFunction();
    };
    
    // store all function in a list
    const buttonFunction = [consoleLog, consoleError, consoleCount, 
                       consoleWarn, consoleAssert, consoleClear, 
                       consoleDir, consoleDirXml, consoleGroupStart,
                       consoleGroupEnd, consoleTable, startTimeer,
                       endTimer, consoleTrace, triggerGlobalError];
    
    // add eventListener for every button
    for (let i in buttonFunction) {
        let button = errorBtns[i];
        button.addEventListener("click", buttonFunction[i])
    };
}