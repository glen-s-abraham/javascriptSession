posts = [
    {title:"post1", body:"this is post 1"},
    {title:"post2", body:"this is post 2"}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach(post => {
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

//callback function
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error)
                resolve();
            else
                reject("error encountered");
        },2000)  
    });
}

async function init(){
    await createPost({title:"post3",body:"this is post 3"})
    getPosts();
}

init();