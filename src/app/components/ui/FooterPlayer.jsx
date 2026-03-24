import { useEffect } from "react";

export function FooterPlayer() {
  useEffect(() => {
    const scene = document.getElementById("fp3Scene");
    const ball = document.getElementById("fp3Ball");
    const shadow = document.getElementById("fp3Shadow");
    const bodyL = document.getElementById("fp3BodyL");
    const bodyR = document.getElementById("fp3BodyR");

    if (!scene || !ball || !shadow || !bodyL || !bodyR) return;

    const BALL_W = 18,
      DURATION = 3200,
      KICK_WINDOW = 0.12;
    let start = null,
      rotation = 0,
      rafId;

    function ease(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function tick(ts) {
      if (!start) start = ts;
      const rawT = ((ts - start) % DURATION) / DURATION;
      const W = scene.offsetWidth;
      const leftStart = 50,
        leftEnd = W - 50 - BALL_W;
      const range = leftEnd - leftStart;
      let t, dir;
      if (rawT < 0.5) {
        t = ease(rawT * 2);
        dir = 1;
      } else {
        t = ease((rawT - 0.5) * 2);
        dir = -1;
      }
      const ballX = dir === 1 ? leftStart + t * range : leftEnd - t * range;
      const speedT = dir === 1 ? rawT * 2 : (rawT - 0.5) * 2;
      const speed = Math.abs(speedT - 0.5) < 0.3 ? 1 : 0.3;
      rotation += dir * speed * 4.5;
      ball.style.left = ballX + "px";
      ball.style.transform = `rotate(${rotation}deg)`;
      const shadowW = 18 - t * 4;
      shadow.style.left = ballX + BALL_W / 2 - shadowW / 2 + "px";
      shadow.style.width = shadowW + "px";
      shadow.style.opacity = 0.25 - t * 0.1;
      const atLeft = rawT > 1 - KICK_WINDOW || rawT < 0.02;
      const atRight = rawT > 0.5 - KICK_WINDOW && rawT < 0.5 + 0.02;
      bodyL.style.transition = "transform 0.06s ease";
      bodyR.style.transition = "transform 0.06s ease";
      if (atLeft) {
        const kT =
          rawT > 0.5 ? (rawT - (1 - KICK_WINDOW)) / KICK_WINDOW : rawT / 0.02;
        bodyL.style.transform = `rotate(${Math.sin(Math.min(kT, 1) * Math.PI) * -38}deg)`;
      } else {
        bodyL.style.transform = "rotate(0deg)";
      }
      if (atRight) {
        const kT = (rawT - (0.5 - KICK_WINDOW)) / KICK_WINDOW;
        bodyR.style.transform = `rotate(${Math.sin(Math.min(kT, 1) * Math.PI) * -38}deg)`;
      } else {
        bodyR.style.transform = "rotate(0deg)";
      }
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId); // cleanup on unmount
  }, []);

  return (
    <>
      <style>{`
        .fp3-scene { position:relative;width:100%;height:80px;overflow:hidden;background:transparent; }
        .fp3-line { position:absolute;bottom:20px;left:0;right:0;height:1px;background:rgba(0,204,102,0.12); }
        .fp3-goal-l,.fp3-goal-r { position:absolute;bottom:16px;width:5px;height:30px;background:rgba(0,204,102,0.18);border:1px solid rgba(0,204,102,0.35);border-radius:2px; }
        .fp3-goal-l{left:44px}.fp3-goal-r{right:44px}
        .fp3-goal-l::before,.fp3-goal-r::before { content:'';position:absolute;top:-4px;left:-4px;right:-4px;height:5px;background:rgba(0,204,102,0.3);border-radius:2px; }
        .fp3-player-l,.fp3-player-r { position:absolute;bottom:18px;width:50px;height:62px; }
        .fp3-player-l{left:0}.fp3-player-r{right:0;transform:scaleX(-1)}
        .fp3-head { position:absolute;top:0;left:14px;width:20px;height:20px;background:#f0c080;border-radius:50%;border:2px solid #c89040; }
        .fp3-hair { position:absolute;top:-2px;left:1px;right:1px;height:9px;background:#3a2008;border-radius:50% 50% 0 0; }
        .fp3-eye-l,.fp3-eye-r { position:absolute;top:8px;width:3px;height:3px;background:#222;border-radius:50%; }
        .fp3-eye-l{left:4px}.fp3-eye-r{right:4px}
        .fp3-mouth { position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:8px;height:3px;border-bottom:1.5px solid #a06020;border-radius:0 0 4px 4px; }
        .fp3-neck { position:absolute;top:18px;left:20px;width:8px;height:5px;background:#d4a060; }
        .fp3-body-wrap { position:absolute;top:21px;left:9px;transform-origin:16px 2px; }
        .fp3-shirt { width:30px;height:28px;background:rgba(0,180,80,0.35);border:1.5px solid rgba(0,220,100,0.55);border-radius:4px 4px 2px 2px;position:relative; }
        .fp3-collar { position:absolute;top:-1px;left:8px;right:8px;height:5px;background:rgba(0,255,120,0.2);border-radius:0 0 4px 4px;border:1px solid rgba(0,220,100,0.4);border-top:none; }
        .fp3-num { position:absolute;top:7px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:700;color:rgba(0,255,100,0.7);font-family:monospace;letter-spacing:-0.5px; }
        .fp3-arm-l,.fp3-arm-r { position:absolute;top:2px;width:7px;height:18px;background:rgba(0,180,80,0.3);border:1px solid rgba(0,220,100,0.4);border-radius:3px; }
        .fp3-arm-l{left:-6px;transform:rotate(8deg);transform-origin:top center}
        .fp3-arm-r{right:-6px;transform:rotate(-8deg);transform-origin:top center}
        .fp3-shorts { width:30px;height:11px;background:rgba(0,30,15,0.45);border:1px solid rgba(0,180,80,0.3);border-radius:0 0 4px 4px;border-top:none; }
        .fp3-leg-l,.fp3-leg-r { position:absolute;bottom:-16px;width:9px;height:17px;background:rgba(0,160,190,0.35);border:1px solid rgba(0,200,220,0.3);border-radius:3px; }
        .fp3-leg-l{left:2px}.fp3-leg-r{right:2px}
        .fp3-sock-l,.fp3-sock-r { position:absolute;bottom:-4px;width:9px;height:6px;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.15); }
        .fp3-sock-l{left:0}.fp3-sock-r{right:0}
        .fp3-boot-l,.fp3-boot-r { position:absolute;bottom:-6px;width:11px;height:7px;background:rgba(30,30,30,0.6);border:1px solid rgba(100,100,100,0.3);border-radius:2px 4px 3px 2px; }
        .fp3-boot-l{left:-1px}.fp3-boot-r{right:-1px}
        .fp3-ball { position:absolute;bottom:20px;width:18px;height:18px;background:rgba(255,255,255,0.9);border-radius:50%;border:2px solid rgba(0,204,102,0.6); }
        .fp3-ball::before { content:'';position:absolute;top:3px;left:3px;width:6px;height:6px;background:rgba(0,120,50,0.45);border-radius:50%; }
        .fp3-ball::after { content:'';position:absolute;bottom:3px;right:3px;width:4px;height:4px;background:rgba(0,80,30,0.3);border-radius:50%; }
        .fp3-shadow { position:absolute;bottom:15px;height:5px;background:rgba(0,0,0,0.2);border-radius:50%; }
      `}</style>

      <div className="fp3-scene" id="fp3Scene">
        <div className="fp3-line" />
        <div className="fp3-goal-l" />
        <div className="fp3-goal-r" />
        <div className="fp3-player-l">
          <div className="fp3-head">
            <div className="fp3-hair" />
            <div className="fp3-eye-l" />
            <div className="fp3-eye-r" />
            <div className="fp3-mouth" />
          </div>
          <div className="fp3-neck" />
          <div className="fp3-body-wrap" id="fp3BodyL">
            <div className="fp3-shirt">
              <div className="fp3-collar" />
              <div className="fp3-num">10</div>
              <div className="fp3-arm-l" />
              <div className="fp3-arm-r" />
              <div className="fp3-leg-l">
                <div className="fp3-sock-l" />
                <div className="fp3-boot-l" />
              </div>
              <div className="fp3-leg-r">
                <div className="fp3-sock-r" />
                <div className="fp3-boot-r" />
              </div>
            </div>
            <div className="fp3-shorts" />
          </div>
        </div>
        <div className="fp3-player-r">
          <div className="fp3-head">
            <div className="fp3-hair" />
            <div className="fp3-eye-l" />
            <div className="fp3-eye-r" />
            <div className="fp3-mouth" />
          </div>
          <div className="fp3-neck" />
          <div className="fp3-body-wrap" id="fp3BodyR">
            <div className="fp3-shirt">
              <div className="fp3-collar" />
              <div className="fp3-num">7</div>
              <div className="fp3-arm-l" />
              <div className="fp3-arm-r" />
              <div className="fp3-leg-l">
                <div className="fp3-sock-l" />
                <div className="fp3-boot-l" />
              </div>
              <div className="fp3-leg-r">
                <div className="fp3-sock-r" />
                <div className="fp3-boot-r" />
              </div>
            </div>
            <div className="fp3-shorts" />
          </div>
        </div>
        <div className="fp3-shadow" id="fp3Shadow" />
        <div className="fp3-ball" id="fp3Ball" />
      </div>
    </>
  );
}
