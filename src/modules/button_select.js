const tradeTypeButtons = document.querySelectorAll('.trade_type');
const assetButtons = document.querySelectorAll('.asset');
const fiatButtons = document.querySelectorAll('.fiat');

export let fiat = 'RUB';
export let asset = 'USDT';
export let tradeType = 'BUY';

// Changing active element in trade types...

tradeTypeButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    tradeTypeButtons.forEach(f => f.classList.remove('active'));
    e.target.classList.toggle('active');
    tradeType = e.target.innerHTML;
  });
});

// ...in assets...

assetButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    assetButtons.forEach(f => f.classList.remove('active'));
    e.target.classList.toggle('active');
    asset = e.target.innerHTML;
  });
});

// ...in fiat.

fiatButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    fiatButtons.forEach(f => f.classList.remove('active'));
    e.target.classList.toggle('active');
    fiat = e.target.innerHTML;
  });
});