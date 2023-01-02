import './index.html';
import './index.scss';
import './modules/button_select.js'
import { fiat, asset, tradeType } from './modules/button_select.js';
import { createDesktopTable } from './modules/create_desktop_table.js';
import { createMobileTable, mobileInd } from './modules/create_mobile_table.js';

const axios = require('axios');

// Getting data into variable

const getData = async () => {
  const response = await axios({
    method: 'post',
    url: 'https://cors-anywhere.herokuapp.com/p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search',
    data: {
      page: "1",
      fiat: fiat,
      tradeType: tradeType,
      asset: asset,
      payTypes: [],
      rows: "10",
    }
  });
  
  return response.data.data;
}

export let data = getData();

// Showing data on click

function showData() {
  data = getData();
  createDesktopTable();
  createMobileTable(mobileInd);
}

const showButton = document.querySelector('.button_show');

showButton.addEventListener('click', showData);