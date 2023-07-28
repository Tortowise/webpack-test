import _ from 'lodash';
import './style.css';
import Icon from './assets//icons/icon.png';
import Data from './assets//tables/data.xml';
import Notes from './assets//tables/data.csv';
import toml from './assets//tables/data.toml';
import yaml from './assets//tables/data.yaml';
import json from './assets//tables/data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

 function component() {
    const element = document.createElement('div');  

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

   return element;
 }

 document.body.appendChild(component());