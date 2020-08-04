const myElement = document.getElementsByTagName('main')[0];

const mc = new Hammer(myElement);
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
mc.on('swipeleft', (e) => {
    e.target.style.backgroundColor = "yellow";
});
mc.on('swiperight', (e) => {
    e.target.style.backgroundColor = "green";
});
mc.on('swipedown', (e) => {
    console.log('test')
    e.target.style.backgroundColor = "blue";
});
mc.on('swipeup', (e) => {
       console.log('test')
        e.target.style.backgroundColor = "red";
});

//Correction 
// const element = document.querySelector("main");
// const mc = new Hammer(element);

// mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

// mc.on("swiperight swipeleft swipeup swipedown", (e) => {
//   switch (e.type) {
//     case "swiperight":
//       e.target.style.background = "blue";
//       break;
//     case "swipeleft":
//       e.target.style.background = "purple";
//       break;
//     case "swipeup":
//       e.target.style.background = "red";
//       break;
//     case "swipedown":
//       e.target.style.background = "yellow";
//       break;
//   }
// });

// mc.on("swiperight", (e) => {
//   e.target.style.background = "blue";
// });
// mc.on("swipeleft", (e) => {
//   e.target.style.background = "purple";
// });
// mc.on("swipeup", (e) => {
//   e.target.style.background = "red";
// });
// mc.on("swipedown", (e) => {
//   e.target.style.background = "yellow";
// });
