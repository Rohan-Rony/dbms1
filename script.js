// Tab switching logic
const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;
    tabs.forEach(tab => {
      tab.classList.add("hidden");
      if (tab.id === target) tab.classList.remove("hidden");
    });
  });
});

// Add-to-table functionality with delete option
const forms = document.querySelectorAll("form");

forms.forEach(form => {
  const button = form.querySelector("button");
  const tbody = form.parentElement.querySelector("tbody");

  button.addEventListener("click", () => {
    const inputs = form.querySelectorAll("input");
    const row = document.createElement("tr");

    // Fill row with input values
    inputs.forEach(inp => {
      const cell = document.createElement("td");
      cell.textContent = inp.value.trim();
      row.appendChild(cell);
      inp.value = ""; // clear input
    });

    // Add delete button cell
    const actionCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      row.remove();
    });
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    // Append row to table
    tbody.appendChild(row);
  });
});



