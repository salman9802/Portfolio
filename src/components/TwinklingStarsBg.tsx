import React from "react";
import { ThemeClsType } from "../context/theme";

const STAR_COUNT = 25;

class TwinklingStar {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  color: string;
  alphaChange: number;
  drift: { x: number; y: number };

  constructor(
    x: number,
    y: number,
    radius: number,
    alpha: number,
    color: string,
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.alpha = alpha;
    this.color = color;

    this.alphaChange = Math.random() * 0.02 + 0.01; // Randomize twinkling speed
    this.drift = {
      x: (Math.random() - 0.5) * 0.2, // Random small drift in x direction
      y: (Math.random() - 0.5) * 0.2, // Random small drift in y direction
    };
  }
}

const TwinklingStarsBg = ({ theme }: { theme: ThemeClsType | undefined }) => {
  const canvasRef = React.useRef<null | HTMLCanvasElement>(null);
  const stars = React.useMemo<TwinklingStar[]>(() => [], []);

  // Function to generate a random star color (white, yellow, blue)
  function getRandomColor() {
    const darkThemeColors = ["#ffffff", "#f1f1f1", "#ffcc00", "#99ccff"];
    const lightThemeColors = ["#000000", "#444444", "#996600", "#003366"];
    return theme === "light"
      ? lightThemeColors[Math.floor(Math.random() * lightThemeColors.length)]
      : darkThemeColors[Math.floor(Math.random() * darkThemeColors.length)];
  }

  // Function to generate random stars
  function generateStars(canvas: HTMLCanvasElement) {
    for (let i = 0; i < STAR_COUNT; i++) {
      let radius = Math.random() * 1.5 + 0.5; // Star size between 0.5 and 2
      //   let radius = 0.00005;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let alpha = Math.random() * 0.5 + 0.5; // Initial alpha value for transparency
      let color = getRandomColor(); // Random color for each star
      stars.push(new TwinklingStar(x, y, radius, alpha, color));
    }
  }

  // Function to update the twinkling and drifting effect
  function updateStars(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) {
    //   const ctx = canvasRef.current.getContext("2d");
    //   if (ctx === null) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    stars.forEach((star) => {
      // Update the alpha (transparency) to make stars twinkle
      star.alpha += star.alphaChange;

      // Reverse the twinkling direction when alpha reaches limits
      if (star.alpha <= 0.1 || star.alpha >= 1) {
        star.alphaChange = -star.alphaChange;
      }

      // Apply drift effect to simulate slight movement in the sky
      star.x += star.drift.x;
      star.y += star.drift.y;

      // Draw the star with color and alpha value
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${parseInt(
        star.color.slice(1, 3),
        16,
      )}, ${parseInt(star.color.slice(3, 5), 16)}, ${parseInt(
        star.color.slice(5, 7),
        16,
      )}, ${star.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(() => updateStars(canvas, ctx)); // Request the next frame
  }

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    if (canvasRef.current !== null) {
      // Set the canvas size
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    generateStars(canvas);
    updateStars(canvas, ctx);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-40 h-full w-full"
    ></canvas>
  );
};

export default TwinklingStarsBg;
