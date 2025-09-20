// 1. HTML에서 카운트다운 숫자가 표시될 요소를 가져옵니다.
const countdownElement = document.getElementById('countdown');
// 2. 카운트다운 시작 시간을 설정합니다 (10초).
let timeLeft = 10;

// 3. setInterval을 사용하여 1초마다 실행될 함수를 설정합니다.
const countdownInterval = setInterval(() => {
    // 4. 남은 시간을 1초 감소시킵니다.
    timeLeft--;
    // 5. HTML의 해당 요소에 남은 시간을 업데이트합니다.
    countdownElement.textContent = timeLeft;

    // 6. 남은 시간이 0이 되면 타이머를 중지합니다.
    if (timeLeft <= 0) {
        clearInterval(countdownInterval); // setInterval을 멈춥니다.
    }
}, 1000); // 1000ms = 1초 간격으로 실행합니다.
