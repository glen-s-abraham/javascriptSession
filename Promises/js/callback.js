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
function createPost(post,fn){
    setTimeout(()=>{
        posts.push(post);
        fn();
    },2000)
    
}

//get post sent in as callback
createPost({title:"post3",body:"this is post 3"},getPosts);