let container = document.getElementsByClassName('container')[0];
let frame = document.getElementsByClassName('frame')[0];
let btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', (e) => {
    /* e.stopPropagation() */
    console.log(e.target);
})
frame.addEventListener('click', (e) => console.log(e.target))
container.addEventListener('click', (e) => console.log(e.target));

/* let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Posle dve sekunde");
        resolve("vrednost resolve iz promise");
    }, 2000)
})
console.log(promise);
let promise_2 = promise.then((passed_value) => {
    console.log(promise);
    let promise_3 = new Promise((resolve, reject) => {
        console.log(promise_2)
        setTimeout(() => {
            console.log(passed_value);
            resolve("vrednost iz promise_3")
        }, 2000)
    })

    return promise_3
})
console.log(promise_2);
let promise_4 = promise_2.then((passed_value) => {
    console.log(passed_value)
}) */

/* let promise = fetch('https://www.rts.rs/page/stories/ci/story/1/politika/5135968/u-predsednistvo-stiglo-pismo-koje-su-potpisali-makron-solc-i-melonijeva.html');
let promise_2 = promise.then((res) => {
    console.log(res);
    return res.text();
})
let promise_3 = promise_2.then((res_body) => {
    console.log(res_body)
}) */

/* let promise = fetch('https://bit.ly/3KG2K3G'); */
fetch('https://github.com/wesbos', {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})
    .then((res_header) => {
        return res_header.text()
    } )
    .then((res_body) => console.log(res_body))
