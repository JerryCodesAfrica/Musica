const scrollThis = document.querySelector("carde");

var  so = scrollThis.scrollLeft = 200;

var pos = {top: 0, left: 0, x: 0, y: 0};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;

    // Scroll the element
    scrollThis.scrollLeft = pos.left - dx;

    document.addEventListener('mousemove', mouseMoveHandler);
};

// const mouseDownHandler = function(e) {
//     // Change the cursor and prevent user from selecting the text
//     scrollThis.style.cursor = 'grabbing';
//     scrollThis.style.userSelect = 'none';
// };

// const mouseUpHandler = function () {
//     document.removeEventListener('mousemove', mouseMoveHandler);
//     document.removeEventListener('mouseup', mouseUpHandler);

//     scrollThis.style.cursor = 'grab';
//     scrollThis.style.removeProperty('user-select');
// };