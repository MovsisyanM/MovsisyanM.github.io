// I thank you for showing interest :)
// I exist on Github at github.com/MovsisyanM/
// My website: www.movsisyan.info

//Get the canvas element
const canvas = document.querySelector("canvas");
const body = document.querySelector("body");

let offset = 0;
let offsetStep = 1 / 40;
let t = 0;
let scrollPath = null;

// Get the canvas interface for 2d rendering
const context = canvas.getContext("2d");

// Last recorded mouse location
let mouseLocation = [0, 0];

let Theme = [
  [0, 0, 0, 1], // Black
  [255, 255, 255, 1], // White
  [37, 37, 37, 1], // Movsisyan's gray
  [97, 219, 255, 1], // Neon bleu
  [255, 16, 16, 1], // Blood
];

let frameCount = 0;

const AnimationScroll = {
  animWasRunning: false,
  animRunning: false,
  dist: 0,
  startFrame: 0,
  framesToRun: 60,
  startPos: 0,
  endPos: 0,
};

let Details = {
  Qx: 0,
  Qy: 0,
  Qz: 0,
  dx: 0,
  dy: 0,
  dz: 0,
  airResist: 0.99,
  size: 15,
};

let Device = {
  phoneLayout: false,
  bottomTextFontSizer: 1 / 33,
};

const getAspectRatio = () => {
  return window.innerWidth / window.innerHeight;
};

// Get the distance between two points
const distance = (x, y, x_2, y_2) => {
  return Math.sqrt(Math.pow(x - x_2, 2) + Math.pow(y - y_2, 2));
};

// Turns an array into an rgba color that is interpretable by the canvas
const rgba = (array) => {
  return (
    "rgba(" +
    array[0] +
    ", " +
    array[1] +
    ", " +
    array[2] +
    ", " +
    array[3] +
    ")"
  );
};

// Stretches the canvas to be the size of the screen
const Maxout = () => {
  canvas.width = Details.size * 10;
  canvas.height = Details.size * 10;

  canvas.style.left = window.innerWidth - canvas.width / 2;
};

// Rotates a 2D point about a point
// x: The x of the point that is supposed to be rotated
// y: The y of the point that is supposed to be rotated
// Theta: Angle of rotation in radians
// aboutX, aboutY: the coordinates about which the point is rotated
const Rotate = (x, y, Theta, aboutX, aboutY) => {
  const localizedPoint = [x - aboutX, y - aboutY];
  const rotatedLocalizedPoint = [
    localizedPoint[0] * Math.cos(Theta) - localizedPoint[1] * Math.sin(Theta),
    localizedPoint[1] * Math.cos(Theta) + localizedPoint[0] * Math.sin(Theta),
  ];
  const rotatedGlobalPoint = [
    rotatedLocalizedPoint[0] + aboutX,
    rotatedLocalizedPoint[1] + aboutY,
  ];
  return rotatedGlobalPoint;
};

// Gets the angle between two points
const angle = (x, y, x_2, y_2) => {
  return Math.atan2(y - y_2, x_2 - x);
};

// Opens a window with the specified url
const goto = (url) => {
  window.open(url, "_blank");
};

// Draws the page
const Cast = () => {
  //#region Physics
  context.clearRect(0, 0, canvas.width, canvas.height);

  Details.Qx += Details.dx;
  Details.Qy += Details.dy;
  Details.Qz += Details.dz;
  Details.dx *= Details.airResist;
  Details.dy *= Details.airResist;
  Details.dz *= Details.airResist;

  // Bezier curve for left right animation
  // P = (1−t)3P1 + 3(1−t)2tP2 +3(1−t)t2P3 + t3P4
  let animCurve = [
    [1, 1],
    [1, 1],
    [0, 0],
    [0, 0],
  ];
  if (AnimationScroll.animRunning) {
    if (AnimationScroll.animWasRunning) {
      t =
        (frameCount - AnimationScroll.startFrame) / AnimationScroll.framesToRun;
      if (
        AnimationScroll.startFrame + AnimationScroll.framesToRun <=
        frameCount
      ) {
        AnimationScroll.animWasRunning = false;
        AnimationScroll.animRunning = false;
        console.log(
          "dist " + AnimationScroll.dist + " start " + AnimationScroll.startPos
        );
      } else {
        window.scrollTo(
          0,
          1 *
            easeInOut(
              frameCount - AnimationScroll.startFrame,
              AnimationScroll.startPos,
              AnimationScroll.dist,
              AnimationScroll.framesToRun
            )
        );
      }
    } else {
      console.log(AnimationScroll);
      AnimationScroll.animWasRunning = true;
      AnimationScroll.startFrame = frameCount;
      AnimationScroll.startPos = window.pageYOffset;
      AnimationScroll.dist = AnimationScroll.endPos;
    }
  }

  function easeInOut(time, start, change, duration) {
    time /= duration / 2;
    if (time < 1) return (change / 2) * time * time + start;
    time--;
    return (-change / 2) * (time * (time - 2) - 1) + start;
  }

  //Details.size = Details.size + Math.cos(frameCount / 120) * 0.01;

  frameCount++;
  getAspectRatio() <= 1
    ? (Device.phoneLayout = true)
    : (Device.phoneLayout = false);

  if (Device.phoneLayout) {
    for (
      let i = 0;
      i < document.getElementsByClassName("section").length;
      i++
    ) {
      const element = document.getElementsByClassName("section")[i];
      element.className = element.className.replace(/\bsection\b/g, "sPhone");
    }
  } else {
    for (let i = 0; i < document.getElementsByClassName("sPhone").length; i++) {
      const element = document.getElementsByClassName("sPhone")[i];
      element.className = element.className.replace(/\bsPhone\b/g, "section");
    }
  }

  //#endregion Physics

  M(
    canvas.width / 2,
    canvas.height / 2,
    Details.size,
    rgba(Theme[2]),
    Details.Qx,
    -Details.Qy,
    Details.Qz,
    context
  ).draw();
};

//#region Event handlers

// Track the mouse movement of the player
document.addEventListener("mousemove", onMUpdate, false);
// Track clicks
//document.addEventListener("mousedown", onMouse, false);
// Track the mousewheel of the player
document.addEventListener("wheel", onWUpdate, false);
// Track Slides
document.addEventListener("touchmove", onSlide, false);

// This gets hoisted
function onMUpdate(e) {
  Details.dy += Math.min(0.4, (e.pageX - mouseLocation[0]) * 0.0002);
  Details.dx += Math.min(0.4, (e.pageY - mouseLocation[1]) * 0.0002);

  // Account the last recorded mouse position
  mouseLocation = [e.pageX, e.pageY];
}

function onWUpdate(e) {
  // e.deltaY = 3 for wheelup
  // e.deltaY = -3 for wheeldown

  Details.dz += (e.deltaY < 0 ? -1 : 1) * 0.01;
}

function onSlide(e) {
  Details.dy += Math.min(0.4, (e.touches[0].clientX - mouseLocation[0]) * 0.002);
  Details.dx += Math.min(0.4, (e.touches[0].clientY - mouseLocation[1]) * 0.002);

  // Account the last recorded mouse position
  mouseLocation = [e.touches[0].clientX, e.touches[0].clientY];
}

const M = (posX, posY, size, color, Qx, Qy, Qz, context) => {
  const m = {
    x: posX,
    y: posY,
    size: size,
    color: color,
    Qx: Qx + Math.PI,
    Qy: Qy,
    Qz: Qz,
    context: context,
    verts: [
      [-3 * size, 3 * size, size * 0.5], // Left Bottom Front
      [-3 * size, 3 * size, size * -0.5], // Left Bottom Back

      [-4 * size, 2 * size, size * 0.5], // Left Lower Front
      [-4 * size, 2 * size, size * -0.5], // Left Lower Back

      [-4 * size, -2 * size, size * 0.5], // Left Upper Front
      [-4 * size, -2 * size, size * -0.5], // Left Upper Back

      [-3 * size, -3 * size, size * 0.5], // Left Top Front
      [-3 * size, -3 * size, size * -0.5], // Left Top Back

      [0, 0, size * 0.5], // Middle Front
      [0, 0, size * -0.5], // Middle Back

      [3 * size, -3 * size, size * 0.5], // Right Top Front
      [3 * size, -3 * size, size * -0.5], // Right Top Back

      [4 * size, -2 * size, size * 0.5], // Right Upper Front
      [4 * size, -2 * size, size * -0.5], // Right Upper Back

      [4 * size, 2 * size, size * 0.5], // Right Lower Front
      [4 * size, 2 * size, size * -0.5], // Right Lower Back

      [3 * size, 3 * size, size * 0.5], // Right Bottom Front
      [3 * size, 3 * size, size * -0.5], // Right Bottom Back

      [3 * size, -size, size * 0.5], // Right Uppity Front
      [3 * size, -size, size * -0.5], // Right Uppity Back

      [0, 2 * size, size * 0.5], // Middle Front
      [0, 2 * size, size * -0.5], // Middle Back

      [-3 * size, -size, size * 0.5], // Left Uppity Front
      [-3 * size, -size, size * -0.5], // Left Uppity Back
    ],
    project: (x, y, z) => {
      // x
      let xRotQz = x * Math.cos(m.Qz) + y * Math.sin(m.Qz);

      // y
      let yRotQz = y * Math.cos(m.Qz) - x * Math.sin(m.Qz);

      // z
      let zRotQz = z;

      // x
      let xRotQzQx = xRotQz;

      // y
      let yRotQzQx = yRotQz * Math.cos(m.Qx) + zRotQz * Math.sin(m.Qx);

      // z
      let zRotQzQx = zRotQz * Math.cos(m.Qx) - yRotQz * Math.sin(m.Qx);

      // x
      let xRotQzQxQy = xRotQzQx * Math.cos(m.Qy) + zRotQzQx * Math.sin(m.Qy);

      // y
      let yRotQzQxQy = yRotQzQx;

      return [xRotQzQxQy, yRotQzQxQy];
    },
    formXYtoPixels: (x, y) => {
      return [x + posX, -y + posY];
    },
    draw: () => {
      //#region Vertecies
      context.fillStyle = color;
      context.strokeStyle = color;
      var verticesPixLoc = [];
      for (let i = 0; i < m.verts.length; i++) {
        // locations
        let xyLoc = m.project(m.verts[i][0], m.verts[i][1], m.verts[i][2]);
        let pixLoc = m.formXYtoPixels(xyLoc[0], xyLoc[1]);
        verticesPixLoc.push(pixLoc);
        m.context.beginPath();
        m.context.arc(pixLoc[0], pixLoc[1], 0, 0, 2 * Math.PI, false);
        m.context.fill();
        m.context.stroke();
      }
      //#endregion Vertecies

      //#region Edges

      m.context.strokeStyle = color;

      // Depth Edges
      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
      m.context.lineTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
      m.context.lineTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
      m.context.lineTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
      m.context.lineTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[8][0], verticesPixLoc[8][1]);
      m.context.lineTo(verticesPixLoc[9][0], verticesPixLoc[9][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[10][0], verticesPixLoc[10][1]);
      m.context.lineTo(verticesPixLoc[11][0], verticesPixLoc[11][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[12][0], verticesPixLoc[12][1]);
      m.context.lineTo(verticesPixLoc[13][0], verticesPixLoc[13][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[14][0], verticesPixLoc[14][1]);
      m.context.lineTo(verticesPixLoc[15][0], verticesPixLoc[15][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[16][0], verticesPixLoc[16][1]);
      m.context.lineTo(verticesPixLoc[17][0], verticesPixLoc[17][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[18][0], verticesPixLoc[18][1]);
      m.context.lineTo(verticesPixLoc[19][0], verticesPixLoc[19][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[20][0], verticesPixLoc[20][1]);
      m.context.lineTo(verticesPixLoc[21][0], verticesPixLoc[21][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[22][0], verticesPixLoc[22][1]);
      m.context.lineTo(verticesPixLoc[23][0], verticesPixLoc[23][1]);
      m.context.stroke();

      // Outline Edges Front
      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
      m.context.lineTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
      m.context.lineTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
      m.context.lineTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
      m.context.lineTo(verticesPixLoc[8][0], verticesPixLoc[8][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[8][0], verticesPixLoc[8][1]);
      m.context.lineTo(verticesPixLoc[10][0], verticesPixLoc[10][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[10][0], verticesPixLoc[10][1]);
      m.context.lineTo(verticesPixLoc[12][0], verticesPixLoc[12][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[12][0], verticesPixLoc[12][1]);
      m.context.lineTo(verticesPixLoc[14][0], verticesPixLoc[14][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[14][0], verticesPixLoc[14][1]);
      m.context.lineTo(verticesPixLoc[16][0], verticesPixLoc[16][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[16][0], verticesPixLoc[16][1]);
      m.context.lineTo(verticesPixLoc[18][0], verticesPixLoc[18][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[18][0], verticesPixLoc[18][1]);
      m.context.lineTo(verticesPixLoc[20][0], verticesPixLoc[20][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[20][0], verticesPixLoc[20][1]);
      m.context.lineTo(verticesPixLoc[22][0], verticesPixLoc[22][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[22][0], verticesPixLoc[22][1]);
      m.context.lineTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
      m.context.stroke();

      // Outline Edges Back
      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
      m.context.lineTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
      m.context.lineTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
      m.context.lineTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
      m.context.lineTo(verticesPixLoc[9][0], verticesPixLoc[9][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[9][0], verticesPixLoc[9][1]);
      m.context.lineTo(verticesPixLoc[11][0], verticesPixLoc[11][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[11][0], verticesPixLoc[11][1]);
      m.context.lineTo(verticesPixLoc[13][0], verticesPixLoc[13][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[13][0], verticesPixLoc[13][1]);
      m.context.lineTo(verticesPixLoc[15][0], verticesPixLoc[15][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[15][0], verticesPixLoc[15][1]);
      m.context.lineTo(verticesPixLoc[17][0], verticesPixLoc[17][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[17][0], verticesPixLoc[17][1]);
      m.context.lineTo(verticesPixLoc[19][0], verticesPixLoc[19][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[19][0], verticesPixLoc[19][1]);
      m.context.lineTo(verticesPixLoc[21][0], verticesPixLoc[21][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[21][0], verticesPixLoc[21][1]);
      m.context.lineTo(verticesPixLoc[23][0], verticesPixLoc[23][1]);
      m.context.stroke();

      m.context.beginPath();
      m.context.moveTo(verticesPixLoc[23][0], verticesPixLoc[23][1]);
      m.context.lineTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
      m.context.stroke();

      //#endregion Edges
    },
  };

  return m;
};

function Run() {
  Maxout();
  Cast();

  window.requestAnimationFrame(Run);
}

Run();

////#region Projects button
const btnProjects = document.getElementsByTagName("button")[0];

const smoothScroll = (destination, frames) => {
  var dest = document.querySelector(destination);
  var destPos = dest.getBoundingClientRect().top;
  var startPos = window.pageYOffset;
  var distance = destPos - startPos;
  AnimationScroll.animRunning = true;
  AnimationScroll.dist = distance;
  AnimationScroll.framesToRun = frames;
  AnimationScroll.startPos = startPos;
  AnimationScroll.endPos = destPos;
  console.log([dest, destPos, startPos, distance, frames]);
};

btnProjects.addEventListener("click", (e) => {
  let x = e.clientX + e.target.offsetLeft;
  let y = e.clientY + e.target.offsetTop;

  let ripple = document.createElement("span");
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  btnProjects.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000);
  smoothScroll(".projects", 60);
});

//#endregion

//#endregion Event handlers
