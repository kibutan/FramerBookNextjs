import { motion } from "framer-motion";
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export const MyComponent = (): JSX.Element => (
  <motion.div
    style={{
      width: 150,
      height: 150,
      borderRadius: 30,
      backgroundColor: "#f9f",
    }}
    animate={{ rotate: [360, 90, 0], x: [100, -100, 0] }}
    transition={{ ease: "easeOut", duration: 2 }}
  />
);

export const MyComponent2 = (): JSX.Element => (
  <motion.circle
    style={{
      width: 150,
      height: 150,
      borderRadius: 30,
      backgroundColor: "#f9f",
    }}
    initial="hidden"
    animate="visible"
    variants={variants}
    cx={500}
  />
);

function AnimationExample(): JSX.Element {
  return (
    <>
      <MyComponent></MyComponent>
      <MyComponent2></MyComponent2>
    </>
  );
}

export default AnimationExample;
