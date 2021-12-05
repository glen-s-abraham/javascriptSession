// const grandParent=document.getElementById('grandParentDiv');
// const parent=document.getElementsByClassName('parent');

// const grandParent = document.querySelector('#grandParentDiv');
// const child = document.querySelectorAll('.child');
// const parent = Array.from(grandParent.children);
// const children=parent[0].children;
// Array.prototype.forEach.call(parent,el=>{
//     changeColor(el);
// })
// changeColor(child);
//child.forEach(el=>changeColor(el));
//parent.forEach(el=>changeColor(el));
// changeColor(children[0]);

const child=document.querySelector('.child');
const parent = child.parentNode

changeColor(parent);
function changeColor(element)
{
  element.style.backgroundColor="black";
}