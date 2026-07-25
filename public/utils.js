let intervalId = null
let makeVisible = false
let liveClockEnabled = false
const hiddenDivEl = document.querySelector('.hiddenDiv')
const hiddenClockEl = document.querySelector('.hiddenClock')
const hiddenClockBtnEl = document.querySelector('.hiddenClockButton')

function formatTime(date) {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function toggleTimeVisibility() {
    makeVisible = !makeVisible

    const now = new Date()
    hiddenClockEl.innerText = formatTime(new Date())
    hiddenDivEl.style.opacity = makeVisible ? 1 : 0
}

function toggleLiveClock() {
    // if (intervalId !== null) {
    //     return;
    // }
    console.log('chekc')
    liveClockEnabled = !liveClockEnabled

    if (liveClockEnabled) {
        intervalId = setInterval(() => {
            hiddenClockEl.innerText = formatTime(new Date())
        }, 1000);
    } else {
        clearInterval(intervalId)
        intervalId = null
    }
}
