// Get the modal
var modal = document.getElementById("spotlight-modal");

// Get the images and bind an onclick event to open the modal
var images = document.querySelectorAll('.grid-item img, .photo-item img');
images.forEach(function(img) {
  img.onclick = function(){
    modal.style.display = "block";
    document.getElementById("img01").src = this.src;
    document.getElementById("caption").innerHTML = this.alt;
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
