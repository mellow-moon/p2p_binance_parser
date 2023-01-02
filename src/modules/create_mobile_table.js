import { data } from '../index.js';

// Changing slides on mobile and tablet versions

export let mobileInd = 0;

function nextSlide() {
  if (mobileInd < 9) {
    mobileInd+=1;
  } else {
    mobileInd = 0;
  }
  createMobileTable(mobileInd);
  //console.log(mobileInd);
}

function prevSlide() {
  if (mobileInd > 0) {
    mobileInd-=1;
  } else {
    mobileInd = 9;
  }
  createMobileTable(mobileInd);
  //console.log(mobileInd);
}

// Creating table for mobile and tablet versions

export const createMobileTable = (ind) => {
  data.then((data) => {
    const mobileTable = document.createElement("table");

    let mobileTr = mobileTable.insertRow(-1);

    let mobileTabCell = mobileTr.insertCell(-1);
    mobileTabCell.innerHTML = "Trader " + Number(mobileInd + 1);

    mobileTr = mobileTable.insertRow(-1);

    mobileTabCell = mobileTr.insertCell(-1);
    mobileTabCell.innerHTML = "Nickname is " + data[ind].advertiser.nickName;

    mobileTr = mobileTable.insertRow(-1);

    mobileTabCell = mobileTr.insertCell(-1);
    mobileTabCell.innerHTML = "Order count in month is " + data[ind].advertiser.monthOrderCount;

    mobileTr = mobileTable.insertRow(-1);

    mobileTabCell = mobileTr.insertCell(-1);
    mobileTabCell.innerHTML = "Month finish rate is " + data[ind].advertiser.monthFinishRate;

    mobileTr = mobileTable.insertRow(-1);

    mobileTabCell = mobileTr.insertCell(-1);
    mobileTabCell.innerHTML = "Price is " + data[ind].adv.price;

    mobileTr = mobileTable.insertRow(-1);

    let methodsNames = [];
    for ( let method of data[ind].adv.tradeMethods ) {
      methodsNames.push(method.tradeMethodName);
    };

    mobileTabCell = mobileTr.insertCell(-1);
    mobileTabCell.innerHTML = "Trade methods - " + methodsNames;

    const divMobileData = document.getElementById('mobile_data');
    divMobileData.innerHTML = "";
    mobileTable.className = "styled-table";
    mobileTable.style.marginLeft = "auto";
    mobileTable.style.marginRight = "auto";
    divMobileData.appendChild(mobileTable);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons_container";
    buttonsContainer.style.width = "420px";
    buttonsContainer.style.marginLeft = "auto";
    buttonsContainer.style.marginRight = "auto";
    divMobileData.appendChild(buttonsContainer);

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "Previous";
    prevButton.classList.add("slider_button", "prev");
    buttonsContainer.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.classList.add("slider_button", "next");
    buttonsContainer.appendChild(nextButton);

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  });
}