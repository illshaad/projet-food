import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useDataFood } from "../context/context";

export default function Ingredient() {
  const { recipe } = useDataFood();
  console.log(recipe, "response");

  return (
    <div style={{ display: "flex" }}>
      <Card css={{ h: "400px", w: "15vw" }}>
        <Card.Header>
          <Col>
            <Text
              h5
              css={{
                textGradient: "45deg, $blue600 70% , $green400 20%",
              }}
            >
              Titre
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={recipe?.image}
            height="100%"
            width="100%"
            objectFit="cover"
            alt="Cardbackground"
          />
        </Card.Body>
      </Card>
    </div>
  );
}
