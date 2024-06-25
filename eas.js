const container = document.querySelector(".container");

for (i = 1; i <= 16; i++) {
    const column = document.createElement("div");
    column.id = (`column${i}`);
    column.classList.add("col")
    column.style.minHeight = `${800/16}px`
    container.appendChild(column);

    const col = document.querySelector(`#column${i}`);
    
    for (j = 1; j <= 16; j++) {
        const row = document.createElement("div");
        row.id = (`row${j}`);
        row.classList.add("row")
        row.style.minWidth = `${800/16}px`
        row.addEventListener("mouseover", Event => {
            row.classList.add("drawn");
        })
        col.appendChild(row);
    }
}

const button = document.querySelector("button");
button.addEventListener("click", (Event) => {
    document.querySelectorAll(".row").forEach(el => el.remove());
    document.querySelectorAll(".col").forEach(el => el.remove());
    grid = prompt("Dimension of grid:");
    if (grid > 100) {
        grid = 100;
    }
    for (i = 1; i <= grid; i++) {
        const column = document.createElement("div");
        column.id = (`column${i}`);
        column.classList.add("col")
        column.style.minHeight = `${800/grid}px`
        container.appendChild(column);
    
        const col = document.querySelector(`#column${i}`);
        
        for (j = 1; j <= grid; j++) {
            const row = document.createElement("div");
            row.id = (`row${j}`);
            row.classList.add("row")
            row.style.minWidth = `${800/grid}px`
            row.addEventListener("mouseover", Event => {
                row.classList.add("drawn");
            })
            col.appendChild(row);
        }
    }
})