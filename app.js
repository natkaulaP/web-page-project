function apply() {
  let firstname = prompt(" What is your first name? ");
  let surename = prompt("What is your surename? ");
  let age = prompt("What is your age? ");
  let email = prompt("What is your email? ");

  if (age >= 18) {
    alert(
      "Hi " +
        firstname +
        " " +
        surename +
        " Thanks for joining , we be in contact !"
    );
  } else {
    alert("Sorry " + firstname + " " + surename + " you can 't join!");
  }
}
let change = document.querySelector("button");
change.addEventListener("click", apply);
