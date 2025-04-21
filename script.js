function insert_Row() {
    
  let tab=document.getElementById("mytable")

var j=1;
var i=2;

let head=document.getElementById("myhead")

function insert_Row(){
 
   let elem=document.createElement("tr");
    let data1=document.createElement("td");

    let data2=document.createElement("td");
     
    i+=1;

    data1.textContent+=`New cell${j++}`
    data2.textContent+=`New cell${j++}`;

    elem.appendChild(data1);
    elem.appendChild(data2)

    head.appendChild(elem);
  
    // tab.appendChild(elem)

    j=1;

 

    

}
  
}
