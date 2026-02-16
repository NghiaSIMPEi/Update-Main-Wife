function upDate(preview) {
    console.log("Mouse active");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    var image = document.getElementById('image');
    image.style.backgroundImage = "url('" + preview.src + "')";
    image.innerHTML = preview.alt;
}

function undo() {
    console.log("Mouse inactive");
    var image = document.getElementById('image');
    image.style.backgroundImage = "url('')";
    image.innerHTML = "Di chuột vào ảnh để xem!";
}

function addTabFocus() {
    console.log("Page loaded. Adding tab focus handling...");
    var images = document.querySelectorAll('.Ảnh vợ tôi img');
    images.forEach(function(img) {
        img.addEventListener('focus', function() {
            upDate(this);
        });
        img.addEventListener('blur', function() {
            undo();
        });
    });
}