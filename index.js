const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let intervalId;

// Write an implementation of createTimerAnimator
// which will animate timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    // Clear the previous timer interval if there is one
    clearInterval(intervalId);

    let remainingSeconds = seconds;

     // Start a new timer interval that updates the timer element every second
    intervalId = setInterval(() => {

      // Calculate the hours, minutes, and seconds from the remaining seconds
      let hours = Math.floor(remainingSeconds / 3600);
      let minutes = Math.floor((remainingSeconds % 3600) / 60);
      let secs = remainingSeconds % 60;

      // Pad the hours, minutes, and seconds with a leading zero if necessary
      hours = hours.toString().padStart(2, '0');
      minutes = minutes.toString().padStart(2, '0');
      secs = secs.toString().padStart(2, '0');

      // Update the timer element with the formatted time
      timerEl.textContent = `${hours}:${minutes}:${secs}`;

       // Decrement the remaining seconds by 1
      remainingSeconds--;

         // If there are no remaining seconds, clear the interval to stop the timer
      if (remainingSeconds < 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Clear input so that the value
  // only numbers left
  inputEl.value = inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
