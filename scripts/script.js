const range = document.querySelector(`input[type="range"]`);
const label = document.querySelector("label");
const pageviews = document.querySelector(".pageviews_value");
const bill = document.querySelector(".bill_value");
const switchInp = document.querySelector(".form-check-input");
const button = document.querySelector(".btn");

range.addEventListener("input", (e) => {
    //managing colored bar
    const target = e.target;
    const min = target.min;
    const max = target.max;
    const val = target.value;
    const newValue = (val - min) * 100 / (max - min);
    label.style.width = newValue + "%";
    //managing pageviews value
    if(val < 1000) {
        pageviews.textContent = val;
    } else {
        pageviews.textContent = Math.round(val / 1000) + "K";
    }

    //managing billing price
    if(switchInp.checked) {
        const baseBill = 0.00016 * val * 12;
        bill.textContent = "$" + Number((baseBill - (baseBill * 25 / 100)).toFixed(0));
    } else {
        bill.textContent = "$" + Number((0.00016 * val).toFixed(2));
    }
});

switchInp.addEventListener("change", () => {
    const billValue = parseInt(bill.textContent.replace("$", ""));
    if(switchInp.checked) {
        const billDiscount = (billValue * 12 * 25 / 100);
        bill.textContent = "$" + Number(billValue * 12 - billDiscount).toFixed(0);
    } else {
        bill.textContent = "$" + Number(0.00016 * range.value).toFixed(2);
    }
});

button.addEventListener("click", () => {
    location.reload();
});