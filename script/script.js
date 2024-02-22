const allBtn = document.getElementsByClassName("more");
let count = 40;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count - 1;
    const seat = e.target.innerText;
    const classs = "Economic";
    const price = 550;

    const seatClassPrice = document.getElementById("seat-class-price");

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = seat;
    const p2 = document.createElement("p2");
    p2.innerText = classs;
    const p3 = document.createElement("p3");
    p3.innerText = price;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    seatClassPrice.appendChild(li);

    totalCost("total-price", parseInt(price));
    updateGrandTotal();
    setInnerText("seat-count", count);
  })
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function updateGrandTotal(control) {
  const previousTotal = document.getElementById("total-price").innerText;
  const convertedTotal = parseInt(previousTotal);
  const couponCode = document.getElementById("coupon-code").value;
  if (control) {
    if (couponCode == "Couple 20") {
      const discount = convertedTotal * 0.2;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
    }
    else if (couponCode == "NEW15") {
      const discount = convertedTotal * 0.15;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
    }
    else {
      alert("Invalid Coupon Code No Discount");
      return;
    }
  } else {
    document.getElementById("grand-total").innerText = convertedTotal;
  }
}

function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const convertTotalCost = parseInt(totalCost);
  const sum = convertTotalCost + parseInt(value);
  setInnerText("total-price", sum);
}


const nextBtn = document.getElementById('nextBtn');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

nextBtn.addEventListener('click', function () {
  section1.classList.add('hidden');
  section2.classList.remove('hidden');
});