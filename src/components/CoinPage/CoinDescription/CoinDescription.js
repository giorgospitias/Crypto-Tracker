import React, { useState } from "react";
import {
  DescriptionContainer,
  DescriptionTitle,
  DescriptionWrapper,
  DescriptionParagraph,
  LinksContainer,
  LinkWrapper,
  Link,
  LinkIcon,
  LinkText,
  ReadMore,
} from "./CoinDescription.styled";
import LinkImage from "../../../assets/Icon-link.png";

function CoinDescription({ data }) {
  const [showText, setShowText] = useState(true);

  let text = `${data?.description?.en.slice(0, 251)}...`;
  if (!showText) text = data?.description?.en;
  const handleClick = () => {
    setShowText(!showText);
  };
  return (
    <>
      <DescriptionContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionWrapper>
          <DescriptionParagraph
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          ></DescriptionParagraph>
          <ReadMore onClick={handleClick}>
            {showText ? "Read more" : "Read less"}
          </ReadMore>
        </DescriptionWrapper>
        <LinksContainer>
          <LinkWrapper>
            <Link href={data?.links?.blockchain_site[0]} target="_blank">
              <LinkIcon src={LinkImage} alt="link-icon" />
              <LinkText>{data?.links?.blockchain_site[0]}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href={data?.links?.blockchain_site[1]} target="_blank">
              <LinkIcon src={LinkImage} alt="link-icon" />
              <LinkText>{data?.links?.blockchain_site[1]}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href={data?.links?.blockchain_site[2]} target="_blank">
              <LinkIcon src={LinkImage} alt="link-icon" />
              <LinkText>{data?.links?.blockchain_site[2]}</LinkText>
            </Link>
          </LinkWrapper>
        </LinksContainer>
      </DescriptionContainer>
    </>
  );
}

export default CoinDescription;
