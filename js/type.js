const heading="SOFTWARE ENGINEER|WEB DEVELOPER";
let i=0;

const typing=()=>{
    if(i<heading.length){
        document.querySelector(".typing").innerHTML+=heading.charAt(i);
        i++;
        
        setTimeout(typing,150);
    }
}
typing();