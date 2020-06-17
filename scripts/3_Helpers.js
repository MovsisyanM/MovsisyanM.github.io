// We thank you for showing interest :)
// We exist on Github at github.com/MovsisyanM/
// Our website: www.movsisyan.info

// Get the distance between two points
const distance = (x, y, x_2, y_2) => {
    return Math.sqrt(Math.pow(x - x_2, 2) + Math.pow(y - y_2, 2));
};

// Turns an array into an rgba color that is interpretable by the canvas
const rgba = (array) => {
    return "rgba(" + array[0] + ", " + array[1] + ", " + array[2] + ", " + array[3] + ")";
}

// Stretches the canvas to be the size of the screen
const Maxout = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    posOfCube = [canvas.width / 2, canvas.height / 2];
    document.documentElement.style.overflow = 'hidden';  // Firefox, Chrome
    document.body.scroll = "no";                         // Internet explorer
}
Maxout();

// Rotates a 2D point about a point
// x: The x of the point that is supposed to be rotated
// y: The y of the point that is supposed to be rotated
// Theta: Angle of rotation in radians
// aboutX, aboutY: the coordinates about which the point is rotated
const Rotate = (x, y, Theta, aboutX, aboutY) => {
    const localizedPoint = [x - aboutX, y - aboutY];
    const rotatedLocalizedPoint =
        [
            (localizedPoint[0] * Math.cos(Theta)) - (localizedPoint[1] * Math.sin(Theta)),
            (localizedPoint[1] * Math.cos(Theta)) + (localizedPoint[0] * Math.sin(Theta))
        ];
    const rotatedGlobalPoint = [rotatedLocalizedPoint[0] + aboutX, rotatedLocalizedPoint[1] + aboutY];
    return rotatedGlobalPoint;
};

// Gets the angle between two points
const angle = (x, y, x_2, y_2) => {
    return Math.atan2((y - y_2), (x_2 - x));
}

// Opens a window with the specified url
const goto = (url) => {
    window.open(url, '_blank');
}