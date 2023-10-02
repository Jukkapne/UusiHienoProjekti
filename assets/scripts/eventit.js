const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Event bubbling
// grandparent.addEventListener('click', (e) => {
//     console.log("grandparentista");
// });

// parent.addEventListener('click', (e) => {
//     console.log("parentista");
// });

// child.addEventListener('click', (e) => {
//     console.log("lapsesta");
// });

// document.addEventListener('click', (e) => {
//     console.log("documentista");
// });


//Event capturing

grandparent.addEventListener('click', (e) => {
    console.log("grandparentista capture");
}, {capture: true});

grandparent.addEventListener('click', (e) => {
    console.log("grandparentista bubble");
});

// parent.addEventListener('click', (e) => {
//     console.log("parentista capture");
// }, {capture: true});

// parent.addEventListener('click', (e) => {
//     console.log("parentista bubble");
// });

child.addEventListener('click', (e) => {
    console.log("childista capture");
}, {capture: true});

child.addEventListener('click', (e) => {
    console.log("childista bubble");
});




// Event bubbling
// grandparent.addEventListener('click', (e) => {
//     console.log("grandparentista");
// },{once: true});

// parent.addEventListener('click', (e) => {
//     console.log("parentista");
// });

// parent.addEventListener('click', tulostaMoi);

// setTimeout(() => {
//     parent.removeEventListener('click', tulostaMoi);
// }, 9000);

// child.addEventListener('click', (e) => {
//     console.log("lapsesta");
// });

// document.addEventListener('click', (e) => {
//     console.log("documentista");
// });

// function tulostaMoi() {
//     console.log("moi");
// }

//create new div element
// const newDiv = document.createElement('div');
// newDiv.style.width = '100px';
// newDiv.style.height = '100px';
// newDiv.style.backgroundColor = 'red';
// document.body.appendChild(newDiv);




