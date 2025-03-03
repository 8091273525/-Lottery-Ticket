function showTable() {
    const januaryTable = document.getElementById("january-table");
    const februaryTable = document.getElementById("february-table");
    const selectedMonth = document.getElementById("month").value;

    januaryTable.style.display = "none";
    februaryTable.style.display = "none";

    if (selectedMonth === "january") {
        januaryTable.style.display = "block";
    } else if (selectedMonth === "february") {
        februaryTable.style.display = "block";
    }
}