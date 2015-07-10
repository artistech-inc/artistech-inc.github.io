function newImage(arg) {
    if (document.images) {
        rslt = new Image();
        rslt.src = arg;
        return rslt;
    }
}

function changeImages() {
    if (document.images && (preloadFlag == true)) {
        for (var i = 0; i < changeImages.arguments.length; i += 2) {
            document[changeImages.arguments[i]].src = changeImages.arguments[i + 1];
        }
    }
}

var preloadFlag = false;

function preloadImages() {
    if (document.images) {
        index_07_over = newImage("images/index_07-over.jpg");
        index_10_over = newImage("images/index_10-over.jpg");
        index_11_over = newImage("images/index_11-over.jpg");
        index_12_over = newImage("images/index_12-over.jpg");
        index_13_over = newImage("images/index_13-over.jpg");
        index_14_over = newImage("images/index_14-over.jpg");
        preloadFlag = true;
    }
}
