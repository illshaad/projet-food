import { Card, Col, Row, Button, Text, Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useDataFood } from "../context/context";

export default function Food() {
  const { response } = useDataFood();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [arraySlice, setArraySlice] = useState<any>([]);

  useEffect(() => {
    let newArray: any = [];
    for (let i = 0; i < response?.length; i += 3) {
      newArray.push(response?.slice(i, i + 3));
    }
    setArraySlice(newArray);
  }, [response]);

  const nextIngredients = () => {
    setCurrentIndex((currentIndex + 1) % arraySlice.length);
  };

  const prevIngredients = () => {
    setCurrentIndex((currentIndex - 1 + arraySlice.length) % arraySlice.length);
  };

  return (
    <div className="animate__animated animate__lightSpeedInRight flexElementBadge">
      <Button onClick={() => prevIngredients()}>gauche</Button>
      {arraySlice[currentIndex]?.map((e: any, i: any) => (
        <Card key={i} css={{ h: "400px", w: "15vw" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text h3 color="black">
                {e.title}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={e.image}
              height="100%"
              width="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff16",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row align="center" justify="flex-start">
              <Col>
                <Text color="white" size={12} weight="bold">
                  {e.likes}
                </Text>
              </Col>
              <Col>
                <Image width={12} src="./star.png" alt="Default Image" />
              </Col>
              <Col>
                <Row>
                  <Button light>
                    <Text
                      css={{
                        textGradient: "45deg, $blue600 70% , $green400 20%",
                      }}
                      size={14}
                      weight="bold"
                    >
                      Voir la recette
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      ))}
      <Button onClick={() => nextIngredients()}>Droite</Button>
    </div>
  );
}
