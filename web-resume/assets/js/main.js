/*-/-/-/-/-/-/-/-/-/-/ SHOW MENU  -/-/-/-/-/-/-/-/-/-/*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    //Validate variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            //we add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*-/-/-/-/-/-/-/-/-/-/ REMOVE MOBILE MENU -/-/-/-/-/-/-/-/-/-/*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*-/-/-/-/-/-/-/-/-/-/ SCROLL SECTIONS ACTIVE LINK -/-/-/-/-/-/-/-/-/-/*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*-/-/-/-/-/-/-/-/-/-/ SHOW SCROLL TOP -/-/-/-/-/-/-/-/-/-/*/

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)


// REDUCE THE SIZE AND PRINT ON AN A4 SHEET
function scaleCV(){
    document.body.classList.add('scale-cv')
}

function removeScale(){
    document.body.classList.remove('scale-cv')
}

/*-/-/-/-/-/-/-/-/-/-/ GENERATE PDF -/-/-/-/-/-/-/-/-/-/*/

let areaCV = document.getElementById('area-cv');

let resumeButton = document.getElementById('resume-button');

// Html2Pdf options
let opt = {
    margin:       0,
    filename:     'Jesus-Nicasio-CV.pdf',
    image:        { type: 'jpeg', quality: 1.0 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'Legal', orientation: 'portrait' },
  };


//Function to call areaCV and HTML2PDF options

function generateResume(){
    html2pdf(areaCV, opt);
}

// When button is clicked, it executes the three functions
resumeButton.addEventListener('click',() =>{

    //1. The class .scale-cv is added to the body, where it reduces the size of the
    scaleCV(); 
    //2. The PDF is generated
    // ekoopmans.github.io/html2pdf.js/
    generateResume();

})

/* BLOCKING */
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
    if(e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)){
    return false;
    }
}