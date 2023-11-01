let padContainer = document.querySelector(".sketch-pad");
const resizeButton = document.querySelector("button");

// 
// Create a function which prompts user with a question to resize the grid
const AskUser= ()=>{
    const userInput = prompt("What size of the grid you want?");
    return userInput;
}
// Create a function which check the user Input and runs the appropriate function
const CheckUserInput = (function1,function2,userInput)=>{
    userInput<100? function1(userInput):function2();
}

resizeButton.addEventListener("click",()=>{
    const userInput = AskUser();
    CheckUserInput(CreateGrid(userInput),AskUser,userInput);
})

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
    for (let i = 0; i<row; i++){
        const gridCell = CreateDiv();
        StyleCell(gridCell);
        row.appendChild(gridCell);  
}

}

//Create function which creates a 16X 16 grid 

const CreateGrid =(n)=>{

    for(let i = 0 ; i< n ; i++){
        const gridRow=CreateDiv();
        StyleRow(gridRow);
        padContainer.appendChild(gridRow)
        CreateColumns(gridRow);       
    }
    }


CreateGrid();
