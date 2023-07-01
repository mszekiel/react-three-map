import { Box, Stats } from "@react-three/drei";
import { useState } from "react";
import { Canvas } from "react-three-map";
import { MathUtils } from "three";
import { StoryMap } from "./story-map";

export function Default() {

  const [hovered, hover] = useState(false);

  return <div style={{ height: '100vh', position: 'relative' }}>
    <StoryMap latitude={51} longitude={0} zoom={13}>
      <Canvas latitude={51} longitude={0} frameloop="demand">
        <Box
          args={[500, 500, 500]}
          position={[0, 250, 0]}
          rotation={[0, 45 * MathUtils.DEG2RAD, 0]}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          material-color={hovered ? 'purple' : 'orange'}
        />
        <Stats />
      </Canvas>
    </StoryMap>
    <div style={{ position: 'absolute', top: 0, right: 0, left: 80, background: '#ffffffc2', padding: 5 }}>
      Hover over the box, it will only render once to change colour, or when you move the camera. Look at the stats to confirm.
    </div>
  </div>
}