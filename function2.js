function verify() {
    console.log("a");
    let a = parseInt(elementA.innerText);
    console.log(a);


    let pos, neg, zero
    if (a < 0) {
    neg = a;
    }
    if (a > 0) {
    pos = a;
    }
    if (a == 0) {
    zero = a;
    }

    if (a == neg) {
    result = "Число x - Отрицательное"
    document.getElementById("result").innerText = result;
    }
    if (a == pos) {
    result = "Число x - Положительное"
    document.getElementById("result").innerText = result;
    }
    if (a == zero) {
    result = "Число x - Равно нулю"
    document.getElementById("result").innerText = result;
    }
}
    const elementA = document.getElementById("a");
    const elementVerify = document.getElementById("verify");
    elementVerify.addEventListener('click', verify);