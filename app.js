let inputBill = document.querySelector("#input-bill");
let inputCash = document.querySelector("#input-cash");
const cashLabel = document.querySelector("#cash-label");
const btnNext = document.querySelector("#btn-next");
const btnCheck = document.querySelector("#btn-check");
const notesTable = document.querySelector("#notes-table");

btnNext.addEventListener("click", () => {
  if (Number(inputBill.value) > 0) {
    btnNext.style.display = "none";
    btnCheck.style.display = "block";
    inputCash.style.display = "block";
    cashLabel.style.display = "block";
  } else {
    notesTable.innerHTML = `<p class="message">Bill amount should be positive value!!</p>`;
  }
});
btnCheck.addEventListener("click", () => {
  if (inputCash.value !== "" && inputBill.value !== "")
    if (Number(inputCash.value) === Number(inputBill.value))
      notesTable.innerHTML = `<p class="message">You're all squared!!</p>`;
    else if (Number(inputCash.value) < 0 || Number(inputBill.value) < 0)
      notesTable.innerHTML = `<p class="message">Enter both fields with positive values!!</p>`;
    else if (Number(inputCash.value) > Number(inputBill.value)) {
      let returnChange = Number(inputCash.value) - Number(inputBill.value);
      let listDenomination = [2000, 500, 100, 20, 10, 5, 1];
      let listNumuberOfNotes = [];
      for (let i = 0; i < listDenomination.length; i++) {
        listNumuberOfNotes.push(Math.trunc(returnChange / listDenomination[i]));
        returnChange = returnChange % listDenomination[i];
      }
      returnChange = Number(inputCash.value) - Number(inputBill.value);
      notesTable.style.display = "block";
      notesTable.innerHTML = `
      <div class="container">
        <table class="notes-table">
          <caption>
            Return Change $${returnChange}
          </caption>
          <tr>
            <th>Number of notes</th>
            <td class="notes-returned">${listNumuberOfNotes[0]}</td>
            <td class="notes-returned">${listNumuberOfNotes[1]}</td>
            <td class="notes-returned">${listNumuberOfNotes[2]}</td>
            <td class="notes-returned">${listNumuberOfNotes[3]}</td>
            <td class="notes-returned">${listNumuberOfNotes[4]}</td>
            <td class="notes-returned">${listNumuberOfNotes[5]}</td>
            <td class="notes-returned">${listNumuberOfNotes[6]}</td>
          </tr>
          <tr>
            <th>Denomination</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    `;
    } else {
      notesTable.innerHTML = `<p class="message">You're short by $${Math.abs(
        Number(inputCash.value) - Number(inputBill.value)
      )}</p>`;
    }
});
