import { useRef, useEffect, useCallback, useState } from "react";

import styles from "../styles/Particles.module.css";

const Particles = () => {
  const canvasRef = useRef(null);

  const [mouse, setMouse] = useState({ x: undefined, y: undefined });
  const coords = (e) => {
    e.preventDefault();
    setMouse({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  //   const drawCircle = useCallback(
  //     (ctx) => {
  //       ctx.fillStyle = "white";
  //       ctx.beginPath();
  //       ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
  //       ctx.fill();
  //     },
  //     [mouse]
  //   );
  useEffect(() => {
    const canvas = canvasRef.current;
    //canvas.width = window.innerWidth;

    const ctx = canvas.getContext("2d");
    const particlesArray = [];
    let animationFrameId;
    const resizeCanvasToDisplaySize = (canvas) => {
      const { width, height } = canvas.getBoundingClientRect();

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true; // here you can return some usefull information like delta width and delta height instead of just true
        // this information can be used in the next redraw...
      }

      return false;
    };

    class Particle {
      constructor() {
        //this.x = mouse.x;
        //this.y = mouse.y;
        const lerp = (x, y, a) => x * (1 - a) + y * a;
        const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
        const invlerp = (x, y, a) => clamp((a - x) / (y - x));
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = 0;
        this.speedY = Math.random() - 1.5;
        const percentageFirstHalfCanvasWidth = invlerp(
          0,
          canvas.width / 2,
          this.x
        );
        const percentageSecondHalfCanvasWidth = invlerp(
          canvas.width / 2,
          canvas.width,
          this.x
        );

        if (this.x < canvas.width / 2) {
          this.hue = lerp(322, 52, percentageFirstHalfCanvasWidth);
        } else {
          this.hue = lerp(52, 178, percentageSecondHalfCanvasWidth);
        }
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size > 0.2 && (this.size -= 0.1);
      }
      draw() {
        ctx.fillStyle = "hsl(" + this.hue + ", 100%, 76%)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const init = () => {
      for (let i = 0; i < Math.random() * 15 + 5; i++) {
        particlesArray.push(new Particle());
      }
    };

    setInterval(init, 500);
    console.log(particlesArray);
    const handleParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        resizeCanvasToDisplaySize(canvas);
        particlesArray[i].draw();
        if (particlesArray[i].size < 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
      //ctx.fillRect(0, 0, canvas.width, canvas.height);
      handleParticles();

      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);
  return (
    <section className={styles.particles}>
      <canvas id={styles.canvas1} ref={canvasRef} onClick={coords}></canvas>
    </section>
  );
};

export default Particles;
