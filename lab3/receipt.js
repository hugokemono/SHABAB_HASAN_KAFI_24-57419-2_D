let name = localStorage.getItem("name");

let books = JSON.parse(
    localStorage.getItem("books")
);

let result = "Name: " + name + "<br>";

result += "Books:<br>";

for (let i = 0; i < books.length; i++) {

    result += books[i] + "<br>";

}

let total = books.length * 200;

result += "Total Deposit: " + total + " Taka";

document.getElementById("receipt").innerHTML = result;



function goBack() {

    window.location.href = "index.html";

}