function getElementById(id) {
  return document.getElementById(id);
}
function getInnerTextById(id) {
  return document.getElementById(id).innerText;
}
// noakhali donation calculation
const noakhaliDonationButton = document.getElementById("noakhali-donation-btn");
noakhaliDonationButton.addEventListener("click", function (event) {
  event.preventDefault();
  // main account
  const mainAccount = getInnerTextById("main-account");
  const mainAccountEl = parseFloat(mainAccount);
  // noakhali donation account
  const noakhaliDonationAccount = getInnerTextById("noakhali-donation-account");
  const noakhaliDonationAccountEl = parseFloat(noakhaliDonationAccount);
  // noakhali donation input
  const noakhaliDonationInput = document.getElementById(
    "noakhali-donation-input"
  ).value;
  const noakhaliDonationInputEl = parseFloat(noakhaliDonationInput);
  if (
    noakhaliDonationInputEl === "" ||
    noakhaliDonationInputEl <= 0 ||
    noakhaliDonationInputEl > mainAccountEl ||
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

  // add history
  const nkTitle = getInnerTextById("nk-title");
  const historyContainer = getElementById("history-section");
  const historyItem = document.createElement("div");
  historyItem.classList.add(
    "p-8",
    "border",
    "border-solid",
    "border-[#111]/20",
    "shadow-md",
    "rounded-2xl"
  );
  historyItem.innerHTML = `
   <h2 class="font-bold text-[#111] text-xl">${noakhaliDonationInputEl} TK, ${nkTitle} </h2>
  <p class="mt-4 text-base font-light text-[#111]/70">Date: ${new Date().toLocaleString()}</p>
  `;
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  // clear input
  getElementById("noakhali-donation-input").value = "";

  // modal
  getElementById("confirm-modal").classList.add("modal-open");
  getElementById("close-modal-btn").addEventListener("click", function () {
    getElementById("confirm-modal").classList.remove("modal-open");
  });
});

// ===============
// feni donate calculation
const feniDonateButton = getElementById("feni-donate-btn");
feniDonateButton.addEventListener("click", function () {
  // main account
  const mainAccount = getInnerTextById("main-account");
  const mainAccountEl = parseFloat(mainAccount);
  // feni donation account
  const feniDonateAccount = getInnerTextById("feni-doante-account");
  const feniDonateAccountEl = parseFloat(feniDonateAccount);
  //feni donation input
  const feniDonationInput = document.getElementById("feni-donate-input").value;
  const feniDonationInputEl = parseFloat(feniDonationInput);
  if (
    feniDonationInputEl === "" ||
    feniDonationInputEl <= 0 ||
    feniDonationInputEl > mainAccountEl ||
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

  // add history
  const fnTitle = getInnerTextById("fn-title");
  const historyContainer = getElementById("history-section");
  const historyItem = document.createElement("div");
  historyItem.classList.add(
    "p-8",
    "border",
    "border-solid",
    "border-[#111]/20",
    "shadow-md",
    "rounded-2xl"
  );
  historyItem.innerHTML = `
    <h2 class="font-bold text-[#111] text-xl">${feniDonationInputEl} TK, ${fnTitle} </h2>
   <p class="mt-4 text-base font-light text-[#111]/70">Date: ${new Date().toLocaleString()}</p>
   `;
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  // clear input
  getElementById("feni-donate-input").value = "";

  // modal
  getElementById("confirm-modal").classList.add("modal-open");
  getElementById("close-modal-btn").addEventListener("click", function () {
    getElementById("confirm-modal").classList.remove("modal-open");
  });
});
// ===============
//injure donation calculation
const injureDonateButton = getElementById("injure-donate-btn");
injureDonateButton.addEventListener("click", function () {
  //  main account
  const mainAccount = getInnerTextById("main-account");
  const mainAccountEl = parseFloat(mainAccount);
  // injure donation account
  const injureDonationAccount = getInnerTextById("injure-donate-account");
  const injureDonationAccountEl = parseFloat(injureDonationAccount);
  // injure donation input
  const injureInput = document.getElementById("injure-donate-input").value;
  const injureInputEl = parseFloat(injureInput);
  if (
    injureInputEl === "" ||
    injureInputEl <= 0 ||
    injureInputEl > mainAccountEl ||
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

  // add history
  const injTitle = getInnerTextById("inj-title");
  const historyContainer = getElementById("history-section");
  const historyItem = document.createElement("div");
  historyItem.classList.add(
    "p-8",
    "border",
    "border-solid",
    "border-[#111]/20",
    "shadow-md",
    "rounded-2xl"
  );
  historyItem.innerHTML = `
     <h2 class="font-bold text-[#111] text-xl">${injureInputEl} TK, ${injTitle} </h2>
    <p class="mt-4 text-base font-light text-[#111]/70">Date: ${new Date().toLocaleString()}</p>
    `;
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  // clear input
  getElementById("injure-donate-input").value = "";

  // modal
  getElementById("confirm-modal").classList.add("modal-open");
  getElementById("close-modal-btn").addEventListener("click", function () {
    getElementById("confirm-modal").classList.remove("modal-open");
  });
});
// =============
//  history button
const historyButton = document.getElementById("history-tab");
historyButton.addEventListener("click", function (event) {
  event.preventDefault();
  historyButton.classList.add("bg-[#B4F461]");
  const donationButton = document.getElementById("donation-tab");
  donationButton.classList.remove("bg-[#B4F461]");
  getElementById("history-section").classList.remove("hidden");
  getElementById("donation-section").classList.add("hidden");
});
// donation button
const donationButton = document.getElementById("donation-tab");
donationButton.addEventListener("click", function (event) {
  event.preventDefault();
  donationButton.classList.add("bg-[#B4F461]");
  const historyButton = document.getElementById("history-tab");
  historyButton.classList.remove("bg-[#B4F461]");
  getElementById("history-section").classList.add("hidden");
  getElementById("donation-section").classList.remove("hidden");
});
