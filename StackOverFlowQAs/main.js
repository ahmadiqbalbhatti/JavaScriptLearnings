// -----------------------Input Fields --------------------------------//
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
let date = Date.now();

let data = [];

//------------------------------------NEW NUMBER---------------------------------------------------------------//
function newNumber() {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    let jsonObj = {
        id: date+randomNumber,
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
    };
    console.log(jsonObj)

    data.push(jsonObj);

    refresh(data);
}

//------------------------------------REFRESH---------------------------------------------------------------//
function refresh(data) {
    let s = `<table>`;
    // var date = Date.now();

    // console.log(date);
    data.forEach((x) => {
        s += `<tr data-id="${x.id}">
          <td>${x.name}</td>
          <td>${x.phoneNumber}</td>
          <td>${x.email}</td>
          <td><button class="deleteBtn"><i class="ri-delete-bin-4-line" onclick="deleteItem(${x.id})"></i></button></td>
      </tr>`;
    });
    s += `</table>`;

    document.getElementById('main').innerHTML = s;
    console.log(s);

    const  delBtn = document.querySelector(".deleteBtn");
    console.log(delBtn)
}
refresh(data);

//------------------------------------DELETE ITEM---------------------------------------------------------------//
function deleteItem(id) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            console.log(data[i].id)
            data.splice(i, 1);
            break;
        }
    }
    refresh(data);
}

// console.log(String(data[0]));
// console.log(data);
// console.log(String(data[0]));

// form.elements.name.value = '';
// form.elements.phoneNumber.value = '';
// form.elements.email.value = '';
