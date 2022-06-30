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
const Card = styled.section`
  width: max-content;
  background-color: #fdc6f6;
  padding: 24px 16px 24px 12px;
  margin: 16px;
  > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const IconContainer = styled.div`
  margin-right: 24px;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0;
  > div {
    display: flex;
    flex-direction: column;
  }
  > div a {
    line-height: 1.5;
    text-decoration: none;
  }
`

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 24px;
  color: #6a1e6c;
`

const Link = styled.a`
  color: #522054;
  font-size: 14px;
`
const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end !important;
  width: 100%;
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
              <img src={manduu} width={48} />
            </IconContainer>
            <TextSection>
              <Title>Pink Manduu</Title>
              <div>
                <Link href='https://pinkmanduu.com' target='_blank'>
                  pinkmanduu.com
                </Link>
                <Link href='mailto:pinkmanduu@gmail.com'>pinkmanduu@gmail.com</Link>
              </div>
            </TextSection>
          </div>
          <SocialContainer>
            <a href='https://www.instagram.com/pink.manduu/' target='_blank'>
              <img src={InstaIcon} width={18} />
            </a>
          </SocialContainer>
        </Card>
      </BodyContainer>
    </Main>
  )
}

export default IndexPage
