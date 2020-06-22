import React from "react";
import MouseParticles from "react-mouse-particles";

function MouseAnimation() {
  return (
    <div>
      <MouseParticles
        g={2.3}
        num={1}
        radius={8}
        life={0.8}
        v={1.2}
        color="random"
        alpha={0.16}
        level={6}
      />
    </div>
  );
}
export default MouseAnimation;
