function check() {
  const input = document.getElementById("number").value.trim();
  const result = document.getElementById("result");

  const n = Number(input);

  if (input === "" || isNaN(n)) {
    result.textContent = "❌ Invalid entry. Please enter an integer.";
    return;
  }

  if (!Number.isInteger(n) || n < 0) {
    result.textContent = "⚠️ Please enter an integer.";
    return;
  }

  const binary = n.toString(2);
  result.textContent = `🔢 ${n} in binary = ${binary}.`;
}