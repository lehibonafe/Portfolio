const btn = document.getElementById("button");

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  let params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("inputEmail").value,
    message: document.getElementById("inputMessage").value,
  };

  const serviceID = "service_ahj765h";
  const templateID = "template_2js2a5w";
  const public_key = "sRAQeU1PezObodF-0";

  emailjs.send(serviceID, templateID, params, public_key).then(
    () => {
      btn.value = "Submit";
      alert("Your message has been sent successfully");
      form.reset();
    },
    (err) => {
      btn.value = "Submit";
      alert(JSON.stringify(err));
    }
  );
});
