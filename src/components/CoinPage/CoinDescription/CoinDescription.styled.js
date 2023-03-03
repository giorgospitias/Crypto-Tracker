import styled from "styled-components";

export const DescriptionContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const DescriptionTitle = styled.div`
  margin: 30px 0px;
  text-align: center;
  font-size: 24px;
  color: ${(props) => props.theme.textColor};
`;

export const DescriptionWrapper = styled.div`
  background-color: ${(props) => props.theme.insideColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 20px 40px;
  font-size: 12px;
  margin: 0px 60px;

  @media (max-width: 1130px) {
    margin: 0px 100px;
  }
`;

export const DescriptionParagraph = styled.p`
  text-align: justify;
  a {
    text-decoration: none;
    color: royalblue;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin: 20px 60px;

  @media (max-width: 1130px) {
    margin: 20px 100px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 20px;
  width: 30%;
  background-color: ${(props) => props.theme.insideColor};
  border-radius: 20px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-contnet: center;
  text-decoration: none;
  width: 80%;
`;

export const LinkIcon = styled.img`
  height: 10px;
`;

export const LinkText = styled.p`
  color: ${(props) => props.theme.textColor};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
  height: 20px;
`;

export const ReadMore = styled.span`
  color: #00fc2a;
  cursor: pointer;
`;
