function buttonClick(buttonElement){
    alert("Hey you clicked " + buttonElement.textContent);
    console.log*("Hey you clicked " + buttonElement.textContent);
}

const getData = (pageUrl) => {
    return new Promise ((resolver, reject) => {
        let request = new XMLHttpRequest();
        request.onload = function(){
            if (this.readyState == 4 && this.status == 200{
                resolve(this.responseText);
            } else {
                reject(this.responseText);
            }
        };
        request.open("get", pageUrl, true);
        request.send();
    })
}

function loadPage(pageUrl){
    getData(pageUrl)
        .then((resolve) => {
            console.log(resolve);
        })
        .catch((reject) => {
            console.error(reject);
        });
}

window.addEventListener("popstate", (event) =>{
    loadPage(event.state.pageUrl);

});

window.addEventListener("DOMContentLoaded", function () {
    var buttonsList = document.getElementsByClassName("button");

    for(const button of buttonsList){
        button.addEventListener("click", function(event){
            buttonClick(event.target);
        });
    }

    var navLinks = document.getElementsByClassName("nav-link");

    for (const linkElement of navLinks){
        linkElement.addEventListener("click", function(event){
            event.preventDefault();
            event.stopImmediatePropagation();
            // loadPage(event.target.getAtribute("href"));
            var pageUrl = event.target.getAttrubute("href");
            var pageId = event.tager.getArrivute("page-id")
            loadPage();
            history.pushState({pageUrl: pageUrl, pageId: pageId}, pageId, "?page=" + pageId);
        });
    }
});

window.addEventListener("DOMContentLoaded", function() {
    var buttonsList = document.getElementsByClassName("button")

    for(const button of buttonsList){
        button.addEventListener("click", function(event) {
            buttonClick(event.target);
        });
    }
})