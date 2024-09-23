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
