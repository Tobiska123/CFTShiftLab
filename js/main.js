 let searchInput = document.getElementById("form-search"),
     btnSearchInput = document.getElementById("form-searchBtn"),
     colHeaders = document.querySelectorAll('.table-row-header'),
     countOccur = document.getElementById("form-counter");

 let LastStr = 0;
 let headElem;

 colHeaders.forEach(col =>{
     col.addEventListener('click',e =>{
         if(headElem != undefined) {
             while (headElem.nextElementSibling) {
                 headElem.nextElementSibling.innerHTML = headElem.nextElementSibling.innerText.replaceAll('<mark >${LastStr}</mark>', (LastStr) => {
                     return `${LastStr}`;
                 });
                 headElem = headElem.nextElementSibling;
             }
         }
         searchInput.value = "";
         countOccur.innerHTML = '-';
         headElem = e.target;
     })
 })

let selectedItem;

 colHeaders.forEach(col =>{
     col.addEventListener('click',e=>{
         if(selectedItem == undefined || selectedItem == e.target){
             e.target.classList.toggle('selected');
         }else {
             selectedItem.classList.remove('selected');
             e.target.classList.toggle('selected');
         }
         selectedItem = e.target;
     })
 })


 btnSearchInput.addEventListener('click',e=>{
     if(headElem) {
         LastStr = searchInput.value;
         let reg = RegExp(LastStr,'gi');
         let curElem = headElem;
         let count = 0;
         while (curElem.nextElementSibling) {
             count += (curElem.nextElementSibling.innerText.split(reg).length - 1);
             curElem.nextElementSibling.innerHTML = curElem.nextElementSibling.innerText.replaceAll(reg, (LastStr) => {
                 return `<mark>${LastStr}</mark>`;
             });
             curElem = curElem.nextElementSibling;
         }
         count == 0 ? alert('Нечего не найдено!!!') :
             countOccur.innerHTML = count.toString();
         curElem = headElem;
     }else
         alert("Выберете колонку!!!");
 })



