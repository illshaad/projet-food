import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useDataFood } from "../context/context";
import {
  AiOutlineCaretRight,
  AiOutlineCaretLeft,
  AiFillStar,
} from "react-icons/ai";

export default function Food({ nextStep }: any) {
  const { response, setRecipe } = useDataFood();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [recipeSlice, setRecipeSlice] = useState<any>([]);

  useEffect(() => {
    //group the response elements by groups of 3 elements in the newArray.
    let newArray: any = [];
    for (let i = 0; i < response.length; i += 3) {
      newArray.push(response.slice(i, i + 3));
    }
    setRecipeSlice(newArray);
  }, [response]);

  const nextIngredients = () => {
    const newIndex = currentIndex + 1;
    if (newIndex >= recipeSlice.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const prevIngredients = () => {
    const newIndex = currentIndex - 1;
    if (newIndex < 0) {
      setCurrentIndex(recipeSlice.length - 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  // useQuery({
  //   queryKey: ["getDetailsIngredients"],
  //   queryFn: () => getIngredients(),
  //   enabled: false,
  // });

  const redirection = (recipeInformatioN: []) => {
    if (recipeInformatioN) {
      setRecipe(recipeInformatioN);
      nextStep(2);
    }
  };

  return (
    <div className="animate__animated animate__lightSpeedInRight flexElementBadge">
      <div className="arrow" onClick={() => prevIngredients()}>
        <AiOutlineCaretLeft style={{ fontSize: 12 }} />
      </div>

      {recipeSlice[currentIndex]?.map((recipe: any, i: any) => (
        <Card key={i} css={{ h: "400px", w: "15vw" }}>
          <Card.Header
            css={{
              position: "absolute",
              background: "red",
              bgBlur: "#ffffff16",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              top: 0,
              zIndex: 1,
            }}
          >
            <Col>
              <Text
                h5
                css={{
                  textGradient: "45deg, $blue600 70% , $green400 20%",
                }}
              >
                {recipe.title}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={recipe.image}
              height="100%"
              width="100%"
              // objectFit="cover"
              alt="Cardbackground"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff16",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
            }}
          >
            <Row align="center" justify="flex-start">
              <Col>
                <Text color="white" size={14} weight="bold">
                  {recipe.likes}
                </Text>
                <AiFillStar style={{ fontSize: 14, color: "yellow" }} />
              </Col>

              <Col>
                <Row>
                  <Button light onClick={() => redirection(recipe)}>
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
      <div className="arrow" onClick={() => nextIngredients()}>
        <AiOutlineCaretRight style={{ fontSize: 12 }} />
      </div>
    </div>
  );
}
