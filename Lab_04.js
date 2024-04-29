// Todo 3 : Write some function to handle the pass value from HTML
console.log("Fighting!");

function ClickButton0() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == 0) {
        curNumber = "";
    }
    curNumber += '0';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton1() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '1';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton2() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '2';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton3() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '3';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton4() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '4';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton5() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '5';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton6() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '6';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton7() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '7';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton8() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '8';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButton9() {
    var curNumber = document.getElementsByClassName("display")[0].value;
    console.log(curNumber);
    if (curNumber == "0") {
        curNumber = "";
    }
    curNumber += '9';
    document.getElementsByClassName("display")[0].value = curNumber;
}

function ClickButtonDot() {
    document.getElementsByClassName("display")[0].value += '.';
}

function ClickButtonC() {
    // console.log("whwh");
    document.getElementsByClassName("display")[0].value = '0';
}

function ClickButtonL() {
    document.getElementsByClassName("display")[0].value += '(';
}

function ClickButtonR() {
    document.getElementsByClassName("display")[0].value += ')';
}

function ClickButtonDivide() {
    document.getElementsByClassName("display")[0].value += '/';
}

function ClickButtonMultiply() {
    document.getElementsByClassName("display")[0].value += '*';
}

function ClickButtonSub() {
    document.getElementsByClassName("display")[0].value += '-';
}

function ClickButtonAdd() {
    document.getElementsByClassName("display")[0].value += '+';
}

function ClickButtonEqual() {
    var nowNum = document.getElementsByClassName("display")[0].value;
    var ans = 0;
    try {
        ans = eval(nowNum);
        // document.getElementsByClassName("display")[0].value = eval(nowNum);
    }
    catch (e) {
        ans = "Error!!!!";
        // document.getElementsByClassName("display")[0].value = eval(nowNum);
    }
    document.getElementsByClassName("display")[0].value = ans;
}

function PressKeyboard(event) {
    var nowNum = document.getElementsByClassName("display")[0].value;
    console.log("here : ", nowNum);
    if(event.key == 'Enter') {
        // var nowNum = document.getElementsByClassName("display")[0].value;
        var ans = 0;
        try {
            ans = eval(nowNum);
        }
        catch (e) {
            ans = "Error!!!!";
        }
        document.getElementsByClassName("display")[0].value = ans;
    }
    else if(event.key == 'Backspace') {
        if(document.getElementsByClassName("display")[0].value != "0") document.getElementsByClassName("display")[0].value = nowNum.slice(0, -1);
    }
    else if(event.key == '.') {
        document.getElementsByClassName("display")[0].value += event.key; 
    }
    else if(event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || 
            event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' ||event.key == '9' ||
            event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' ||
            event.key == '(' || event.key == ')' ) {

            document.getElementsByClassName("display")[0].value = (nowNum == "0" ) ? "" : nowNum;
            document.getElementsByClassName("display")[0].value += event.key;      
    }
}