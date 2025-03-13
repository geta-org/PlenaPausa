import React from "react";
import {
  CardBody,
  CardIcon,
  CardWrapper,
  DescriptionText,
  TitleText,
} from "./Card.styles";
import { Button } from "../components";

type Props = {
  fileToDownload: string;
  title: string;
  description: string;
  iconRef: string;
  buttonLabel: string;
  buttonOnClick?: () => void;
};

const Card: React.FC<Props> = ({
  fileToDownload,
  title,
  description,
  iconRef,
  buttonLabel,
  buttonOnClick,
}) => {
  return (
    <CardWrapper>
      {iconRef && <CardIcon src={iconRef} alt={title} width="32" height="32" />}
      <CardBody>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
        {buttonLabel && (
          <a href={fileToDownload} download>
            <Button
              label={buttonLabel}
              onClick={buttonOnClick ? buttonOnClick : () => {}}
              primary={false}
            />
          </a>
        )}
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
