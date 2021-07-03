    
    const table = document.querySelector(".table__sort")

    let colIndex = -1

    const sortTable = (index, isSorted) => {
        const tbody = table.querySelector("tbody")

        const compare = (rowA, rowB) => {
           return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML
        }

        let rows = [].slice.call(tbody.rows)
        rows.sort(compare)

        if (isSorted) {
            rows.reverse()
        }

        table.removeChild(tbody)

        for (let i = 0; i < rows.length; i++) {
            tbody.appendChild(rows[i])
        }
        table.appendChild(tbody)
    };

    

    table.addEventListener("click", (event) => {
        const element = event.target
        if (element.nodeName !== "TH") return
        const index = element.cellIndex
        sortTable(index, colIndex == index)
        colIndex = colIndex == index ? -1 : index
    });
