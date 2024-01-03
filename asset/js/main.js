function result() {
  let type = document.getElementById('type').value
  var amount = document.getElementById('amount').value
  var year = document.getElementById('year').value
  switch (type) {
    case "home":
      if (amount == null || year == null) {
        document.getElementById("rs").innerHTML = "Enter Valid Amount"
        console.log('Enter Valid Amount')
      } else {
        var value = ("Your amount:" + (amount * year) * 7 / 100)
        document.getElementById("rs").innerHTML = value
        console.log((amount * year) * 7 / 100)
      }
      break;
    case "car":
      if (amount == "null" || year == "null") {
        document.getElementById("rs").innerHTML = "Enter Valid Amount"
        console.log('Enter Valid Amount')
      } else {
        var value = ("Your amount:" + (amount * year) * 11 / 100)
        document.getElementById("rs").innerHTML = value
        console.log((amount * year) * 11 / 100)
      }
      break;
    case "persnoal":
      if (amount == "" || year == "") {
        document.getElementById("rs").innerHTML = "Enter Valid Amount"
        console.log('Enter Valid Amount')
      } else {
        var value = ("Your amount:" + (amount * year) * 18 / 100)
        document.getElementById("rs").innerHTML = value
        console.log((amount * year) * 18 / 100)
      }
      break;
    default:
      document.getElementById("rs").innerHTML = "enter Valid option"
      console.log('Enter Valid Option')
  }
}
const slider = document.getElementById("amount");
const output = document.getElementById("r-num");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}
const slider1 = document.getElementById("year");
const output1 = document.getElementById("g-num");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
  output1.innerHTML = this.value;
}

