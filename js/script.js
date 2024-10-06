function editInfo() {
    let elements = document.querySelectorAll('.value, .value-email, .address');
    elements.forEach(element => {
        element.contentEditable = true;
    });
    document.getElementById('anrede-dropdown').style.display = 'inline-block';
    document.getElementById('geschlecht-dropdown').style.display = 'inline-block';
    document.getElementById('anrede').style.display = 'none';
    document.getElementById('geschlecht').style.display = 'none';
    document.getElementById('anrede-dropdown').value = document.getElementById('anrede').innerText;
    document.getElementById('geschlecht-dropdown').value = document.getElementById('geschlecht').innerText;
    let container = document.querySelector('.container_iN');
    container.classList.add('edit-mode');
}

function saveInfo() {
    let elements = document.querySelectorAll('.value, .value-email, .address');
    elements.forEach(element => {
        element.contentEditable = false;
    });
    document.getElementById('anrede').innerText = document.getElementById('anrede-dropdown').value;
    document.getElementById('geschlecht').innerText = document.getElementById('geschlecht-dropdown').value;
    document.getElementById('anrede-dropdown').style.display = 'none';
    document.getElementById('geschlecht-dropdown').style.display = 'none';
    document.getElementById('anrede').style.display = 'inline-block';
    document.getElementById('geschlecht').style.display = 'inline-block';
    let container = document.querySelector('.container_iN');
    container.classList.remove('edit-mode');

    alert('Änderungen gespeichert!');
}

/* ---------------------------------------------------Ubersicht Veträge----------------------------------------------------- */
function openForm() {
            document.getElementById("formPopup").style.display = "block";
        }

        function closeForm() {
            document.getElementById("formPopup").style.display = "none";
        }

        function addContract() {
            const insurance = document.getElementById("insurance").value;
            const id = document.getElementById("id").value;
            const date = document.getElementById("date").value;

            if (insurance && id && date) {
                const table = document.getElementById("contractTable");
                const row = table.insertRow(-1);
                row.insertCell(0).innerText = insurance;
                row.insertCell(1).innerText = id;
                row.insertCell(2).innerText = date;
                row.insertCell(3).innerHTML = '<button class="button delete-button" onclick="deleteRow(this)">🗑️</button>';

                closeForm();
                // Clear the input fields
                document.getElementById("insurance").value = '';
                document.getElementById("id").value = '';
                document.getElementById("date").value = '';
            } else {
                alert("Bitte alle Felder ausfüllen!");
            }
        }

        function deleteRow(button) {
            const row = button.parentElement.parentElement;
            row.parentElement.removeChild(row);
        }

/* ---------------------------------------------------Ubersicht Veträge----------------------------------------------------- */

/* ---------------------------------------------------Ubersicht Schäden ----------------------------------------------------- */
        let currentInsurance = '';

        function toggleAccordion(header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.style.transform = 'rotate(45deg)';
            } else {
                content.style.display = 'block';
                icon.style.transform = 'rotate(225deg)';
            }

            // Toggle active class for rotation
            header.classList.toggle('active');
        }

        function openForm(insurance) {
            currentInsurance = insurance;
            document.getElementById("formPopup").style.display = "block";
        }

        function closeForm() {
            document.getElementById("formPopup").style.display = "none";
            // Clear the input fields
            document.getElementById("task").value = '';
            document.getElementById("taskDate").value = '';
        }

        function addTask() {
            const taskDescription = document.getElementById("task").value;
            const taskDate = document.getElementById("taskDate").value;

            if (taskDescription && taskDate) {
                const taskTable = document.getElementById(`tasks_${currentInsurance}`).getElementsByTagName('tbody')[0];
                const newRow = taskTable.insertRow();
                newRow.innerHTML = `
                    <td>${taskDescription}</td>
                    <td>${taskDate}</td>
                    <td><button class="button" onclick="deleteTask(this)">🗑️</button></td>
                `;
                closeForm();
            } else {
                alert("Bitte alle Felder ausfüllen!");
            }
        }

        function deleteTask(button) {
            const row = button.parentElement.parentElement;
            row.parentElement.removeChild(row);
        }
/* ---------------------------------------------------Ubersicht Schäden ----------------------------------------------------- */

/* ---------------------------------------------------Inkasse/Exkasso ----------------------------------------------------- */
        function addNewRow() {
            const table = document.getElementById('inkassoTable').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow(); 
            const beschreibungCell = newRow.insertCell(0);
            const datumCell = newRow.insertCell(1);
            const betragCell = newRow.insertCell(2);
            const aktionenCell = newRow.insertCell(3);
            beschreibungCell.innerHTML = `<input type="text" placeholder="Beschreibung" style="width: 100%;">`;
            datumCell.innerHTML = `<input type="date" style="width: 100%;">`;
            betragCell.innerHTML = `<input type="number" placeholder="Betrag (€)" style="width: 100%;">`;
            aktionenCell.innerHTML = `<button class="icon-button save-button" onclick="saveRow(this)">💾</button>
                                      <button class="icon-button" onclick="deleteRow(this)">🗑️</button>`;
        }
        function saveRow(button) {
            const row = button.parentNode.parentNode;
            const beschreibung = row.cells[0].getElementsByTagName('input')[0].value;
            const datum = row.cells[1].getElementsByTagName('input')[0].value;
            let betrag = row.cells[2].getElementsByTagName('input')[0].value;

            if (beschreibung && datum && betrag) {
                betrag = parseFloat(betrag); 
                const betragClass = betrag < 0 ? 'negative-amount' : 'positive-amount';
                row.cells[0].innerHTML = beschreibung;
                row.cells[1].innerHTML = datum;
                row.cells[2].innerHTML = `${betrag.toFixed(2)} €`; 
                row.cells[2].className = betragClass; 
                row.cells[3].innerHTML = `<button class="icon-button" onclick="deleteRow(this)">🗑️</button>`;
            } else {
                alert('Bitte alle Felder ausfüllen!');
            }
        }
        function deleteRow(button) {
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
/* ---------------------------------------------------Inkasse/Exkasso ----------------------------------------------------- */

/* ---------------------------------------------------Aktivitats und kontaktverlauf ----------------------------------------------------- */
        function toggleInfo() {
            var infoPopup = document.getElementById('infoPopup');
            if (infoPopup.style.display === 'none' || infoPopup.style.display === '') {
                infoPopup.style.display = 'block';
            } else {
                infoPopup.style.display = 'none';
            }
        }

/* ---------------------------------------------------Aktivitats und kontaktverlauf ----------------------------------------------------- */