// We thank you for showing interest :)
// We exist on Github at github.com/MovsisyanM/
// Our website: www.movsisyan.info

//Get the canvas element
const canvas = document.querySelector("canvas");

// Get the canvas interface for 2d rendering
const context = canvas.getContext("2d");

// Last recorded mouse location
let mouseLocation = [0, 0];

let Theme = [
    [0, 0, 0, 1],        // Black
    [255, 255, 255, 1],  // White
    [37, 37, 37, 1],     // Movsisyan's gray
    [255, 0, 0, 1],      // Red
    [255, 16, 16, 1]    // Blood
];

let frameCount = 0;

let Details = {
    Qx: 0,
    Qy: 0,
    Qz: 0,
    dx: 0,
    dy: 0,
    dz: 0,
    airResist: 0.99,
    size: 0.029
}

let Device = {
    phoneLayout: false,
    bottomTextFontSizer: 1 / 33
}
