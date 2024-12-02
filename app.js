const name_of = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const message = document.getElementById("message");

const formData = { name_of , email , address , message}
async function fetchForm() {
 const url = "https://sports-backend-client-u5lw.vercel.app/contact-us"   
 const res = await  fetch(url , {method: "POST" , headers: {"Content-Type": "application/json" ,
     body: JSON.stringify(formData) }})

 console.log(res);
}
