function animateSaldo() {
  const saldoElement = document.getElementById("saldo");
  const finalSaldo = 25.42;
  let currentSaldo = 18.27;
  const animationSpeed = 0.05; // Adjust this value to control the animation speed.

  function updateSaldo() {
    if (currentSaldo < finalSaldo) {
      currentSaldo += animationSpeed;
      saldoElement.innerText = currentSaldo.toFixed(2);
      requestAnimationFrame(updateSaldo);
    }
  }

  updateSaldo();
}

animateSaldo();
