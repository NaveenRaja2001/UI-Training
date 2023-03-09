let ShapesDetails = {
    // parameter:["RADIUS","AREA","PERIMETER"],
    circle: {
        inputtype: "RADIUS",
        name: "Circle",
        shapes:"",
        id: 0,
        heading: "Enter Radius",
        parameter:["RADIUS","AREA","PERIMETER"],
        formula: ['r', '&pi;r&#xB2;', '2&pi;r'],
        calculation: function (r) {
            let radius = r;
            let area = 3.14 * r * r;
            let perimeter =(2 * 3.14 * r);
            return [radius+" cm", area.toFixed(2)+" sq cm", perimeter.toFixed(2)+" cm"]
        }
    },
    triangle: {
        inputtype: "SIDE",
        name: "Equilateral Triangle",
        id: 0,
        shapes:"",
        heading: "Enter Side (Base & Height)",
        parameter:["SIDE","AREA","PERIMETER"],
        formula: ['s', '0.433 * s * s', '3 * s'],
        calculation: function (r) {
            let radius = r;
            let area = 0.43 * r * r;
            let perimeter = 3 * r;
            return [radius+" cm", area.toFixed(2)+" sq cm", perimeter.toFixed(2)+" cm"]
        }
    },
    square: {
        inputtype: "SIDE",
        name: "Square",
        id: 0,
        shapes:"",
        heading: "Enter Side",
        parameter:["SIDE","AREA","PERIMETER"],
        formula: ['s', 's * s', '4 * s'],
        calculation: function (r) {
            let radius = r;
            let area = r * r;
            let perimeter = 4 * r;
            return [radius+" cm", area.toFixed(2)+" sq cm", perimeter.toFixed(2)+" cm"]
        }
    }
}
const OutputContainer=document.querySelector(".output-container");
const outputShapes=document.createElement('div');
outputShapes.setAttribute('class',"outputShapes");
const shapeot=document.createElement('div');
shapeot.setAttribute('id','shapeot');
shapeot.setAttribute('class','');
outputShapes.append(shapeot);
const OutputImgTitle=document.createElement("h2");
OutputImgTitle.setAttribute("id","OutputImgTitle");
const startAgain=document.createElement('button');
startAgain.setAttribute('id','startAgain');
startAgain.innerHTML="START AGAIN";
 //////////////////////////////////////table//////////////////////////////////////


// console.log("hai" + localStorage.getItem("shapes"));
        const outputTable=document.createElement('table');
        for(i=0;i<3;i++){
        const tableRow=document.createElement('tr');
        outputTable.append(tableRow);
        const  tablecol1=document.createElement('td');
        tablecol1.setAttribute('class','tableTitle');
        const tableTitle=document.createElement('h3');
        tableTitle.setAttribute('class','tableOutputTitle');
        tablecol1.append(tableTitle);
        
        const  tablecol2=document.createElement('td');
        tablecol2.setAttribute('class','tableFormula');
        const tableFormula=document.createElement('p');
        tableFormula.setAttribute('class','formula');
        tablecol2.append(tableFormula);

        const  tablecol3=document.createElement('td');
        tablecol3.setAttribute('class','tableValue');
        const tablevalue=document.createElement('p');
        tablevalue.setAttribute('class','tableValueOutput');
        tablecol3.append(tablevalue);

        tableRow.append(tablecol1,tablecol2,tablecol3);
        }
        //////////////////////////////table////////////////////////////////
        OutputContainer.append(outputShapes,OutputImgTitle,outputTable,startAgain);
                                            // shapes container click event 

                                            // next button click event 

                                             // calculatebutton click event 

                                    // start again click event 
// console.log(localStorage.getItem("shapes"));
document.querySelector("#startAgain").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});


let cir=document.createElement("div");
const tri=document.createElement('div');
const squ=document.createElement('div');
cir.setAttribute("class","circle");
tri.setAttribute("class","triangle");
squ.setAttribute("class","square");
const tick=document.createElement('i');
tick.setAttribute("class","fa fa-check tick");
const tickc=document.createElement('i');
tickc.setAttribute("class","fa fa-check tick");
const ticks=document.createElement('i');
ticks.setAttribute("class","fa fa-check tick");
cir.append(tickc);
squ.append(ticks);
tri.append(tick);

const mainContainerdiv=document.createElement('div');
const title=document.createElement('h1');
title.innerHTML="1.Choose a Shape";
mainContainerdiv.append(title);

const mainContainer=document.querySelector('.container');
const shape=document.createElement("div");
shape.setAttribute('class',"shapes");
console.log(shape);
shape.append(cir,tri,squ);
const nextButtioncontainer=document.createElement('div');
nextButtioncontainer.setAttribute('class','button');
const nextButton=document.createElement('button');
nextButton.setAttribute('id',"next-button");
nextButton.innerHTML="NEXT";
nextButtioncontainer.append(nextButton);
mainContainer.append(mainContainerdiv,shape,nextButtioncontainer);

// const outputContainer=document.querySelector(".output-container");



// const subcontainer=document.createElement('div');
// subcontainer.setAttribute("class","sub-container");
const con=document.querySelector(".sub-container");
const calculteTitle=document.createElement("h2");
calculteTitle.setAttribute("id","calculteTitle");

const inputRadius=document.createElement("div");
inputRadius.setAttribute("class","input-radius");

const inputr=document.createElement("input");
inputr.setAttribute("id","inputradius");

inputRadius.append(inputr);
const calculatebutton=document.createElement("button");
  calculatebutton.setAttribute("class","calculatebutton");
  calculatebutton.innerHTML="CALCULATE";
  const errortag=document.createElement("p");
  errortag.setAttribute('class','error')
// let calculatebutton=document.createElement("button");
// calculatebutton.innerHTML="CALCULATE"
// calculatebutton.setAttribute("class","calculatebutton");

con.append(calculteTitle,inputRadius,errortag,calculatebutton);


document.querySelector(".calculatebutton").addEventListener("click", () => {

  
    let inputValue = document.querySelector("#inputradius").value;
   if(inputValue==""){
    document.querySelector(".error").innerHTML="Please enter the value";
   }
   else{
    localStorage.setItem("inputValue", inputValue);
    console.log(inputValue);
    // changing output ShapesDetails;
    let q = localStorage.getItem("shapes");
       console.log(q);
   document.querySelector("#shapeot").className= q;
    // console.log( document.querySelector("#shapeot").classList.add = q);
    // console.log(qqq);
    //   changing output name 
    document.querySelector("#OutputImgTitle").innerHTML = ShapesDetails[q].name;
    // table column 1
     document.querySelectorAll(".tableOutputTitle").forEach((ele,ind)=>{
        ele.innerHTML=ShapesDetails[q].parameter[ind];
        // console.log()
})

    // document.querySelector("#inputtype").innerHTML = ShapesDetails[q].inputtype;
    //  table column 2 



    document.querySelectorAll(".formula").forEach((ele,ind)=>{
        ele.innerHTML=ShapesDetails[q].formula[ind];
        // console.log()
})



    // document.querySelector("#formula").innerHTML = ShapesDetails[q].formula[0];
    // document.querySelector("#areaformula").innerHTML = ShapesDetails[q].formula[1];
    // document.querySelector("#periformula").innerHTML = ShapesDetails[q].formula[2];
    //  table column 3
    let outputArr = ShapesDetails[q].calculation(localStorage.getItem("inputValue"));
    console.log(outputArr);
    document.querySelectorAll(".tableValueOutput").forEach((ele,ind)=>{
            ele.innerHTML=outputArr[ind];
            // console.log()
    })

    // document.querySelector("#outputr").innerHTML = outputArr[0] + " cm";
    // document.querySelector("#outputa").innerHTML = outputArr[1] + " sq cm";
    // document.querySelector("#outputp").innerHTML = outputArr[2] + " cm";

    document.getElementsByClassName("sub-container")[0].style.display = "none";
    document.getElementsByClassName("output-container")[0].style.display = "flex";
   }
});


document.querySelector(".shapes").addEventListener("click", (event) => {
    let a = event.target.getAttribute("class");
                                             //  tick symbol on shapes 
     let temp=localStorage.getItem("shapes");                                        
    if(temp!=null){
        document.querySelector("."+temp+" i").style.display="none";
    }
    // let er = document.querySelectorAll(".tick");
    // er.forEach(el => el.style.display = "none");
    event.target.querySelector('i').style.display = 'inline-block';

    console.log(a);
    localStorage.setItem("shapes", a);
                                            // applying related heading to next container based on shapes selected
    let calTitle = document.querySelector("#calculteTitle");
    calTitle.innerHTML = ShapesDetails[a].heading;
    document.querySelector(".button").style.display = "block";
});

document.querySelector("#next-button").addEventListener("click", () => {
    document.getElementsByClassName("container")[0].style.display = "none";
    document.getElementsByClassName("sub-container")[0].style.display = "block";
});


// refreshing 
if (localStorage.getItem("shapes")) {
    document.querySelector(".button").style.display = "block";
    let data = localStorage.getItem("shapes");
    // data
    let dataclass = document.getElementsByClassName(data);
    dataclass[0].querySelector("i").style.display = "inline-block";
    let calTitle = document.querySelector("#calculteTitle");
    calTitle.innerHTML = ShapesDetails[data].heading;
}