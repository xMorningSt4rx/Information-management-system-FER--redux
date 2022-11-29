import React from "react";
import { useEffect } from "react";
import {
    Container,
    Collapsible,
    CollapsibleItem,
    Icon,
} from "react-materialize";
export default function About() {
    useEffect(() => {
        document.title = "About us";
    }, []);
    return (
        <Container>
            <h3>About us</h3>
            <Collapsible accordion={false}>
  <CollapsibleItem
    expanded={false}
    header="Here you can see the film card, which consists of over 100 films from all over the world."
    icon={<Icon>pageview</Icon>}
    node="div"
  >
    Better safe than sorry. That's my motto.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Nations"
    icon={<Icon>place</Icon>}
    node="div"
  >
    Yeah, you do seem to have a little 'shit creek' action going.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Daily News"
    icon={<Icon>fiber_new</Icon>}
    node="div"
  >
    You know, FYI, you can buy a paddle. Did you not plan for this contingency?
  </CollapsibleItem>
</Collapsible>
        </Container>
    );
}
