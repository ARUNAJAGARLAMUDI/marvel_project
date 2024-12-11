const hTags = document.getElementsByTagName("h1");
const childClass = document.getElementsByClassName("hero-div"); 
for (let i = 0; i < hTags.length; i++) { //for every h1 tag
    const element = hTags[i];
    element.addEventListener("mouseover", function(){
            const cdiv = childClass[i-1];
            cdiv.style.backgroundColor = "rgba(187, 178, 178, 0.536)";
    })

    element.addEventListener("mouseenter",function(){
        const cdiv = childClass[i-1];
        cdiv.style.fontSize = "20px";
        cdiv.style.boxShodow = "10px 10px 10px white";
        cdiv.style.transition = "0.5s"
    })
    

    element.addEventListener("mouseleave", function(){
            const cdiv = childClass[i-1];
            cdiv.style.backgroundColor = "";
    })

    element.addEventListener("mouseleave",function(){
        const cdiv = childClass[i-1];
        cdiv.style.fontSize = "";
        cdiv.style.boxShodow = "";
    })
}

