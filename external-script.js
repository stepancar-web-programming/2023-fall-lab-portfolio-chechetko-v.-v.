function includeCommonElements() {
    fetch('header.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
    fetch('footer.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}


window.onload = function () {
    includeCommonElements();
};
