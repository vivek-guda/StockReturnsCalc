const inpForm = document.querySelector("#inp-form");
const purchasePrice = document.querySelector("#purchase-price");
const stockQuan = document.querySelector("#stock-quan");
const currenPrice = document.querySelector("#current-price");
const output = document.querySelector("#output");
const outputDiv = document.querySelector("#output-div");
const container = document.querySelector("#container");

inpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  container.classList.remove("happy");
  container.classList.remove("sad");
  let pp = purchasePrice.value;
  let sq = stockQuan.value;
  let cp = currenPrice.value;
  let profitPerc = ((cp - pp) / pp) * 100;
  let profitPrice = (cp - pp) * sq;
  outputDiv.style.display = "block";
  console.log(profitPerc);
  if (profitPerc < 0) {
    output.innerText = `You lost ${-profitPerc}%. Your total loss is ₹${-profitPrice}. 😔`;
    if (profitPerc <= -50) {
      container.classList.add("sad");
    }
  } else {
    output.innerText = `You gained ${profitPerc}%. Your total profit is ₹${profitPrice}. 🎉`;
    if (profitPerc >= 50) {
      container.classList.add("happy");
    }
  }
});
