// const debounce = (fn, ms) => {
//   let timeout;
//   return function() {
//     const fnCall = () => {
//       fn.apply(this, arguments);
//     };
//     // setTimeout(fnCall, ms);
//     clearTimeout(timeout);
//     timeout = setTimeout(fnCall, ms);
//   };
// };

// function onChange(e) {
//   console.log(e.target.value);
// }

// onChange = debounce(onChange, 5000);

// document.getElementById("input").addEventListener("keyup", onChange);

// ________________________________________________________________________

// function throttle(func, ms) {
//   let isThrottled = false;
//   let savedArgs;
//   let savedThis;

//   function wrapper() {
//     if (isThrottled) {
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }
//     func.apply(this, arguments);
//     isThrottled = true;
//     setTimeout(() => {
//       isThrottled = false;
//     }, ms);
//     if (savedArgs) {
//       wrapper.apply(savedThis, savedArgs);
//       savedArgs = savedThis = null;
//     }
//   }

//   return wrapper;
// }

// function showDate() {
//   console.log(new Date());
// }

// showDate = throttle(showDate, 3000);
// setInterval(showDate, 1000);
