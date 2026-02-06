class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody
    #manager

    constructor(headerArray, manager){
        this.headerArray = headerArray
        this.#manager = manager

        const table = document.createElement("table")
        document.body.appendChild(table)

        const thead = document.createElement("thead")
        table.appendChild(thead)

        const tr = document.createElement("tr")
        thead.appendChild(tr)

        for(const a of data){
            const th = document.createElement("th")
            tr.appendChild(th)
            th.innerText = a.name

            if(th.colSpan){
                th.colSpan = a.colSpan
            }

            const tbody = document.createElement("tbody")
            table.appendChild(tbody)
        }
    }
}
export {Table}