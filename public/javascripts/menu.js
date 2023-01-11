    let modal = document.getElementById("modal1");
    let btn = document.getElementById("menu");
    let span = document.getElementsByClassName("close")[0];
    
    btn.onclick = function() {
        modal.style.display = "block";
        modal.style.overflow = 'hidden';
        document.body.style.opacity = "0.7";
        document.body.style.overflow = "hidden";
    }
    span.onclick = function() {
        modal.style.display = "none";
        document.body.style.opacity = "1";
    }
    window.onclick = function(event) {
        if(event.target == modal){
            modal.style.display = "none"
        }
        document.body.style.opacity = "1";
        document.body.style.overflow = "scroll";
    }
    document.getElementById('orderBtn').onclick = function(event) {
        modal.style.display = "none"
    }
    // Modal 2
    let modal2 = document.getElementById("modal2");
    let btn2= document.getElementById("menu-btn");
    let span2 = document.getElementById("span2");

    btn2.onclick = function() {
        modal2.style.display = "block";
        modal2.style.overflow = 'hidden';
        document.body.style.opacity = "0.7";
        document.body.style.overflow = "hidden";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
        document.body.style.opacity = "1";
    }
    window.onclick = function(event) {
        if(event.target == modal2){
            modal2.style.display = "none"
        }
        document.body.style.opacity = "1";
        document.body.style.overflow = "scroll";
    }
    document.getElementById('orderBtn2').onclick = function(event) {
        modal2.style.display = "none"
    }
    // Modal 3
    let modal3 = document.getElementById("modal3");
    let btn3 = document.getElementById("menu-btn3");
    let span3 = document.getElementById("span3");

    btn3.onclick = function() {
        modal3.style.display = "block";
        modal3.style.overflow = 'hidden';
        document.body.style.opacity = "0.7";
        document.body.style.overflow = "hidden";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
        document.body.style.opacity = "1";
    }
    window.onclick = function(event) {
        if(event.target == modal3){
            modal3.style.display = "none"
        }
        document.body.style.opacity = "1";
        document.body.style.overflow = "scroll";
    }
    document.getElementById('orderBtn3').onclick = function(event) {
        modal3.style.display = "none"
    }
    // Modal 4
    let modal4 = document.getElementById("modal4");
    let btn4 = document.getElementById("menu-btn4");
    let span4 = document.getElementById("span4");

    btn4.onclick = function() {
        modal4.style.display = "block";
        modal4.style.overflow = 'hidden';
        document.body.style.opacity = "0.7";
        document.body.style.overflow = "hidden";
    }
    span4.onclick = function() {
        modal4.style.display = "none";
        document.body.style.opacity = "1";
    }
    window.onclick = function(event) {
        if(event.target == modal4){
            modal4.style.display = "none"
        }
        document.body.style.opacity = "1";
        document.body.style.overflow = "scroll";
    }
    document.getElementById('orderBtn4').onclick = function(event) {
        modal4.style.display = "none"
    }

    function popular() {
        document.getElementById('categoryOfMenu-popular').style.display = "block";
    }
    
    // scroll onclick
    // const menuCategories = document.querySelectorAll('.menu_categories[data-goto]');
    // if(menuCategories > 0) {
    //     menuCategories.forEach(menuCategories => {
    //         menuCategories.addEventListener("click", menuCategoriesOnclick);
    //     });
    //     function menuCategoriesOnclick(e) {
    //         const menuCategory = e.target;
    //         if(menuCategory.dataset.goto && document.querySelector(menuCategory.dataset.goto)) {
    //             const gotoBlock = document.querySelector(menuCategory.dataset.goto);
    //             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.getElementsByClassName("navbar").offsetHeight;

    //             window.scrollTo({
    //                 top: gotoBlockValue,
    //                 behavior: "smooth"
    //             });
    //             e.preventDefault();
    //         }
    //     }
    // }