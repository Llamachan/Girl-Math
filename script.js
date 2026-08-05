const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function scientific(operation) {
    try {
        let value = parseFloat(display.value);

        switch (operation) {
            case "sin":
                display.value = Math.sin(value * Math.PI / 180).toFixed(6);
                break;

            case "cos":
                display.value = Math.cos(value * Math.PI / 180).toFixed(6);
                break;

            case "tan":
                display.value = Math.tan(value * Math.PI / 180).toFixed(6);
                break;

            case "sqrt":
                display.value = Math.sqrt(value);
                break;

            case "log":
                display.value = Math.log10(value);
                break;

            case "ln":
                display.value = Math.log(value);
                break;
        }
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || "+-*/().".includes(key)) {
        append(key);
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});