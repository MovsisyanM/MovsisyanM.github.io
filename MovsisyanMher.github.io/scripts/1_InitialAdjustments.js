// We thank you for showing interest :)
// I exist on Github at github.com/MovsisyanMher/

//Get the canvas element
const canvas = document.querySelector("canvas");

// Get the canvas interface for 2d rendering
const context = canvas.getContext("2d");

// Last recorded mouse location
let mouseLocation = [0,0];

let Theme = [
    [0, 0, 0, 1],        // Black
    [255, 255, 255, 1],  // White
    [16, 16, 16, 1],     // Movsisyan's gray
    [255, 0, 0, 1],      // Red
    [255, 16, 16, 1]    // Blood
];

let Details = {
    Qx: 0,
    Qy: 0,
    Qz: 0,
    dx: 0,
    dy: 0,
    dz: 0,
    airResist: 0.99,
    size: 40 // Px per unit
}