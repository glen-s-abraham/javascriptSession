const createInvalidDiv=(id, message)=>{
    let invalidDiv=document.createElement('div');
    invalidDiv.id=id;
    invalidDiv.innerText=message
    return invalidDiv;
}

const addElementIfDoesNotExist=(parentElement,id,message)=>{
    if(document.getElementById(id)===null)
            parentElement.insertAdjacentElement("afterend",createInvalidDiv(id,message));
}

const removeElementIfExist=(id)=>{
    if(document.getElementById(id)!=null){
        el=document.getElementById(id);
        el.remove();
    }
            
}

const validate=()=>{
    const userName=document.querySelector("#userName");
    const email=document.querySelector("#email");
    const mobile=document.querySelector("#mobile");
    //Username validation
    if(userName.value===""||
        userName.value.length<5 
        || !/^[a-zA-Z0-9_]*$/.test(userName.value)
    )
        addElementIfDoesNotExist(userName,'invalid-feedback userName',"Invalid User name");
    else
        removeElementIfExist('invalid-feedback userName');
             
    //email validation
    if(email.value==""||
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
        addElementIfDoesNotExist(email,'invalid-feedback email',"Invalid Email");
    else
        removeElementIfExist('invalid-feedback email');
    
    //Mobile validation
    if(mobile.value==""||!/^[789]\d{9}$/.test(mobile.value))
        addElementIfDoesNotExist(mobile,'invalid-feedback mobile',"Invalid Mobile");
    else
        removeElementIfExist('invalid-feedback mobile');
}

document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault();
    validate();
});