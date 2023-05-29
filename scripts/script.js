const range = document.querySelector(`input[type="range"]`);
const label = document.querySelector("label");
range.addEventListener("input", (e) => {
    const target = e.target;
    const min = target.min;
    const max = target.max;
    const val = target.value;
    const newValue = (val - min) * 100 / (max - min);
    label.style.width = "calc(" + newValue + "% - 1rem)";
});