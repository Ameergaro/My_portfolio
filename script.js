function showSection(sectionId) {
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    
document.getElementById("contact").style.display = "none";

document.getElementById(sectionId).style.display = "block";
}