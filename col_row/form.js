import { Manager } from "./manager.js";
 
class FormController {
    /**
     * @type {Manager}
     */
    #manager;
 
    /**
     * @type {FormField[]}
     */
    #formFieldElemList;
 
    /**
     *
     * @param {FormFieldType[]} formFields
     * @param {Manager} manager
     */
    constructor (formFields, manager) {
        const form = document.createElement('form');
        document.body.appendChild(form);
 
        this.#formFieldElemList = [];
 
        for (const field of formFields) {
            const { id, label, name, required } = field;
 
            this.#formFieldElemList.push(new FormField(id, label, name, required, form));
        }
 
        const button = document.createElement('button');
        button.innerText = 'Hozzáad';
        form.appendChild(button);
 
        form.addEventListener('submit', (e) => {
            e.preventDefault();
 
            const element = this.#createElement();
 
            if (element) {
                this.#manager.addElement(element);
                e.target.reset();
            }
        });
 
        this.#manager = manager;
    }
   
    /**
     * @returns {ColspanType | RowspanType | null}
     */
    #createElement () {
        let result = {};
        let valid = true;
 
        for (const formField of this.#formFieldElemList) {
            if (formField.validate()) {
                result[formField.name] = formField.value;
            } else {
                valid = false;
            }
        }
 
        if (valid) {
            return result;
        } else {
            return null;
        }
    }
}
 
class FormField {
    /**
     * @type {HTMLInputElement}
     */
    #input;
 
    /**
     * @type {string}
     */
    #name;
 
    /**
     * @type {HTMLDivElement}
     */
    #errorDiv;
 
    /**
     * @type {boolean}
     */
    #required;
 
    get name () {
        return this.#name;
    }
 
    get value () {
        return this.#input.value ? this.#input.value : undefined;
    }
 
    /**
     *
     * @param {string} id
     * @param {string} label
     * @param {string} name
     * @param {boolean} required
     * @param {HTMLFormElement} parent
     */
    constructor (id, label, name, required, parent) {
        const div = document.createElement('div');
        parent.appendChild(div);
 
        const labelElement = document.createElement('label');
        labelElement.innerText = label;
        div.appendChild(labelElement);
 
        const input = document.createElement('input');
        input.id = id;
        input.name = name;
        div.appendChild(input);
 
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        div.appendChild(errorDiv);
 
        this.#input = input;
        this.#name = name;
        this.#errorDiv = errorDiv;
        this.#required = required;
    }
 
    /**
     *
     * @returns {boolean}
     */
    validate () {
        let result = true;
 
        if (this.#required && !this.value) {
            this.#errorDiv.innerText = 'Kötelező';
            result = false;
        } else {
            this.#errorDiv.innerText = '';
        }
 
        return result;
    }
}
 
export { FormController }