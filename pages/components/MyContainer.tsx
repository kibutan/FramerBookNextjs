import { Container } from "@chakra-ui/react";
import MyBox from "./MyBox";
type AppProps = {
  children: JSX.Element;
};

function MyContainer({ children }: AppProps): JSX.Element {
  return (
    <Container maxW="90vw" bgColor="gray.100" centerContent>
      {children}
    </Container>
  );
}

export default MyContainer;
