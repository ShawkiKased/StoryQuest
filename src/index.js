import "./styles/index.scss";
import Story from "./story";


window.addEventListener("DOMContentLoaded", () => {
  // const div = document.querySelector('div');
  // let winWidth = window.innerWidth;
  // let winHeight = window.innerHeight;
  // div.style.width = winWidth + 'px';
  // div.style.height = winHeight + 'px';
  // window.onresize = function() {
  // winWidth = window.innerWidth;
  // winHeight = window.innerHeight;
  // div.style.width = winWidth + 'px';
  // div.style.height = winHeight + 'px';};
  // document.body.classList.add("center");
  // const mainGame = document.createElement("div");
  // mainGame.classList.add("center", "main-game");
  // document.body.appendChild(mainGame);

  let startButton = document.getElementById('start');
  let mainDialog = document.getElementById('mainDialog');

  startButton.addEventListener('click', function onOpen() {
    if (typeof mainDialog.showModal === "function") {
      mainDialog.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
  });
});


// <!DOCTYPE html>
// <html>
//   <head>
//       <meta charset="utf-8" />
//       <title>Gamedev Canvas Workshop</title>
//       <style>
//         * { padding: 0; margin: 0; }
//     	  canvas { background: #eee; display: block; margin: 0 auto; }
//       </style>
//   </head>
//   <body>
    
//     <canvas id="myCanvas" width="1000" height="800"></canvas>
    
//     <script>
//       let canvas = document.getElementById("myCanvas");
//       let ctx = canvas.getContext("2d");
//       let ballRadius = 10;
//       let x = canvas.width / 2;
//       let y = canvas.height - 30;
//       let paddleHeight = 10;
//       let paddleWidth = 150;
//       let paddleX = (canvas.width - paddleWidth) / 2;
//       let rightPressed = false;
//       let leftPressed = false;
//       let brickRowCount = 3;
//       let brickColumnCount = 11;
//       let brickWidth = 75;
//       let brickHeight = 20;
//       let brickPadding = 10;
//       let brickOffsetTop = 30;
//       let brickOffsetLeft = 30;
//       let bricks = [];
//       let dx = 2;
//       let dy = -2;
//       let colors = ["red", "green", "blue", "yellow", "purple", "pink", "white", "black"];
//       let color = "#0095DD";
      
//       for (let c = 0; c < brickColumnCount; c++) {
//         bricks[c] = [];
//         for (let r = 0; r<brickRowCount; r++) {
//           bricks[c][r] = { x: 0, y: 0 };
//         }
//       }

//       function drawBricks() {
//         for (let c = 0; c < brickColumnCount; c++) {
//           for (let r = 0; r < brickRowCount; r++) {
//             let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
//             let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
//             bricks[c][r].x = brickX;
//             bricks[c][r].y = brickY;
//             ctx.beginPath();
//             ctx.rect(brickX, brickY,  brickWidth, brickHeight);
//             ctx.fillStyle = "#0095DD";
//             ctx.fill();
//             ctx.closePath();
//           }
//         }
//       }

//       function drawBall() {
//         ctx.beginPath();
//         ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//         ctx.fillStyle = color;
//         ctx.fill();
//         ctx.closePath();
//       }

//      function drawPaddle() {
//         ctx.beginPath();
//         ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//       }

//       function draw() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         drawBricks();
//         drawBall();
//         drawPaddle();

//         if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//           color = colors[Math.ceil(Math.random() * 8)];
//           dx = -dx;
//         }
//         if (y + dy < ballRadius) {
//           color = colors[Math.ceil(Math.random() * 8)];
//           dy = -dy;
//         } else if(y + dy > canvas.height-ballRadius) {
//           if(x > paddleX && x < paddleX + paddleWidth) {
//             color = colors[Math.ceil(Math.random() * 8)];
//             dy += 1;
//             dy = -dy;

//           } else {
//             alert("GAME OVER");
//             document.location.reload();
//             clearInterval(interval);
//           }
//         }
//         if (rightPressed) {
//           paddleX += 7;
//           if (paddleX + paddleWidth > canvas.width) {
//             paddleX = canvas.width - paddleWidth;
//           }
//         }
//         else if (leftPressed) {
//           paddleX -= 7;
//           if (paddleX < 0) {
//             paddleX = 0;
//           }
//         }

//         x += dx;
//         y += dy;
//       }

//       let interval = setInterval(draw, 10);
//       document.addEventListener("keydown", keyDownHandler, false);
//       document.addEventListener("keyup", keyUpHandler, false);

//       function keyDownHandler(e) {
//         if (e.key == "Right" || e.key == "ArrowRight") {
//           rightPressed = true;
//         }
//         else if (e.key == "Left" || e.key == "ArrowLeft") {
//           leftPressed = true;
//         }
//       }

//       function keyUpHandler(e) {
//         if (e.key == "Right" || e.key == "ArrowRight") {
//           rightPressed = false;
//         }
//         else if (e.key == "Left" || e.key == "ArrowLeft") {
//           leftPressed = false;
//         }
//       }

//       function collisionDetection() {
//         for (let c = 0; c < brickColumnCount; c++) {
//           for (let r = 0; r < brickRowCount; r++) {
//             let b = bricks[c][r];
//             if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
//               dy = -dy;
//             }
//           }
//         }
//       }

//     </script>

//   </body>
// </html>

// < !DOCTYPE html >
//   <html>

//     <head>
//       <meta charset="utf-8">
//         <title>Simple DOM example</title>
//   </head>

//       <body>
//         <section>
//           <img src="dinosaur.png"
//             alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
//             <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
//     </section>
//   </body>

//         <script>
//           const link = document.querySelector('a');
//           link.textContent = 'Mozilla Developer Network';
//           link.href = 'https://developer.mozilla.org';
//           const sect = document.querySelector('section');
//           const para = document.createElement('p');
//           para.textContent = 'We hope you enjoyed the ride.';
//           sect.appendChild(para);
//           const text = document.createTextNode(' — the premier source for web development knowledge.');
//           const linkPara = document.querySelector('p');
//           linkPara.appendChild(text);
//           sect.appendChild(linkPara);
//           // sect.removeChild(linkPara);
//           // linkPara.remove();
//           // linkPara.parentNode.removeChild(linkPara);
//   </script>

// </html>