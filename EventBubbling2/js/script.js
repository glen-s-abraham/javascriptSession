//Even Capture added to parent node to capture child events

document.querySelector('#button-div').addEventListener('click',e=>{
    document.querySelector('.btn.active').classList.remove('active');
    e.target.classList.add('active');
    
});