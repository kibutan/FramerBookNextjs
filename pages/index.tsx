import MyBox from "./components/MyBox";
import MyContainer from "./components/MyContainer";
import MyList from "./components/MyList";
import AnimationExample from "./components/API/AnimationExample";
import TheframerBook from "./components/TheframerBook";
export default function Home(): JSX.Element {
  return (
    <>
      <MyContainer>
        {/* <AnimationExample /> */}
        <TheframerBook />
      </MyContainer>
    </>
  );
}
