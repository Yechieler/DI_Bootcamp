//name
//descri

//option 1
// [
//     {
//         name:'item 1',
//         descri: 'descri 1'
//     },
//     {
//         name:'item 2',
//         descri:'descri 2'
//     }
// ]

// option 2
// class item{
//     constructor(name, descri) {
//         this.name =name;
//         this.descri = descri;
//     }
// }
console.log(localStorage.getItem('listOfItems'));
// localStorage.clear();
let items = localStorage.getItem('listOfItems') ? JSON.parse(localStorage.getItem('listOfItems')) : [];

let ul = document.getElementById('toDoList')

function createAllItems(){
    if(item.length>0){
        item.forEach( objItem => {
            createToDoItem(objItem.name);
        })
    }
}
createAllItems();

function addItem(){
    let item = document.getElementById('item').value;
    let descvalue = document.getElementById('descri').value;
    let StartDateTime = document.getElementById('StartDateTime').value;
    let EndDateTime = document.getElementById('EndDateTime').value;
    let Status = document.getElementById('Status').value;
    items.push({name:item,desc:descvalue,start:StartDateTime,end:EndDateTime,Status:Status});
    createToDoItem(item,descvalue,StartDateTime,EndDateTime,Status);
    localStorage.setItem('listOfItems', JSON.stringify(items));
}

function createToDoItem(value){
    let li = document.createElement('LI');
    li.innerText = value;
    ul.appendChild(li);
    console.log(value);
}