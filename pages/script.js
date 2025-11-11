const openPopupSidebar = document.getElementById("openPopupSidebar");
const openPopupHeader = document.getElementById("openPopupHeader");
const openPopupFooter = document.getElementById("openPopupFooter");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const viewProducts = document.getElementById("viewProducts");

openPopupSidebar.onclick = function() {
    popup.classList.add("active");
}
openPopupHeader.onclick = function() {
    popup.classList.add("active");
}
openPopupFooter.onclick = function() {
    popup.classList.add("active");
}

viewProducts.onclick = function() {
    // bijvoorbeeld: popup sluiten en naar een pagina scrollen
    popup.classList.remove("active");
    window.location.href = "assortiment.html"; // of jouw gewenste link
}

closePopup.onclick = function() {
    popup.classList.remove("active");
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.classList.remove("active");
    }
}

function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
}

function CopyText() {
    navigator.clipboard.writeText("m.pijnenburg@ll.gymnasiumarnhem.nl");
    alert("E-mail gekopieerd.");
}