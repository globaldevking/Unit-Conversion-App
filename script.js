// Javascript codes for Unit Conversion

function startConversion() {
  // lets get input elements value;
  let inputEl = document.getElementById("input-el").value;

  let unitValue = inputEl;

  // Length (Meter to Feet conversion);
  let meterEl = document.getElementById("meter-el");
  meterEl.textContent =
    unitValue +
    " meters = " +
    (unitValue * 3.28084).toFixed(2) +
    " Feets | " +
    unitValue +
    " Feets = " +
    (unitValue * 0.3048).toFixed(2) +
    " meters";

  // Volume (Liters to Gallon conversion)
  let volumeEl = document.getElementById("volume-el");
  volumeEl.textContent =
    unitValue +
    " Liters = " +
    (unitValue * 0.267).toFixed(2) +
    " Gallons | " +
    unitValue +
    " Gallons = " +
    (unitValue * 3.785).toFixed(2) +
    " Liters";

  // Mass (Kilograms to Pounds Conversion);
  let massEl = document.getElementById("mass-el");
  massEl.textContent =
    unitValue +
    " Kilograms = " +
    (unitValue * 2.20462).toFixed(2) +
    " Pounds | " +
    unitValue +
    " Pounds = " +
    (unitValue * 0.453592).toFixed(2) +
    " Kilograms";
}
