const selectWrap = document.querySelector(".select-wrap");

selectWrap.addEventListener("change", (e) => {

    const s = document.getElementById(`select_${listSelects.length}`);
    
    createSelect();
    
    


    
    
});


const listSelects = [];
const listOptions = ["JS", "HTML", "CSS"];




function createSelect() {
    const select = document.createElement("select");
    listSelects.push(select);
    select.id = `select_${listSelects.length}`;
    selectWrap.appendChild(select);

    for (let i = 0; i < listOptions.length; i++) {
        const option = document.createElement("option");
        option.value = listOptions[i];
        option.text = listOptions[i];
        select.add(option);
    }
}
