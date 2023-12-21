const subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";
subHeading.style.fontStyle = "italic";
document.querySelector('div').appendChild(subHeading);

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.id = "fruits-total";
para.appendChild(paraText);
console.log(para);
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
secondDiv.appendChild(para);
