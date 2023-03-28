import { Card, Text, Link } from "@nextui-org/react";
import SelectComponant from "./select";

interface Props {
  titre: string;
  subTitle: string;
}

export default function CardComposant({ titre, subTitle }: Props) {
  return (
    <Card variant="shadow" css={{ mw: "600px" }}>
      <Text
        size={50}
        css={{
          textGradient: "45deg, $blue600 55% , $green400 30%",
        }}
        weight="bold"
      >
        {titre}
      </Text>

      <Text css={{ color: "$accents8" }} size={16} weight="bold">
        {subTitle}
      </Text>
      <SelectComponant />
    </Card>
  );
}
