function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

   

    //pegar tag img
    const img = document.querySelector(".profile img");

    //se tiver lightmode add image light
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/profile.png')
       
    }   //subistituir a img
        else{ 
        img.setAttribute('src', './assets/profile.png')
        
    };
}