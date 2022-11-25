const write_percentage = (percentage, earning) => {
  document.querySelector("#percentage").innerHTML = percentage;
  document.querySelector("#earning").innerHTML = earning;
};
const show_err = () => {
  document.querySelector("#amount").style.border = "2px solid red";
  document.querySelector(".errMessage").innerHTML =
    "Investment amount can not be lesser than minimum investment for the plan selected";
};
const disable_show_err = () => {
  document.querySelector("#amount").style.border = "2px solid #fff";
  document.querySelector(".errMessage").innerHTML = "";
};
let profit;

const handle_request = () => {
  switch (plan.value) {
    case "STARTER PLAN":
      if (!amount.value) return;
      // if (!return_time.value) return;
      if (parseInt(amount.value) < 200) return show_err();
      disable_show_err();

      var percentage = "PERCENTAGE: 2% Daily Return for 7 days";
      var earning = `My Profit: $${Math.round((amount.value / 100) * 14)}`;
      profit = Math.round((amount.value / 100) * 14);
      write_percentage(percentage, earning);
      // handle_submit_request({
      //   profit,
      //   plan: plan.value,
      //   amount: amount.value,
      // });
      break;

    case "ZONAL REPRESENTATIVE":
      if (!amount.value) return;
      if (parseInt(amount.value) < 30000) return show_err();
      disable_show_err();

      var percentage = "PERCENTAGE: 3.5% Daily return for 20 days";
      var earning = `My Profit: $${Math.round((amount.value / 100) * 70)}`;
      profit = Math.round((amount.value / 100) * 70);
      write_percentage(percentage, earning);
      // handle_submit_request({ 
      //   profit,
      //   plan: plan.value,
      //   amount: amount.value,
      // });
      break;
    // }

    case "AMBASSADOR PLAN":
      if (!amount.value) return;
      // if (!return_time.value) return;
      if (parseInt(amount.value) < 50000) return show_err();
      disable_show_err();

      var percentage = "PERCENTAGE: 5% Daily return for 30 days";
      var earning = `My Profit: $${Math.round((amount.value / 100) * 150)}`;
      profit = Math.round((amount.value / 100) * 150);
      write_percentage(percentage, earning);
      // handle_submit_request({
      //   profit,
      //   plan: plan.value,
      //   amount: amount.value,
      // });
      break;

    default:
      handle_keychange();
      break;
  }
};

const handle_keychange = () => {
  if (!amount.value) return display_error(amount);
  hide_error(amount);
  if (!plan.value) return display_error(plan);
  hide_error(plan);
 
  handle_request();
};
