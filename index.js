let padContainer = document.querySelector(".sketch-pad");

//  Create functions such that it creates division

const CreateDiv =()=>{
        let div= document.createElement("div");
        return div;

}
// Create function which styles our Grid's rows

const StyleDiv=(div)=>{
    div.classList.toggle("grid");
}

//Create function which creates grid
for (let i= 0; i<16;i++){
    const row = CreateDiv();
    StyleDiv(row);
    padContainer.appendChild(row);
}