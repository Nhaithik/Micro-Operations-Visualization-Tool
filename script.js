// Micro-Operations Visualization Tool


// ================================
// GET REGISTER VALUES
// ================================

function getR1() {
    return parseInt(document.getElementById("r1").value) || 0;
}

function getR2() {
    return parseInt(document.getElementById("r2").value) || 0;
}


// ================================
// CONVERT TO 8-BIT BINARY
// ================================

function toBinary(number) {
    return (number & 255).toString(2).padStart(8, "0");
}


// ================================
// DISPLAY VALUES BEFORE OPERATION
// ================================

function displayBefore(r1, r2) {

    document.getElementById("before-r1").textContent =
        "R1 = " + toBinary(r1) + " (" + r1 + ")";

    document.getElementById("before-r2").textContent =
        "R2 = " + toBinary(r2) + " (" + r2 + ")";
}


// ================================
// DISPLAY VALUES AFTER OPERATION
// ================================

function displayAfter(r1, r2, result) {

    document.getElementById("after-r1").textContent =
        "R1 = " + toBinary(r1) + " (" + r1 + ")";

    document.getElementById("after-r2").textContent =
        "R2 = " + toBinary(r2) + " (" + r2 + ")";

    document.getElementById("result").textContent =
        "Result = " + toBinary(result) + " (" + result + ")";
}


// ================================
// LOAD OPERATION
// R1 ← R2
// ================================

function loadRegister() {

    let r1 = getR1();
    let r2 = getR2();

    // Display original values
    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "LOAD Operation";

    // Copy R2 into a temporary new R1
    let newR1 = r2;

    // Display result without changing input boxes
    displayAfter(newR1, r2, newR1);
}


// ================================
// CLEAR OPERATION
// R1 ← 0
// ================================

function clearRegister() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "CLEAR Operation";

    // Clear temporary R1
    let newR1 = 0;

    // Input R1 remains unchanged
    displayAfter(newR1, r2, newR1);
}


// ================================
// INCREMENT OPERATION
// R1 ← R1 + 1
// ================================

function incrementRegister() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "INCREMENT Operation";

    // Increment R1
    let newR1 = (r1 + 1) & 255;

    // Input R1 remains unchanged
    displayAfter(newR1, r2, newR1);
}


// ================================
// SHIFT LEFT OPERATION
// R1 ← R1 << 1
// ================================

function shiftLeft() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "SHIFT LEFT Operation";

    // Shift R1 left by one bit
    let newR1 = (r1 << 1) & 255;

    // Input R1 remains unchanged
    displayAfter(newR1, r2, newR1);
}


// ================================
// SHIFT RIGHT OPERATION
// R1 ← R1 >> 1
// ================================

function shiftRight() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "SHIFT RIGHT Operation";

    // Shift R1 right by one bit
    let newR1 = r1 >> 1;

    // Input R1 remains unchanged
    displayAfter(newR1, r2, newR1);
}


// ================================
// ADD OPERATION
// Result ← R1 + R2
// ================================

function addRegisters() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "ADD Operation";

    // Add both registers
    let result = (r1 + r2) & 255;

    // Registers remain unchanged
    displayAfter(r1, r2, result);
}


// ================================
// SUBTRACT OPERATION
// Result ← R1 - R2
// ================================

function subtractRegisters() {

    let r1 = getR1();
    let r2 = getR2();

    displayBefore(r1, r2);

    document.getElementById("operation-name").textContent =
        "SUBTRACT Operation";

    // Calculate actual signed result
    let result = r1 - r2;

    // Convert to 8-bit two's complement binary
    let binaryResult = toBinary(result);

    // Registers remain unchanged
    document.getElementById("after-r1").textContent =
        "R1 = " + toBinary(r1) + " (" + r1 + ")";

    document.getElementById("after-r2").textContent =
        "R2 = " + toBinary(r2) + " (" + r2 + ")";

    // Show signed decimal result
    document.getElementById("result").textContent =
        "Result = " + binaryResult + " (" + result + ")";
}
