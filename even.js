function check() {
  const input = document.getElementById("number").value.trim();
  const result = document.getElementById("result");

  const n = Number(input);

  if (input === "" || isNaN(n)) {
    result.textContent = "❌ Invalid entry. Please enter an integer.";
    return;
  }

  if (!Number.isInteger(n)) {
    result.textContent = "⚠️ Please enter an integer.";
    return;
  }

  if (n % 2 === 0) {
    result.textContent = `🟢 ${n} is even.`;
  } else {
    result.textContent = `🔴 ${n} is odd.`;
  }
}