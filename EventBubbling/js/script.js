let btns=document.querySelectorAll('#to-do-item-delete-btn');
document.querySelector('#to-do-list').addEventListener('click',e=>{
    console.log(e.target);
});

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const li=btn.parentNode;
        li.parentNode.removeChild(li);
    })
})