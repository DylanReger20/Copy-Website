
function clicked() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank")
}

function clicked1() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank")
}

function clicked2(){
    if(document.getElementById("pic1").src === "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"){
        document.getElementById("pic1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"
    }
    else if(document.getElementById("pic1").src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10") {
        document.getElementById("pic1").src = "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
    }
    else if(document.getElementById("pic1").src === "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"){
        document.getElementById("pic1").src = "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"
    }
}

function clicked3(){
    if(document.getElementById("pic1").src === "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"){
        document.getElementById("pic1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"
    }
    else if(document.getElementById("pic1").src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10") {
        document.getElementById("pic1").src = "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"
    }
    else if(document.getElementById("pic1").src === "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"){
        document.getElementById("pic1").src = "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
    }
}

function sideBar(id){
    window.location.href="#"+id;
}

function openMe(){
    let x = document.getElementById("hidden1");
    if(x.style.display === "none"){
        x.style.display = "block"
        document.getElementById("hidden2").style.display = "none"
    } else {
        x.style.display = "none"
    }

}

function openMe2(){
    let x = document.getElementById("hidden2");
    if(x.style.display === "none"){
        x.style.display = "block"
        document.getElementById("hidden1").style.display = "none"
    } else {
        x.style.display = "none"
    }
}

function buttonSmall(){
    let hid = document.querySelector(".sb");
        if(hid.style.display === "none"){
            hid.style.display = "block";

            document.getElementById("buttonSmall").style.color= "black";

        }
        else{
            hid.style.display = "none";
            document.getElementById("buttonSmall").style.color= "white";
        }
}





























































let currentInput = "";
let history = [];
let historyIndex = -1;

const exp = document.getElementById("exp");
const ans = document.getElementById("ans");

function updateScreen() {
    let text = "";
    for (let i = 0; i < currentInput.length; i++) {
        if (currentInput[i] === "*") {
            text += "X";
        } else if (currentInput[i] === "%") {
            text += "MOD";
        } else {
            text += currentInput[i];
        }
    }
    exp.textContent = text;
}

function handleInput(val) {
    if (val === "=") {
        calculate();
    } else if (val === "UP") {
        goUp();
    } else if (val === "DOWN") {
        goDown();
    } else if (val === "CLEAR") {
        currentInput = "";
        ans.textContent = "Answer";
        updateScreen();
    } else if (val === "BACKSPACE") {
        currentInput = currentInput.substring(0, currentInput.length - 1);
        updateScreen();
    } else {
        currentInput = currentInput + val;
        ans.textContent = "";
        updateScreen();
    }
}

function calculate() {
    if (currentInput === "") {
        return;
    }

    let result = eval(currentInput);
    ans.textContent = result;
    history.push({ expr: currentInput, result: result });
    historyIndex = history.length;
    currentInput = result;
}

function goUp() {
    if (history.length === 0) {
        return;
    }
    if (historyIndex > 0) {
        historyIndex--;
        currentInput = history[historyIndex].expr;
        ans.textContent = history[historyIndex].result;
        updateScreen();
    }
}

function goDown() {
    if (history.length === 0) {
        return;
    }
    if (historyIndex < history.length - 1) {
        historyIndex++;
        currentInput = history[historyIndex].expr;
        ans.textContent = history[historyIndex].result;
        updateScreen();
    } else {
        historyIndex = history.length;
        currentInput = "";
        ans.textContent = "Answer";
        updateScreen();
    }
}

// Keyboard support for physical laptop/desktop keyboards
document.addEventListener("keydown", function(e) {
    let k = e.key;
    if (k >= "0" && k <= "9") { handleInput(k); }
    if (k === ".") { handleInput("."); }
    if (k === "+") { handleInput("+"); }
    if (k === "-") { handleInput("-"); }
    if (k === "*") { handleInput("*"); }
    if (k === "/") { handleInput("/"); }
    if (k === "%") { handleInput("%"); }
    if (k === "(") { handleInput("("); }
    if (k === ")") { handleInput(")"); }
    if (k === "^") { handleInput("**"); }
    if (k === "Enter" || k === "=") { handleInput("="); }
    if (k === "Backspace") { handleInput("BACKSPACE"); }
    if (k === "Escape" || k === "c" || k === "C") { handleInput("CLEAR"); }
    if (k === "ArrowUp") { handleInput("UP"); }
    if (k === "ArrowDown") { handleInput("DOWN"); }
});
