// Elemek kiválasztása
// @param selector: string az elemet kiválasztó szelektor.
function _q(selector) {
    // Elemek kiválsztása
    var elements = document.querySelectorAll(selector);
    return elements;
}

// Profil befiteli mező megjelenítése
function showProfile(){
    //Megkeressük az elemet
    var div = document.querySelector(".profile-div");
    //console.log(div);
    
    //Ha benne van a show akkor elrejtjük, egyébként megjelenítjük
    if(div.classList.contains("show")){
        //Elvesszük a show osztályt
        div.classList.remove("show")
    } else {
        //Hozzáadjuk a show osztályt
        div.classList.add("show")
    }
}

