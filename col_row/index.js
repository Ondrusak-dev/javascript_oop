/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from './functions.js'
 */
import data from './data.json' with {type: 'json'}
import { FormController } from './form.js';
import { Manager } from './manager.js';
import { Table } from './table.js';

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {ColspanType} elem 
 */
const renderColspanBody = (tbody, elem) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const cell = document.createElement('td');
    cell.innerText = elem.neve;
    tr.appendChild(cell);

    const cell2 = document.createElement('td');
    cell2.innerText = elem.kor;
    tr.appendChild(cell2);

    const cell3 = document.createElement('td');
    cell3.innerText = elem.szerelme1;
    tr.appendChild(cell3);
    
    if (elem.szerelme2) {
        const cell4 = document.createElement('td');
        cell4.innerText = elem.szerelme2;
        tr.appendChild(cell4);
    } else {
        cell3.colSpan = 2;
    }
}

const manager = new Manager();
// manager.addCallback = (param) => {console.log(param)};

const table = new Table(data.colspanHeaderArray, manager);
table.setAppendRow(renderColspanBody);

for (const elem of data.colspanDataArr) {
    manager.addElement(elem);
}

const form = new FormController(data.colspanFormFieldList, manager);

