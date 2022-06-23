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
    </VStack>
  );
}

export default TheframerBook;
