let padContainer = document.querySelector(".sketch-pad");
const resizeButton = document.querySelector("button");
let input = document.querySelector(".slider");
let currentValue = document.querySelector(".grid-size")

currentValue.innerHTML = input.value;



// Create a function which Updates value of the current-size
const UpdateGridSize =(event)=>{
    return event.target.value
}
input.addEventListener("input",(e)=>{
    let sliderValue = UpdateGridSize(e);
    currentValue.innerHTML=sliderValue;
})




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
    
    CheckUserInput(CreateGrid,AskUser,userInput);
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
const CreateColumns =(number,row)=>{
    for (let i = 0; i<number ; i++){
        const gridCell = CreateDiv();
        StyleCell(gridCell);
        row.appendChild(gridCell);  
}

}

//Create function which creates a 16X 16 grid 

const CreateGrid =(n)=>{
    padContainer.innerHTML="";

    for(let i = 0 ; i< n ; i++){
        const gridRow=CreateDiv();
        StyleRow(gridRow);
        padContainer.appendChild(gridRow)
        CreateColumns(n,gridRow);       
    }
    }
CreateGrid(16);
