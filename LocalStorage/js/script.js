const toDoContainer=document.querySelector('.toDoContainer');
//starting point
function init(){
    getAllToDosFromStorageAndRender();
}

const getAllToDosFromStorageAndRender=()=>{
    keys=Object.keys(localStorage);
    Array.prototype.forEach.call(keys,key=>{
        createAndAddToDoElementToPage(key,localStorage.getItem(key));
    })
}

const addItemToLocalStorage=(id,body)=>{
    localStorage.setItem(id,body);
    console.log(localStorage.getItem(id,body));
    
}

const createAndAddToDoElementToPage=(id,body)=>{
    const markup=`<div class="toDoItem">
    <p>${body}</p>
    <button class="deleteToDo" value=${id}>Delete</button>
    </div>`;
    toDoContainer.insertAdjacentHTML('afterbegin',markup);
}

const removeElementFromDom=(element)=>{
    const div=element.parentNode;
    div.remove(div);
}

const removeAllToDoElementsFromDom=()=>{
    const toDos=document.querySelectorAll('.toDoItem');
    toDos.forEach(el=>{
        el.remove(el);
    })
};

const clearLocalStorage=()=>{
    keys=Object.keys(localStorage);
    Array.prototype.forEach.call(keys,key=>{
        localStorage.removeItem(key);
    });
    removeAllToDoElementsFromDom();
}
//Add An Item to the list
document.querySelector('#toDoAdd').addEventListener('click',()=>{
    const id=document.querySelector('#toDoId').value;
    const body=document.querySelector('#toDoBody').value;
    addItemToLocalStorage(id,body);
    createAndAddToDoElementToPage(id,body);
});

//remove item from local storage and page
toDoContainer.addEventListener('click',(e)=>{
    localStorage.removeItem(e.target.value);
    removeElementFromDom(e.target);
});

//remove all items
document.querySelector('#clearAll').addEventListener('click',clearLocalStorage);

init();
