// Micro-Operations Visualization Tool
// Get values from input boxes
function getR1() {
    return parseInt(document.getElementById("r1").value) || 0;
}

function getR2() {
    return parseInt(document.getElementById("r2").value) || 0;
}


// Convert decimal number to 8-bit binary
function toBinary(number) {
    return (number & 255).toString(2).padStart(8, "0");
}


// Display values before operation
function displayBefore(r1, r2) {

    document.getElementById("before-r1").textContent =
        "R1 = " + toBinary(r1) + " (" + r1 + ")";

    document.getElementById("before-r2").textContent =
        "R2 = " + toBinary(r2) + " (" + r2 + ")";
}


// Display values after operation
function displayAfter(r1, r2, result) {

    document.getElementById("after-r1").textContent =
        "R1 = " + toBinary(r1) + " (" + r1 + ")";

    document.getElementById("after-r2").textContent =
        "R2 = " + toBinary(r2) + " (" + r2 + ")";

    document.getElementById("result").textContent =
        "Result = " + toBinary(result) + " (" + result + ")";
}


// LOAD OPERATION
function loadRegister() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "LOAD Operation";

    // Load R2 value into R1
    r1 = r2;

    document.getElementById("r1").value = r1;

    displayAfter(r1, r2, r1);
}


// CLEAR OPERATION
function clearRegister() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "CLEAR Operation";

    // Clear R1
    r1 = 0;

    document.getElementById("r1").value = r1;

    displayAfter(r1, r2, r1);
}


// INCREMENT OPERATION
function incrementRegister() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "INCREMENT Operation";

    r1 = (r1 + 1) & 255;

    document.getElementById("r1").value = r1;

    displayAfter(r1, r2, r1);
}


// SHIFT LEFT OPERATION
function shiftLeft() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "SHIFT LEFT Operation";

    r1 = (r1 << 1) & 255;

    document.getElementById("r1").value = r1;

    displayAfter(r1, r2, r1);
}


// SHIFT RIGHT OPERATION
function shiftRight() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "SHIFT RIGHT Operation";

    r1 = r1 >> 1;

    document.getElementById("r1").value = r1;

    displayAfter(r1, r2, r1);
}


// ADD OPERATION
function addRegisters() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "ADD Operation";

    let result = (r1 + r2) & 255;

    displayAfter(r1, r2, result);
}


// SUBTRACT OPERATION
function subtractRegisters() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "SUBTRACT Operation";

    let result = (r1 - r2) & 255;

    displayAfter(r1, r2, result);
}
