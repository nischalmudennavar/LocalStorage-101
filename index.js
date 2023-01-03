const input = document.querySelector("input");
const h2 = document.querySelector("#value");
h2.innerHTML = localStorage.getItem("name");

// without local storage (refreshing the page will reset the value)

// input.addEventListener("keyup", function (event) {
//   h2.innerHTML = input.value;
// });

// with local storage (refreshing the page will keep the value)

input.addEventListener("keyup", displayValue);

function displayValue() {
  localStorage.setItem("name", input.value);
  h2.innerHTML = localStorage.getItem("name");
}

// clear local storage
var clear = document.querySelector(".clearStorage");
clear.addEventListener("click", function () {
  localStorage.removeItem("name");
  h2.innerHTML = "";
  alert("Local Storage Cleared 🪗");
});
