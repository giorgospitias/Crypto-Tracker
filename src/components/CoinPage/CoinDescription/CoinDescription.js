import React from "react";
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
} from "./CoinDescription.styled";
import LinkImage from "../../../assets/Icon-link.png";

function CoinDescription({ data }) {
  return (
    <>
      <DescriptionContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionWrapper>
          <DescriptionParagraph
            dangerouslySetInnerHTML={{
              __html: data?.description?.en,
            }}
          ></DescriptionParagraph>
        </DescriptionWrapper>
        <LinksContainer>
          <LinkWrapper>
            <Link href={data?.links?.blockchain_site[1]} target="_blank">
              <LinkIcon src={LinkImage} alt="link-icon" />
              <LinkText>{data?.links?.blockchain_site[0]}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href={data?.links?.blockchain_site[1]} target="_blank">
              <LinkIcon src={LinkImage} alt="link-icon" />
              <LinkText>{data?.links?.blockchain_site[0]}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href={data?.links?.blockchain_site[1]} target="_blank">
              <LinkIcon src={LinkImage} alt="link-icon" />
              <LinkText>{data?.links?.blockchain_site[0]}</LinkText>
            </Link>
          </LinkWrapper>
        </LinksContainer>
      </DescriptionContainer>
    </>
  );
}

export default CoinDescription;
