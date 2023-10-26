var examiners = document.querySelectorAll('.examiner');
var sumInput = document.querySelector('.Sum input');

var total = 0;

examiners.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value < 0) {
      input.value = 0
    } else if (input.value > 10) {
      input.value = 10
    }

    calculateTotal();
  });
});

const calculateTotal = () => {
  total = 0;
  examiners.forEach(function (input) {
    total += parseInt(input.value) || 0;
  });
  sumInput.value = total;
}