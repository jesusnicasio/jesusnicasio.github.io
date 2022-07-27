/* Blocking commands on keyboard */

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
}
/* Typing Animation Effect */
var typed = new Typed(".typing",{
    strings:["","Técnico en Capital Humano" , "técnico en Sistemas Informáticos"],/**I can add more... */
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});
var typed = new Typed(".typing-1",{
    strings:[""," Soy un administrador 👨🏻‍💼💼" , "soy un informático ​👨🏻‍💻💻", "Soy un administrador 👨🏻‍💼💼 e informático ​👨🏻‍💻💻"],/**I can add more... */
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

/* / / / / / / / / / / / / / / / / / / /  Aside  / / / / / / / / / / / / / / / / / / / */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

      for(let i=0; i < totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            removeBackSection();

            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
      }
      
      function removeBackSection(){
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("back-section");
        }
      }

      function addBackSection(num){
        allSection[num].classList.add("back-section");
      }
      function showSection(element){
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("active");
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active");
      }

      function updateNav(element){
        for(let i=0; i<totalNavList;i++){
            navList[i].querySelector("a").classList.remove("active");

            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
      }

      document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      });

      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => {
                asideSectionTogglerBtn();
            });
            function asideSectionTogglerBtn(){
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");

                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.toggle("open");
                }
            }

// ================================ Language Switcher =================================== //
document.querySelector(".language-en-switch").addEventListener("click", function(){
    // console.log("Hola, presionaste el boton !")
    location.href = "en/index-en.html";
});

/* =============================== Form Validation =================================== */
    const form = document.getElementById("myForm");
    const inputs = document.querySelectorAll("#myForm input");
    const button = document.getElementById("btn-SendMessage");


    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        asunto: /^[a-zA-Z0-9À-ÿ\s]{1,65}$/ // Letras, números y espacios, pueden llevar acentos.
    }

    const validarFormulario = (e) =>{
        switch (e.target.name){
            case "Nombre":
                if(e.target.value == ""){
                    document.getElementById("name").classList.remove("incorrect");
                    document.getElementById("name").classList.remove("correct");
                    button.style.visibility = "visible";
                }else if(expresiones.nombre.test(e.target.value)){
                    document.getElementById("name").classList.remove("incorrect");
                    document.getElementById("name").classList.add("correct");
                    button.style.visibility = "visible";
                }else{
                    document.getElementById("name").classList.add("incorrect");
                    document.getElementById("name").classList.remove("correct");
                    button.style.visibility = "hidden";
                }
            break;
            case "Correo":
                if(e.target.value == ""){
                    document.getElementById("email").classList.remove("incorrect");
                    document.getElementById("email").classList.remove("correct");
                    button.style.visibility = "visible";
                }else if(expresiones.correo.test(e.target.value)){
                    document.getElementById("email").classList.remove("incorrect");
                    document.getElementById("email").classList.add("correct");
                    button.style.visibility = "visible";
                }else{
                    document.getElementById("email").classList.add("incorrect");
                    document.getElementById("email").classList.remove("correct");
                    button.style.visibility = "hidden";
                }
            break;
            case "Asunto":
                if(e.target.value == ""){
                    document.getElementById("subject").classList.remove("incorrect");
                    document.getElementById("subject").classList.remove("correct");
                    button.style.visibility = "visible";
                }else if(expresiones.asunto.test(e.target.value)){
                    document.getElementById("subject").classList.remove("incorrect");
                    document.getElementById("subject").classList.add("correct");
                    button.style.visibility = "visible";
                }else{
                    document.getElementById("subject").classList.add("incorrect");
                    document.getElementById("subject").classList.remove("correct");
                    button.style.visibility = "hidden";
                }
            break;
        }
    }

    inputs.forEach((input)=>{
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);
    });

    // form.addEventListener("submit", (e)=>{
    //     e.preventDefault();
    // });
