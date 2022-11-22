const billInput = document.getElementById('bill');
const customPercent = document.getElementById('custom');
const peopleCount = document.getElementById('people');
const button = document.getElementsByTagName("button");

const tipPerPerson = document.getElementById('perperson');
const totalBill = document.getElementById('total');

const resetBtn = document.getElementById('reset');

let tipPercent = 0;
const tipButtons = document.getElementsByClassName('tip');
for (let btn of tipButtons) {
    btn.addEventListener('click', function () {
      tipPercent = Number.parseInt(btn.textContent);
    });
  }

  $("button").click(function(){
    $("button").removeClass("active");
    $(this).addClass("active");
 });

  peopleCount.addEventListener('input', function(){
    if(peopleCount.value!== 0){
        if(customPercent.value !== ''){
            tipPercent = customPercent.value;
        }

        resetBtn.removeAttribute('disabled');
        resetBtn.style.background = 'hsl(172, 67%, 45%)';
        const billAmount = +billInput.value;
        const people = +peopleCount.value;

        const tip = (billAmount * tipPercent) / 100;
        const total = billAmount + tip;

        tipPerPerson.textContent = `$${(tip/people).toFixed(2)}`;
        totalBill.textContent = `$${(total/people).toFixed(2)}`;
    }
  });

  resetBtn.addEventListener('click', function(){
    billInput.value = customPercent.value = people.value = '';
    tipPerPerson.textContent = totalBill.textContent = '$0.00';
    tipPercent = 0;
    resetBtn.setAttribute('disabled', true);
    resetBtn.style.background = 'hsl(183, 64%, 25%)';
    $("button").removeClass("active");
  });