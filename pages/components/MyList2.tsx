import { List, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const list = { hidden: { opacity: 0.5 } };
const item = { hidden: { x: -10, opacity: 0.5 } };

function MyList2(): JSX.Element {
  return (
    <List>
      <motion.ul animate="hidden" variants={list}>
        <ListItem as={motion.li} variants={item}>
          HOGE
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          HUGA
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          HAGE
        </ListItem>
      </motion.ul>
    </List>
  );
}

export default MyList2;
