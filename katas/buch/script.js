const contacts = [
  {
    firstName: "Max",
    lastName: "Mustermann",
    email: "max.mustermann@javascripthandbuch.de",
  },
  {
    firstName: "Moriz",
    lastName: "Mustermann",
    email: "moriz.mustermann@javascripthandbuch.de",
  },
  {
    firstName: "Peter",
    lastName: "Mustermann",
    email: "peter.mustermann@javascripthandbuch.de",
  },
];

const element = document.getElementById("home");
const i = 5;
const condition = i > 0;
element.classList.toggle("active", condition);
console.log(element.classList);

const table = document.querySelector("table");

/* console.log(Object.getPrototypeOf("table"));
console.log(table.caption);
console.log(table.tHead);
console.log(table.tBodies);
console.log(table.rows);
console.log(table.tFoot); */

/* Schneller */
const newRow = table.insertRow(1);
const newCellFirstName = newRow.insertCell(0);
newCellFirstName.textContent = "Bob";
const newCellLastName = newRow.insertCell(1);
newCellLastName.textContent = "Mustermann";
const newCellEmail = newRow.insertCell(2);
newCellEmail.textContent = "bobo.mustermann@mail.de";

/* Langsamer */
/* function createTable() {
  const tableBody = document.querySelector("#contact-table tbody");
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    const tableRow = document.createElement("tr");

    const tableCellFirstName = document.createElement("td");
    const firstName = document.createTextNode(contact.firstName);
    tableCellFirstName.appendChild(firstName);

    const tableCellLastName = document.createElement("td");
    const lastName = document.createTextNode(contact.lastName);
    tableCellLastName.appendChild(lastName);

    const tableCellEmail = document.createElement("td");
    const email = document.createTextNode(contact.email);
    tableCellEmail.appendChild(email);

    tableRow.appendChild(tableCellFirstName);
    tableRow.appendChild(tableCellLastName);
    tableRow.appendChild(tableCellEmail);
    tableBody.appendChild(tableRow);
   
  } 
} */
