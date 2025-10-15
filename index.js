// learn how to make sure the numbers are limited
// make sure the year is always subtracted by the current year before answering
// use the image to load the answers
// put the image and make it a button
//when the button is clicked let it affect the big 0

function calculateAge() {
  // 1️⃣ Get input values
  const day = Number(document.getElementById("DAY").value);
  const month = Number(document.getElementById("MONTH").value);
  const year = Number(document.getElementById("YEAR").value);

  // 2️⃣ Validation: make sure all fields are filled
  if (!day || !month || !year) {
    const errorMesasage = `Please enter a valid date of birth!`;
    showToast(errorMesasage);
    return;
  }

  if (day > 31 || month > 12 || year > new Date().getFullYear()) {
    // alert("Please enter a valid date of birth!");
    const birthDateErrorMessage = `Please enter a valid date of birth!`;
    showToast(birthDateErrorMessage);
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  // 3️⃣ Prevent future dates
  if (birthDate > today) {
    // alert("Date of birth cannot be in the future!");
    const future = `Date of birth cannot be in the future!`;
    showToast(future);
    return;
  }

  // 4️⃣ Calculate difference
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // 5️⃣ Adjust negatives (for months and days)
  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // 6️⃣ Display result
  const boldSection = document.querySelector(".bold");
  boldSection.innerHTML = `
    <h1><span class="zero">${ageYears}</span> years</h1>
    <h1><span class="zero">${ageMonths}</span> months</h1>
    <h1><span class="zero">${ageDays}</span> days</h1>
  `;
}

function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top", // top or bottom
    position: "center", // left, center or right
    // backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
    stopOnFocus: true,
  }).showToast();
}
