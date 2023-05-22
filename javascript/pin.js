function setCookie(pin) {
  // alert("called")
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  // document.cookie=`email=${email} ; ${expires}`
  document.cookie = `pin=${pin} ; ${expires}`;
  //   document.cookie = `token=${token} ; ${expires}`;
  // let navigate;
  // const params = new URLSearchParams(window.location.search);
  // for (const param of params) {
  //   navigate = param[0];
  // }
  // if (navigate) return window.location.replace(navigate);
  window.location.replace("/dashboard.html");
}

const handle_submitpin = async (data) => {
  try {
    document.querySelector("#next").innerHTML = "proccessing...";
    const response = await fetch("http://localhost:3000/api/user/verifypin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#next").innerHTML = "try again";
      return;
    }
    document.querySelector("#next").innerHTML = "success";
    setCookie(result.message.pin);
    // window.location.replace("/dashboard.html");
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#next").innerHTML = "try again";
  }
};

document.querySelector("#next").onclick = () => {
  event.preventDefault();
  const pin = document.querySelector("#pin");
  if (!pin.value) return (pin.style.border = "2px solid red");
  //   if (!confirm_pin.value) return (confirm_pin.style.border = "2px solid red");

  let token = look_for_user("token");
  let user = look_for_user("user");
  handle_submitpin({ token, user, pin:pin.value });
};

document.querySelectorAll("input").forEach((input) => {
  document.querySelector(".errMessage").innerHTML = "";
  input.onkeyup = () => (input.style.border = "0.1px solid #fff");
});
//   document.querySelector("select").onchange = () =>
//     (document.querySelector("select").style.border = "0.1px solid #fff");
// });
