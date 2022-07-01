import * as React from "react"
import styled from "styled-components"
import manduu from "../images/manduu.png"
import manduuDracura from "../images/manduu-dracura.png"
import InstaIcon from "../images/instaicon.inline.svg"

const Main = styled.main`
  background: linear-gradient(
    180deg,
    #c17bf8 2.08%,
    rgba(185, 184, 251, 0.539214) 32.29%,
    rgba(223, 224, 253, 0.56) 60.94%,
    rgba(248, 223, 252, 0.9) 79.17%
  );
  height: 100vh;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 12px;
  box-sizing: border-box;
  align-items: center;
  display: none;
`
const ShopNowBtn = styled.button`
  background: none;
  border: 0;
  border-radius: 9999px;
  background: white;
  padding: 0 12px;
  height: 34px;
`

const IconContainer = styled.div`
  margin-right: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.section`
  width: max-content;
  background-color: #fdc6f6;
  padding: 24px 24px 24px 12px;
  margin: 16px;
  > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 475px) {
    width: 100%;
    > div {
      justify-content: center;
    }
  }
  @media screen and (max-width: 314px) {
    width: 100%;
    > div {
      justify-content: flex-start;
    }
    > div > div {
      width: 100%;
    }
    ${IconContainer} {
      width: 100%;
      justify-content: flex-start;
    }
  }
`
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0;
  > div a {
    line-height: 1.5;
    text-decoration: none;
  }
`

const Title = styled.div`
  font-weight: 600;

  color: #6a1e6c;
`

const Link = styled.a`
  color: #522054;
  font-size: 14px;
`
const SocialContainer = styled.div`
  display: flex;
  // justify-content: flex-end !important;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const IndexPage = () => {
  return (
    <Main>
      <Header>
        <img src={manduuDracura} width={60} />
        <ShopNowBtn>Shop now</ShopNowBtn>
      </Header>
      <BodyContainer>
        <Card>
          <div>
            <IconContainer>
              <img src={manduu} width={60} />
            </IconContainer>
            <TextSection>
              <TitleContainer>
                <Title>Pink Manduu</Title>
                <SocialContainer>
                  <a href='https://www.instagram.com/pink.manduu/' target='_blank'>
                    <InstaIcon width={18} />
                  </a>
                </SocialContainer>
              </TitleContainer>
              <LinksContainer>
                <Link href='https://pinkmanduu.com' target='_blank'>
                  pinkmanduu.com
                </Link>
                <Link href='mailto:pinkmanduu@gmail.com'>pinkmanduu@gmail.com</Link>
              </LinksContainer>
            </TextSection>
          </div>
        </Card>
      </BodyContainer>
    </Main>
  )
}

export default IndexPage
