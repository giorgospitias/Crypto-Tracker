import styled from "styled-components";

export const DescriptionContainer = styled.div`
  margin: 10px 200px;
`;

export const DescriptionTitle = styled.div`
  margin: 10px 70px;
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
