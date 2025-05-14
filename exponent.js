function calculate() {
  const input = document.getElementById("number").value.trim();
  const input2 = document.getElementById("number2").value.trim();

  const result = document.getElementById("result");

  const n = Number(input), k = Number(input2);

  if (input === "" || input2 === "" || isNaN(n) || isNaN(k)) {
    result.textContent = "❌ Invalid entry. Please enter integers.";
    return;
  }

  if (!Number.isInteger(n) || !Number.isInteger(k)) {
    result.textContent = "⚠️ Please enter integers.";
    return;
  }

  const pow = n**k;
  result.textContent = `🔢 The result is ${pow}.`;
}