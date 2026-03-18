const priceEl = document.getElementById('nrxPrice');
const trendEl = document.getElementById('nrxTrend');

let nrxPrice = 1;

setInterval(() => {
  const delta = (Math.random() - 0.5) * 0.05;
  const previous = nrxPrice;
  nrxPrice = Math.max(0.2, nrxPrice + delta);
  const changePct = ((nrxPrice - previous) / previous) * 100;

  priceEl.textContent = `$${nrxPrice.toFixed(3)}`;
  trendEl.textContent = `${changePct >= 0 ? '▲' : '▼'} ${Math.abs(changePct).toFixed(2)}%`;
  trendEl.style.color = changePct >= 0 ? 'var(--up)' : 'var(--down)';
}, 1800);

const transferForm = document.getElementById('transferForm');
const transferResult = document.getElementById('transferResult');

transferForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(transferForm);
  const sender = formData.get('sender');
  const receiver = formData.get('receiver');
  const amount = formData.get('amount');

  transferResult.textContent = `✅ $${amount} sent from ${sender} to ${receiver} in 0.00s settlement simulation.`;
  transferResult.style.color = 'var(--up)';

  transferForm.reset();
});
