document.addEventListener("DOMContentLoader", function(){
    // Cod to execute when only the HTML document is loaded.
    // this doesn't wait for stylesheets,
    // images, and subframes to finish loadin

    var count = 0;
    var galleryElements = document.getElementsByClassName('product-tile');
    Array.prototype.filter.call(galleryElements, funtion(element) {
        element.textContent = count;
        console.log(element + count);
        count++;
        element.addEventListener("click", funtion(){
            alert("Heyyyy you have clicked me! number " + this.textContent)
            this.classList.toggle("selected");
        })
    })
})