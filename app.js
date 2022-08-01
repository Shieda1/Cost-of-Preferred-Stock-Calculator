// https://calculator.swiftutors.com/cost-of-preferred-stock-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costofPreferredStockRadio = document.getElementById('costofPreferredStockRadio');
const annualDividendonPreferredStockRadio = document.getElementById('annualDividendonPreferredStockRadio');
const currentMarketPriceofPreferredStockRadio = document.getElementById('currentMarketPriceofPreferredStockRadio');
const growthRateofPreferredStockRadio = document.getElementById('growthRateofPreferredStockRadio');

let costofPreferredStock;
let annualDividendonPreferredStock = v1;
let currentMarketPriceofPreferredStock = v2;
let growthRateofPreferredStock = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

costofPreferredStockRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual Dividend on Preferred Stock ($)';
  variable2.textContent = 'Current Market Price of Preferred Stock ($)';
  variable3.textContent = 'Growth Rate of Preferred Stock';
  annualDividendonPreferredStock = v1;
  currentMarketPriceofPreferredStock = v2;
  growthRateofPreferredStock = v3;
  result.textContent = '';
});

annualDividendonPreferredStockRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Preferred Stock';
  variable2.textContent = 'Current Market Price of Preferred Stock ($)';
  variable3.textContent = 'Growth Rate of Preferred Stock';
  costofPreferredStock = v1;
  currentMarketPriceofPreferredStock = v2;
  growthRateofPreferredStock = v3;
  result.textContent = '';
});

currentMarketPriceofPreferredStockRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Preferred Stock';
  variable2.textContent = 'Annual Dividend on Preferred Stock ($)';
  variable3.textContent = 'Growth Rate of Preferred Stock';
  costofPreferredStock = v1;
  annualDividendonPreferredStock = v2;
  growthRateofPreferredStock = v3;
  result.textContent = '';
});

growthRateofPreferredStockRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Preferred Stock';
  variable2.textContent = 'Annual Dividend on Preferred Stock ($)';
  variable3.textContent = 'Current Market Price of Preferred Stock ($)';
  costofPreferredStock = v1;
  annualDividendonPreferredStock = v2;
  currentMarketPriceofPreferredStock = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costofPreferredStockRadio.checked)
    result.textContent = `Cost of Preferred Stock = ${computeCostofPreferredStock().toFixed(2)} %`;

  else if(annualDividendonPreferredStockRadio.checked)
    result.textContent = `Annual Dividend on Preferred Stock = ${computeAnnualDividendonPreferredStock().toFixed(2)} $`;

  else if(currentMarketPriceofPreferredStockRadio.checked)
    result.textContent = `Current Market Price of Preferred Stock = ${computeCurrentMarketPriceofPreferredStock().toFixed(2)} $`;

  else if(growthRateofPreferredStockRadio.checked)
    result.textContent = `Growth Rate of Preferred Stock = ${computeGrowthRateofPreferredStock().toFixed(2)} %`;
})

// calculation

function computeCostofPreferredStock() {
  return ((Number(annualDividendonPreferredStock.value) / Number(currentMarketPriceofPreferredStock.value)) + (Number(growthRateofPreferredStock.value) / 100)) * 100;
}

function computeAnnualDividendonPreferredStock() {
  return ((Number(costofPreferredStock.value) / 100) - (Number(growthRateofPreferredStock.value) / 100)) * Number(currentMarketPriceofPreferredStock.value);
  
}

function computeCurrentMarketPriceofPreferredStock() {
  return Number(annualDividendonPreferredStock.value) / ((Number(costofPreferredStock.value) / 100) - (Number(growthRateofPreferredStock.value) / 100));
}

function computeGrowthRateofPreferredStock() {
  return ((Number(costofPreferredStock.value) / 100) - (Number(annualDividendonPreferredStock.value) / Number(currentMarketPriceofPreferredStock.value))) * 100;
}