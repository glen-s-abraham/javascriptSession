const authenticate=()=>{
    user=document.querySelector('#userName').value;
    password=document.querySelector('#password').value;
    //mock authentication
    const token=getTokenFromServer(user,password);
    sessionStorage.setItem('token',token);
    setTokenOnDom();
    
}

const getTokenFromServer=(user,password)=>{
    //call to authenticaiton server
    console.log(user,password);
    return Math.floor(Math.random()*9)*10000;
}

document.querySelector('#login').addEventListener('click',authenticate);

const setTokenOnDom=()=>{
    document.querySelector('#token').innerHTML=sessionStorage.getItem('token');
}

setTokenOnDom();