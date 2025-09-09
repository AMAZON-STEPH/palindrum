const body = document.body;
const heading = document.createElement("h3");
body.appendChild(heading);
const form = document.createElement("form");
body.appendChild(form);
const theinput = document.createElement("input");
form.appendChild(theinput);
const btn = document.createElement("button");
form.appendChild(btn);
const display = document.createElement("p");
form.appendChild(display);
const font = document.createElement("span")
form.appendChild(font)

heading.innerHTML = "Palindrum check";
btn.type = "button";
btn.innerHTML = "check";
theinput.type = "text";
theinput.placeholder = "your palindrum"

btn.addEventListener("click", () => {
  const check = theinput.value.trim().toLowerCase();
  const changed = check.split("").reverse().join("");

  
  if (check && check === changed) {
    display.innerHTML = `
    Wow! ${theinput.value} is a palindrum 
   `;
     font.innerHTML = `
      <i class="fas fa-thumbs-up" style="color:green;"></i>`
  } else if(check === ""){
      display.innerHTML = "At least three letters"
      font.innerHTML = `
      <i class="far fa-smile-beam" style="color:peru;"></i>`
  }else {
    display.innerHTML = `
     opps! ${theinput.value} is not a palindrum
     `;
     font.innerHTML = `
      <i class="fas fa-thumbs-down" style="color:red;"></i>`
  }
});

// replace(/[^a-z0-9]/g, "")
