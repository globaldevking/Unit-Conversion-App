// // Javascript codes for Unit Conversion

// function startConversion() {
//   // lets get input elements value;
//   let inputEl = document.getElementById("input-el").value;

//   let unitValue = inputEl;

//   // Length (Meter to Feet conversion);
//   let meterEl = document.getElementById("meter-el");
//   meterEl.textContent =
//     unitValue +
//     " meters = " +
//     (unitValue * 3.28084).toFixed(2) +
//     " Feets | " +
//     unitValue +
//     " Feets = " +
//     (unitValue * 0.3048).toFixed(2) +
//     " meters";

//   // Volume (Liters to Gallon conversion)
//   let volumeEl = document.getElementById("volume-el");
//   volumeEl.textContent =
//     unitValue +
//     " Liters = " +
//     (unitValue * 0.267).toFixed(2) +
//     " Gallons | " +
//     unitValue +
//     " Gallons = " +
//     (unitValue * 3.785).toFixed(2) +
//     " Liters";

//   // Mass (Kilograms to Pounds Conversion);
//   let massEl = document.getElementById("mass-el");
//   massEl.textContent =
//     unitValue +
//     " Kilograms = " +
//     (unitValue * 2.20462).toFixed(2) +
//     " Pounds | " +
//     unitValue +
//     " Pounds = " +
//     (unitValue * 0.453592).toFixed(2) +
//     " Kilograms";
// }


function startConversion() {
    let inputEl = document.getElementById("input-el").value;
    let unitVal = inputEl;

    // get the Meter element
    let meterEl = document.getElementById("meter-el");
    meterEl.textContent = unitVal + " Meters = " +( unitVal * 3.2345 ).toFixed(2) + " Feets |" + unitVal + " Feets " +  unitVal * 0.23453 + " Meters";

    // get the Volume element
    let volumeEl = document.getElementById('volume-el');
    volumeEl.textContent = unitVal + " Liters = " + (unitVal * 1.2354 ).toFixed(3) + " Gallons | " + unitVal + " Gallons " + (unitVal * 0.12343 ).toFixed(3) + " Liters";

    // get Mass element
    let massEl = document.getElementById("mass-el");
    massEl.textContent = unitVal + " Kilograms = " + (unitVal * 2.14432).toFixed(3) + " Pounds | " + unitVal + " Pounds = " + (unitVal * 3.5436).toFixed(3) + " Kilograms";
}