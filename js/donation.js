const historyButton = document.getElementById("history-tab");
historyButton.addEventListener("click", function (events) {
  historyButton.classList.add("bg-[#B4F461]", "text-[#111111]");
  const donationButton = document.getElementById("donation-tab");
  donationButton.classList.remove("bg-[#B4F461]");
});
const donationButton = document.getElementById("donation-tab");
donationButton.addEventListener("click", function () {
  donationButton.classList.add("bg-[#B4F461]");
  const historyButton = document.getElementById("history-tab");
  historyButton.classList.remove("bg-[#B4F461]");
});

function getElementById(id) {
  return document.getElementById(id);
}

function getInnerTextById(id) {
  return document.getElementById(id).innerText;
}

const noakhaliDonationButton = document.getElementById("noakhali-donation-btn");
noakhaliDonationButton.addEventListener("click", function () {
  const mainAccount = parseFloat(getInnerTextById("main-account"));
  const noakhaliDonationInput = getElementById("noakhali-donation-input");
  const noakhaliDonationAccount = parseFloat(
    getInnerTextById("noakhali-donation-account")
  );
  // input data
  const donationFundInput = noakhaliDonationInput.value;
  const donationAmount = parseFloat(donationFundInput);

  if (
    donationFundInput === "" ||
    donationAmount <= 0 ||
    donationAmount > mainAccount ||
    isNaN(donationAmount)
  ) {
    alert("Please enter valid donation amount");
    return;
  }
  const newMainBalance = mainAccount - donationAmount;
  document.getElementById("main-account").innerText = newMainBalance;
  console.log(newMainBalance);

  // donation money add
  const newDonationFund = noakhaliDonationAccount + donationAmount;
  document.getElementById("noakhali-donation-account").innerText =
    newDonationFund;

  noakhaliDonationInput.value = "";
});
