const inpForm = document.querySelector("#inp-form");
const purchasePrice = document.querySelector("#purchase-price");
const stockQuan = document.querySelector("#stock-quan");
const currenPrice = document.querySelector("#current-price");
const output = document.querySelector("#output");
const outputDiv = document.querySelector("#output-div");

inpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let pp = purchasePrice.value;
  let sq = stockQuan.value;
  let cp = currenPrice.value;
  let profitPerc = ((cp - pp) / pp) * 100;
  let profitPrice = (cp - pp) * sq;
  outputDiv.style.display = "block";
  if (profitPerc < 0) {
    output.innerText = `You lost ${abs(profitPerc)}%. Your total loss is ₹${abs(
      profitPrice
    )}.`;
  } else {
    output.innerText = `You gained ${profitPerc}%. Your total profit is ₹${profitPrice}.`;
  }
});
