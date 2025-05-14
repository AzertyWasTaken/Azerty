function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrt = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function check() {
  const input = document.getElementById("number").value.trim();
  const result = document.getElementById("result");

  const n = Number(input);

  if (input === "" || isNaN(n)) {
    result.textContent = "❌ Invalid entry. Please enter an integer.";
    return;
  }

  if (!Number.isInteger(n) || n < 1) {
    result.textContent = "⚠️ Please enter a positive integer.";
    return;
  }

  if (isPrime(n)) {
    result.textContent = `🟢 ${n} is prime.`;
  } else {
    result.textContent = `🔴 ${n} is composite.`;
  }
}