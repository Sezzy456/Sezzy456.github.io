// document.addEventListener("DOMContentLoader", function(){
//     // Cod to execute when only the HTML document is loaded.
//     // this doesn't wait for stylesheets,
//     // images, and subframes to finish loadin

//     var count = 0;
//     var galleryElements = document.getElementsByClassName('product-tile');
//     Array.prototype.filter.call(galleryElements, funtion(element) {
//         element.textContent = count;
//         console.log(element + count);
//         count++;
//         element.addEventListener("click", funtion(){
//             alert("Heyyyy you have clicked me! number " + this.textContent)
//             this.classList.toggle("selected");
//         })
//     })
// });

function toggleDisplay(toggle) {
  var x = document.getElementsByClassName(toggle);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function searchCheck() {
  var input;
  input = document.getElementsByClassName('search');
  addEventListener("keyup", searchFunction())
}

function searchFunction() {
  // Declare variables
  var input, filter, a, i, txtValue;
  input = document.getElementsByClassName('search');
  filter = input.value.toUpperCase();
  product = document.getElementsByClassName('product__title');
  
  alert('searchFunction - variables declared');
  // Loop through all of the products, and hide those who don't match the search query
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      for (i = 0; i < product.length; i++) {
        a = product[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          product[i].style.display = "";
        } else {
          product[i].style.display = "none";
        }
      }

    }
  });

  
}