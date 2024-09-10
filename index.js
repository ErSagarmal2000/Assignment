const Data = {
    'projects': ["project1", "project2", "project3"],
    'media': ["media1", "media2", "media3"],
    'career': ["career1", "career2", "career3"],
    
    
};
const line=document.getElementById("send_enquiry")
line.onclick=()=>{
    document.body.style.visibility = 'hidden'
    document.getElementById("dynamic-form").classList.add("show")
    document.getElementById("cross").classList.add("show_img")
    
}
document.getElementById("cross").onclick=()=>{
    document.body.style.visibility="visible"
    document.getElementById("dynamic-form").classList.remove("show")
    document.getElementById("cross").classList.remove("show_img")

}
// ------------------------------------------form logic-------------------------------------------------------
window.onload=()=>{
    const querySelect=document.getElementById('query')
    const subQuerySelect=document.getElementById('subQuery')
    const optionCon=document.getElementById('option-con')
    const subQueryOptionCon=document.getElementById("subQueryOption-con")
    const formBtn=document.getElementById("form-btn")
    
    let currentOption=' ';

    const handleSubQueryClick=(option)=>{
        subQuerySelect.value=option
        subQueryOptionCon.style.display='none';
        
        
    }
    
    subQuerySelect.onclick=()=>{
        subQueryOptionCon.innerHTML = '';
        if(currentOption){
            for(let i in Data[currentOption]){
                const div=document.createElement('div')
                const option=Data[currentOption][i]
                div.textContent=option
                div.classList.add('option')
                subQueryOptionCon.appendChild(div)
                div.onclick=()=>handleSubQueryClick(option)
               
                
            }

        }
    }

    const handleClick=(option)=>{
        querySelect.value=option
        optionCon.style.display='none';
        subQuerySelect.placeholder =`select ${option}`
        subQuerySelect.style.display='block';
        currentOption=option;
        formBtn.classList.remove("active")

        

    }
    function addOptions(){
        optionCon.innerHTML=''
        formBtn.classList.add("active")
        for (let option in Data){
            const div=document.createElement('div')
            div.textContent=option
            div.classList.add('option')
            optionCon.appendChild(div)
            div.onclick=()=>handleClick(option)
        }

    }

    querySelect.addEventListener('click',addOptions)
}









