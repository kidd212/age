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
    alert("Please enter a valid date of birth!");
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  // 3️⃣ Prevent future dates
  if (birthDate > today) {
    alert("Date of birth cannot be in the future!");
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
    <h1>${ageYears} years</h1>
    <h1>${ageMonths} months</h1>
    <h1>${ageDays} days</h1>
  `;
}
