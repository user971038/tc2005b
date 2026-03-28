let fullOp = '';
let result = 0;
let history = '';
let histResult = 0;

const ops = ['+','*','/','^'];
const allOps = ['+','-','*','/','^'];

function handleClick(number) {
    let last = fullOp.at(-1);
    let last2 = fullOp.at(-2);

    if (fullOp.length >= 24) return; // no más de 24 caracteres
    if (fullOp === '' && ops.includes(number)) return; // no empezar con +,*,/,^
    if (fullOp.length === 1 && last === '-'&& allOps.includes(number)) return;
    if (last === '.' && number === '.') return; // no puntos seguidos

    if (allOps.includes(last) && ops.includes(number)) return; // no signos seguidos
    if (allOps.includes (last2) && last === '-' && allOps.includes(number)) return; // no ---

    console.log(number);
    fullOp += number;
    showNumber(fullOp);
};

function calculate() {
    console.log(fullOp);
    history = fullOp;
    const [a,op,b] = fullOp.split(/(?<=\d)(\+|\-|\*|\/|\^)/gm); // (?<=\d) --> solo hace un split si hay un dígito antes del operador
        console.log({a,op,b})
        switch (op) {
            case '*':
                result = Number(a) * Number(b);
                break;
            case '/':
                result = Number(a) / Number(b);
                break;
            case '+':
                result = Number(a) + Number(b);
                break;
            case '-':
                result = Number(a) - Number(b);
                break;
            case '^':
                result = Number(a) ** Number(b);
                break;
            default:
                break;
        };
    fullOp = result.toString();
    showNumber(fullOp);       
};

function deleteAll(){
    fullOp = '';
    result = 0;
    showNumber(fullOp);
};

function deleteLast(){
    fullOp = fullOp.slice(0, -1); // .slice(0, -1) --> incluye todos los caracteres desde el primero (0) hasta el penúltimo (-1)
    showNumber(fullOp);
};

function showNumber(n) {
    document.getElementById("screen").innerText = n;
    document.getElementById("history").innerText = history + " = " + result;
};