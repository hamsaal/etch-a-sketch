let padContainer = document.querySelector(".sketch-pad");

//  Create functions such that it creates division (this will be used to create rows and cells)

const CreateDiv =()=>{
        let div= document.createElement("div");
        return div;

}
// Create function which styles our Grid's rows

const StyleRow=(div)=>{
    div.classList.toggle("grid-row");
}

// Create a function which styles our Grid's columns
const StyleCell =(div)=>{
    div.classList.toggle("grid-cell");
}

// Create a function which creates columns for each row
const CreateColumns =(row)=>{
    for (let i = 0; i<16; i++){
        const gridCell = CreateDiv();
        StyleCell(gridCell);
        row.appendChild(gridCell);  
}

}

//Create function which creates a 16X 16 grid 

const CreateGrid =()=>{

    for(let i = 0 ; i< 16 ; i++){
        const gridRow=CreateDiv();
        StyleRow(gridRow);
        padContainer.appendChild(gridRow)
        CreateColumns(gridRow);       
    }
    }


CreateGrid();
