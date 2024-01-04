function createAndDragSquare(id, initialTop, initialLeft, width, height, color) {
    const square = document.createElement('div');
    square.id = id;
    square.style.width = width + 'px';
    square.style.height = height + 'px';
    square.style.backgroundColor = color; // Szín beállítása
    square.style.position = 'absolute';
    square.style.top = initialTop + 'px';
    square.style.left = initialLeft + 'px';
    square.style.cursor = 'move';

    let offsetX = 0;
    let offsetY = 0;
    let drag = false;

    square.addEventListener('mousedown', (e) => {
        drag = true;
        offsetX = e.clientX - square.getBoundingClientRect().left;
        offsetY = e.clientY - square.getBoundingClientRect().top;
        square.style.zIndex = '1000';
        square.style.opacity = '0.7';
    });

    document.addEventListener('mouseup', () => {
        drag = false;
        square.style.opacity = '1';
    });

    document.addEventListener('mousemove', (e) => {
        if (drag) {
            square.style.left = e.clientX - offsetX + 'px';
            square.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.body.appendChild(square);

}

// Négyzetek létrehozása különböző színekkel
let topPosition = 20; // Kezdő felső távolság az oldal tetejétől

createAndDragSquare('negyzet1', topPosition, 20, 50, 50, 'red');
createAndDragSquare('negyzet2', topPosition + 60, 20, 150, 100, 'green');
createAndDragSquare('negyzet3', topPosition + 180, 20, 100, 100, 'blue');
createAndDragSquare('negyzet4', topPosition + 300, 20, 150, 50, 'yellow');
createAndDragSquare('negyzet5', topPosition + 390, 20, 100, 50, 'pink');
createAndDragSquare('negyzet6', topPosition + 460, 20, 100, 200, 'aqua');
createAndDragSquare('negyzet7', topPosition + 690, 20, 100, 150, 'brown');
createAndDragSquare('negyzet8', topPosition + 20, 200, 100, 150, 'yellow');
createAndDragSquare('negyzet9', topPosition + 180, 200, 50, 50, 'green');
createAndDragSquare('negyzet10', topPosition + 250, 200, 50, 100, 'blue');
createAndDragSquare('negyzet11', topPosition + 370, 200, 150, 50, 'red');
createAndDragSquare('negyzet12', topPosition + 450, 200, 100, 100, 'purple');
createAndDragSquare('negyzet13', topPosition + 650, 200, 100, 100, 'brown');
createAndDragSquare('negyzet14', topPosition + 800, 200, 100, 100, 'aqua');
createAndDragSquare('negyzet15', topPosition + 20, 350, 50, 200, 'cadetblue');
