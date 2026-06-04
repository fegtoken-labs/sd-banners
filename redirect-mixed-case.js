document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.pathname;
    var lowerCaseUrl = url.toLowerCase();
    if (url !== lowerCaseUrl) {
        window.location.replace(lowerCaseUrl);
    }
});
