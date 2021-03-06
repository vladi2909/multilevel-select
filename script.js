const selectWrap = document.querySelector(".select-wrap");
let count = 1;

selectWrap.addEventListener("change", function(e) {
    

    if (Number(e.target.id) >= count) {
        createSelect();
        count++;
    } else {
        updateSelect(e.target.id);
    }


    
});


const listSelects = [];
const listOptions = ["JS", "HTML", "CSS"];
const listOptions2 = ["React", "Angular"];


function updateSelect(countS) {
    nextSelect = Number(countS) + 1;

    const sel = document.getElementById(String(nextSelect));
    const allSel = document.querySelectorAll("select");

    sel.innerHTML = "";
    
    for (let i = 0; i < listOptions2.length; i++) {
        const option = document.createElement("option");
        option.value = listOptions2[i];
        option.text = listOptions2[i];
        sel.add(option);
    }

    for (let i = nextSelect; i < allSel.length; i++) {
        allSel[i].innerHTML = "";
        count--;
        listSelects.pop();
        allSel[i].remove();
        console.log(count);
        
    }


    
}

function createSelect() {
    const select = document.createElement("select");
    listSelects.push(select);
    // select.id = `select_${listSelects.length}`;
    select.id = listSelects.length + 1;
    selectWrap.appendChild(select);

    for (let i = 0; i < listOptions.length; i++) {
        const option = document.createElement("option");
        option.value = listOptions[i];
        option.text = listOptions[i];
        select.add(option);
    }
}
