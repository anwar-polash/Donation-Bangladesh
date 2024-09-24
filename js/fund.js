function getElementById(id) {
  return document.getElementById(id);
}
// noakhali donation calculation
const noakhaliDonationButton = document.getElementById("noakhali-donation-btn");
noakhaliDonationButton.addEventListener("click", function (event) {
  event.preventDefault();
  // main account
  const mainAccount = document.getElementById("main-account").innerText;
  mainAccountEl = parseFloat(mainAccount);
  // noakhali donation account
  const noakhaliDonationAccount = document.getElementById(
    "noakhali-donation-account"
  ).innerText;
  noakhaliDonationAccountEl = parseFloat(noakhaliDonationAccount);
  // noakhali donation input
  const noakhaliDonationInput = document.getElementById(
    "noakhali-donation-input"
  ).value;
  noakhaliDonationInputEl = parseFloat(noakhaliDonationInput);
  if (
    noakhaliDonationInputEl === "" ||
    noakhaliDonationInputEl <= 0 ||
    noakhaliDonationInputEl >= mainAccountEl ||
    isNaN(noakhaliDonationInputEl)
  ) {
    alert("please input valid amount");
    return;
  }
  //donation amount separation form main account
  const newMainAccount = mainAccountEl - noakhaliDonationInputEl;
  document.getElementById("main-account").innerText = newMainAccount;
  // donation sum noakhali donation account
  const newNoakhaliAccount =
    noakhaliDonationInputEl + noakhaliDonationAccountEl;
  document.getElementById("noakhali-donation-account").innerText =
    newNoakhaliAccount;

  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-red p-5 rounded-md border border-solid border-indigo-500";
  historyItem.innerHTML = `
    <p>${newMainAccount.toFixed(2)}</p>
  `;
  const historyList = document.getElementById("history-list");
  historyList.insertBefore(historyList, historyItem.firstChild);
});

// ===============
// feni donate calculation
const feniDonateButton = document.getElementById("feni-donate-btn");
feniDonateButton.addEventListener("click", function (event) {
  event.preventDefault();
  // main account
  const mainAccount = document.getElementById("main-account").innerText;
  mainAccountEl = parseFloat(mainAccount);
  // feni donation account
  const feniDonateAccount = document.getElementById(
    "feni-doante-account"
  ).innerText;
  feniDonateAccountEl = parseFloat(feniDonateAccount);
  //feni donation input
  const feniDonationInput = document.getElementById("feni-donate-input").value;
  feniDonationInputEl = parseFloat(feniDonationInput);
  if (
    feniDonationInputEl === "" ||
    feniDonationInputEl <= 0 ||
    feniDonationInputEl >= mainAccountEl ||
    isNaN(feniDonationInputEl)
  ) {
    alert("please input valid amount");
    return;
  }
  // feni donation amount separation form main account
  const newMainAccount = mainAccount - feniDonationInputEl;
  document.getElementById("main-account").innerText = newMainAccount;
  // feni donation amount add feni donation account
  const newFeniAccount = feniDonationInputEl + feniDonateAccountEl;
  document.getElementById("feni-doante-account").innerText = newFeniAccount;
  feniDonationInputEl.value = "";
});
// ===============
//injure donation calculation
const injureDonateButton = document.getElementById("injure-donate-btn");
injureDonateButton.addEventListener("click", function (event) {
  event.preventDefault();
  //  main account
  const mainAccount = document.getElementById("main-account").innerText;
  mainAccountEl = parseFloat(mainAccount);
  // injure donation account
  const injureDonationAccount = document.getElementById(
    "injure-donate-account"
  ).innerText;
  injureDonationAccountEl = parseFloat(injureDonationAccount);
  // injure donation input
  const injureInput = document.getElementById("injure-donate-input").value;
  injureInputEl = parseFloat(injureInput);
  if (
    injureInputEl === "" ||
    injureInputEl <= 0 ||
    injureInputEl >= mainAccountEl ||
    isNaN(injureInputEl)
  ) {
    alert("please input valid number");
    return;
  }
  // donation amount add injure donation account
  const newInjureAccount = injureInputEl + injureDonationAccountEl;
  document.getElementById("injure-donate-account").innerText = newInjureAccount;
  // injure donation amount separation from main account
  const newMainAccount = mainAccountEl - injureInputEl;
  document.getElementById("main-account").innerText = newMainAccount;
});
// =============
//  history button
const historyButton = document.getElementById("history-tab");
historyButton.addEventListener("click", function (event) {
  event.preventDefault();
  historyButton.classList.add("bg-[#B4F461]");
  const donationButton = document.getElementById("donation-tab");
  donationButton.classList.remove("bg-[#B4F461]");
});
// donation button
const donationButton = document.getElementById("donation-tab");
donationButton.addEventListener("click", function (event) {
  event.preventDefault();
  donationButton.classList.add("bg-[#B4F461]");
  const historyButton = document.getElementById("history-tab");
  historyButton.classList.remove("bg-[#B4F461]");
});

// history add
