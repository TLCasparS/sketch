

// function creates 16x16 grid
const build = function(){
    const container = document.querySelector("#container");

    for (let i = 1; i<17; i++){
        const divi = document.createElement('div');
        divi.setAttribute("id", `divi${i}`);
        divi.textContent =`new ${i}`;
        divi.classList.add("divi")
        container.appendChild(divi);
        for (let j = 1; j<17; j++){
            const divj = document.createElement('div');
            divj.setAttribute("id", `divi${i}.${j}`);
            divj.textContent =`div ${j}`;
            divj.classList.add("divj");
        
            divi.appendChild(divj);
        }
    }
    
    
}

build();