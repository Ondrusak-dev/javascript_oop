/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from './functions.js'
 * @callback AddCallback
 * @param {ColspanType | RowspanType} element
 * @returns {void}
 */

class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #dataArray;

    /**
     * @type {AddCallback}
     */
    #addCallback;

    constructor(){
        this.#dataArray = [];
    }

    /**
     * @param {ColspanType | RowspanType} param
     */
    addElement(param){
        this.#dataArray.push(param);

        if (this.#addCallback){
            this.#addCallback(param);
        }
    }

    /**
     * @param {AddCallback} param
     */
    set addCallback(param){
        this.#addCallback = param;
    }
}

export {Manager}