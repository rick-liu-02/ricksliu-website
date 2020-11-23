var photo = document.getElementById("photo");
var photoAnimationID;

photo.style.opacity = 0;

function photoFadeIn() {
    if (+photo.style.opacity < 1) {
        photo.style.opacity = +photo.style.opacity + 0.01;
        photoAnimationID = requestAnimationFrame(photoFadeIn);
    } else {
        cancelAnimationFrame(photoAnimationID);
    }
}

photoFadeIn();