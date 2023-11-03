// fill in javascript code here
let Form = document.querySelector("form");
let Doctor = document.getElementById("name");
let DoctorID = document.getElementById("docID");
let Experience = document.getElementById("exp"); 
let specialization = document.getElementById("dept");
let EmailAddress = document.getElementById("email"); 
let MobileNumber = document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let array = [];

Form.addEventListener("submit", function (e) {
    e.preventDefault();
    let Data = {};
    Data.Doctor = Doctor.value;
    Data.DoctorID = DoctorID.value;
    Data.Experience= Experience.value; 
    Data.specialization = specialization.value;
    Data.Email = EmailAddress.value;
    Data.Mobile = MobileNumber.value;
    Data.Role = Role(Experience.value);
    array.push(Data);

    tbody.innerHTML = null;


    array.map((element) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let button = document.createElement("button");
        button.innerText="Delete";
        button.setAttribute("class", "btn")

        td1.innerText = element.Doctor;
        td2.innerText = element.DoctorID;
        td3.innerText = element.specialization; 
        td4.innerText = element.Experience;
        td5.innerText = element.Email;
        td6.innerText = element.Mobile;
        td7.innerText = Role(element.Experience); 

        td8.append(button);
        row.append(td1, td2, td3, td4, td5, td6, td7,td8);
        tbody.append(row);

        button.addEventListener('click', function(){
            deleteRow(row);
        })
    });

    Doctor.value = '';
    DoctorID.value = '';
    Experience.value = '';
    specialization.value = '';
    EmailAddress.value = '';
    MobileNumber.value = '';


});

function deleteRow(row) {
    row.remove();
}


function Role(exp) {
    if (exp > 5) {
        return "Senior";
    } else if (exp >= 2 && exp <= 5) {
        return "Junior";
    } else if (exp <= 1) {
        return "Fresher";
    }
}

