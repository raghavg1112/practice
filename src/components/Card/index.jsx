import { Card, Text } from "@nextui-org/react";
import Image from '@/components/Image';
export default function App({text,image}) {
  return (
    <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
      <Card.Body>
        <Image image={image}/>
        <Text>{text||"A hoverable card."}</Text>
      </Card.Body>
    </Card>
  );
}
