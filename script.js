(function(){
    "use strict";

    const mySlides = [
        "HTMLandCSSfreeCodeCamp.png", 
        "CertificateHTML_CSS.png", 
        "CertificateJavascriptBasics.png", 
        "CertificateMetaIntroFront-end.png", 
        "CertificateMetaJavascript.png", 
        "HTML_CSS_inDepth.png", 
        "ReactBasics.png",
        "MetaVersionControl.png"
    ];
    let currentImage = 0;
    const container = document.getElementById("slideShow");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");

    nextBtn.addEventListener("click", function(e) {
        e.preventDefault();

        currentImage++;
        if(currentImage > (mySlides.length -1)) {
            currentImage = 0;
        }

        const newSlide = document.createElement("img");
        newSlide.src = `images/${mySlides[currentImage]}`;
        newSlide.className = 'animationL';
        newSlide.id = 'mySlide';
        container.appendChild(newSlide);
    
        if(container.children.length > 2) {
            container.removeChild(container.children[0]);
        }

        // slideSwap();
    });

    prevBtn.addEventListener("click", function(e) {
        e.preventDefault();

        currentImage--;
        if(currentImage < 0) {
            currentImage = (mySlides.length - 1);
        }

        const newSlide = document.createElement("img");
        newSlide.src = `images/${mySlides[currentImage]}`;
        newSlide.className = 'animationR';
         newSlide.id = 'mySlide';
         container.appendChild(newSlide);
    
         if(container.children.length > 2) {
             container.removeChild(container.children[0]);
        }

        // slideSwap();
    });

    // function slideSwap() {
    //     const newSlide = document.createElement("img");
    //     newSlide.src = `images/${mySlides[currentImage]}`;
    //     newSlide.className = 'animation';
    //     newSlide.id = 'mySlide';
    //     container.appendChild(newSlide);

    //     if(container.children.length > 2) {
    //         container.removeChild(container.children[0]);
    //     }
    // }

    

})();