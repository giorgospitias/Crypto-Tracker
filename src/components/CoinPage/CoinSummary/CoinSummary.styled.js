import styled from "styled-components";

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;
export const SummuryHeader = styled.div`
  margin: 10px 270px;
  font-size: 24px;
  color: ${(props) => props.theme.textColor};
`;

export const SummaryDataContainer = styled.div`
  background-color: ${(props) => props.theme.insideColor};
  width: 320px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 20px 40px;
  margin: 0 5px;
`;

export const LogoWrapper = styled.div`
  background-color: ${(props) => props.theme.navInside};
  padding: 10px 20px;
  margin: 10px 0 30px 0;
`;

export const CoinLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.navInside};
  padding: 5px 20px;
  border-radius: 20px;
  margin: 30px 0;
  text-decoration: none;

  img {
    height: 10px;
  }
`;

export const LinkText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.textColor};
  padding-left: 10px;
`;

export const LinkIcon = styled.img``;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const CurrentPrice = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const GreenNumber = styled.span`
  color: #00fc2a;
  margin-left: 4px;
  font-size: 16px;
`;

export const RedNumber = styled.span`
  color: #fe1040;
  margin-left: 4px;
  font-size: 16px;
`;

export const LayerIconContainer = styled.div`
  margin: 15px 0px;
`;

export const LayerIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const BottomContainer = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AllTimeHighContainer = styled.div`
  margin-bottom: 21px;
  text-align: center;
`;

export const AllTimeLowContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const NumberListContainer = styled.div`
  font-size: 12px;
  width: fit-content;
  margin: 26px 0px;
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const PlasIcon = styled.span`
  background: rgb(33, 114, 229);
  color: white;
  padding: 0px 5px;
  text-align: center;
  margin-right: 10px;
  border-radius: 4px;
`;

export const NumberData = styled.p``;

export const TotalVolume = styled.span`
  color: #0cff66;
`;
export const MaxSupply = styled.span`
  color: #2751ea;
`;
