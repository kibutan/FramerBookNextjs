import { Center, HStack, VStack } from "@chakra-ui/react";
import MyContainer from "./MyContainer";
import CC_01_Tween from "./TheFramerBook/CC_01_Tween";
import CC_02_Spring from "./TheFramerBook/CC_02_Spring";
import CC_03_Duration_based_spring from "./TheFramerBook/CC_03_Duration_based_spring";
import CC_04_Repeat from "./TheFramerBook/CC_04_Repeat";
import Refresh from "./Refresh";
import { useState } from "react";
import CC_05_Reverse from "./TheFramerBook/CC_05_Reverse";
import CC_06_While_hover from "./TheFramerBook/CC_06_While_hover";
import CC_08_While_drag from "./TheFramerBook/CC_08_While_drag";
import CC_09_Cycling_through_states from "./TheFramerBook/CC_09_Cycling_through_states";
import CC_10_Animation_sequence from "./TheFramerBook/CC_10_Animation_sequence";
import CC_11_Drag_Constraints from "./TheFramerBook/CC_11_Drag_Constraints";
import CC_12_Drag_Direction_locking from "./TheFramerBook/CC_12_Drag_Direction_locking";
import CC_13_Drag_Transform from "./TheFramerBook/CC_13_Drag_Transform";
import CC_14_Drag_3D_transform from "./TheFramerBook/CC_14_Drag_3D_transform";
import CC_15_Scroll_Progress from "./TheFramerBook/CC_15_Scroll_Progress";
function TheframerBook() {
  const [count, setCount] = useState(0);
  return (
    <VStack p="10">
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_01_Tween key={count} />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_02_Spring key={count} />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_03_Duration_based_spring key={count} />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_04_Repeat key={count} />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_05_Reverse key={count} />
      </>{" "}
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_06_While_hover />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_08_While_drag />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_09_Cycling_through_states />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_10_Animation_sequence />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_11_Drag_Constraints />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_12_Drag_Direction_locking />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_13_Drag_Transform />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_14_Drag_3D_transform />
      </>
      <>
        <Refresh onClick={() => setCount(count + 1)} />
        <CC_15_Scroll_Progress />
      </>
    </VStack>
  );
}

export default TheframerBook;
