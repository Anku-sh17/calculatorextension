document.getElementById("Calculate").addEventListener("click", function () {
  var qty = parseFloat(document.getElementById("qnty").value);
  var selectedValue = 1;
  document.getElementById("input").addEventListener("change", function () {
    // Get the selected value
    selectedValue = this.value;
  });

  // Calculate nutritional values
  var calories = 0;
  var energy = 0;
  var totalfat = 0;
  var saturatedfat = 0;
  var transfat = 0;
  var cholestrol = 0;
  var sodium = 0;
  var totalcarbs = 0;
  var dietaryfib = 0;
  var sugars = 0;
  var protien = 0;
  var calcium = 0;
  var iron = 0;
  // Add more calculations for other nutrients here
  if (selectedValue == 1) {
    calories = 197 * qty;
    energy = 823 * qty;
    totalfat = 15 * qty;
    saturatedfat = 4 * qty;
    cholestrol = 426 * qty;
    sodium = 146 * qty;
    totalcarbs = (1.5 * qty).toFixed(2);
    dietaryfib = 0 * qty;
    sugars = 1.6 * qty;
    protien = 13.5 * qty;
  }

  // Update the table with the calculated values
  document.getElementById("calories").textContent = calories;
  document.getElementById("energy").textContent = energy;
  document.getElementById("totalfat").textContent = totalfat;
  document.getElementById("satfat").textContent = saturatedfat;
  document.getElementById("transfat").textContent = transfat;
  document.getElementById("cholestrol").textContent = cholestrol;
  document.getElementById("sodium").textContent = sodium;
  document.getElementById("totalcarbs").textContent = totalcarbs;
  document.getElementById("Diet").textContent = dietaryfib;
  document.getElementById("sugars").textContent = sugars;
  document.getElementById("protien").textContent = protien;
  document.getElementById("calcium").textContent = calcium;
  document.getElementById("iron").textContent = iron;
});

// function calculate() {
//   // Get user input values

//   // Update more table cells for other nutrients here
// }
