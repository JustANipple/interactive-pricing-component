const range = document.querySelector(`input[type="range"]`);
const label = document.querySelector("label");
const pageviews = document.querySelector(".pageviews_value");
const bill = document.querySelector(".bill_value");
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
    bill.textContent = "$" + Number((0.00016 * val).toFixed(2));
});