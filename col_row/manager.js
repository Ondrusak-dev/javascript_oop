/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from './functions.js'
 */
 
/**
 * @type {ColspanType[] | RowspanType[]}
 *
 * @callback addCallback
 * @param {ColspanType | RowspanType} param
 * @returns {void}
 */
class Manager {
    #DataArray
 
    /**
     * @type {addCallback}
     */
    #addCallback
    set addCallback(parameter)
    {
        this.#addCallback = parameter
    }
 
    constructor()
    {
        this.#DataArray = []
    }
 
    addElement(param)
    {
        this.#DataArray.push(param)
        if(this.#addCallback)
        {
            this.#addCallback(param)
        }
    }
}
export {Manager}