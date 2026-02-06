import data from '/data.json' with {type:'json'}
import { Manager } from './manager.js'
import { Table } from './table.js'

const manager = new Manager()
manager.addCallback=(element) => {
    console.log(element)
}
for(let a of data.colspanDataArr){
    manager.addElement(a)
}

const table = new Table()


