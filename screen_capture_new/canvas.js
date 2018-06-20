function drawCanvas() {
    console.log("in drawCanvas");
    console.log(document);
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';

    var canvas = document.createElement("div");
    document.body.appendChild(canvas);
    canvas.setAttribute('id', 'canvas');
    canvas.style.position = 'fixed';
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.right = '0';
    canvas.style.bottom = '0';
    canvas.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    canvas.style.zIndex = '2';
    canvas.style.cursor = 'pointer';

    return canvas;
}

// let user draw the rectangle to obtain coordinates of the image.
function initDraw(canvas) {
    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    };

    var element = null;
    canvas.onmousemove = function (e) {
        setMousePosition(e);
        if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
    }
    canvas.onclick = function (e) {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            // get rectangle size
            const rectangle = document.getElementById('rect');
            var x1, x2, y1, y2;
            x1 = parseInt(rectangle.style.left);
            x2 = x1 + parseInt(rectangle.style.width);
            y2 = parseInt(rectangle.style.top);
            y1 = y2 + parseInt(rectangle.style.height);
            console.log(x1, x2, y1, y2);
            canvas.onclick = null;
            return;
        } else {
            console.log("begun.");
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle'
            element.id = 'rect'
            element.style.border = '1px solid #FF0000';
            element.style.position = 'absolute';
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            canvas.appendChild(element);
            canvas.style.cursor = "crosshair";
        }
    }

}
initDraw(drawCanvas());