import { data } from '../index.js';

// Creating table for desktop version

export const createDesktopTable = () => {
  data.then((data) => {
    const table = document.createElement("table");

    let tr = table.insertRow(-1);

    let col = [ "Nickname", "Month Order Count", "Month Finish Rate", "Price", "Trade Methods" ];

    for (let i = 0; i < col.length; i++) {
      let th = document.createElement("th");
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    for (let seller of data) {
      tr = table.insertRow(-1);

      let tabCell = tr.insertCell(-1);
      tabCell.innerHTML = seller.advertiser.nickName;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = seller.advertiser.monthOrderCount;
      
      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = seller.advertiser.monthFinishRate;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = seller.adv.price;

      let methodsNames = [];
      for ( let method of seller.adv.tradeMethods ) {
        methodsNames.push(method.tradeMethodName);
      };

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = methodsNames;
    }

    const divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    table.className = "styled-table";
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    divShowData.appendChild(table);
  });
};