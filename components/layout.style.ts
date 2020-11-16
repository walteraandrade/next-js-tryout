import styled from "styled-components";
import { BorderRadius, Colors } from "./general-constants";

export const Styled = {
  LayoutWrapper: styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
  `,
  Header: styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  HeaderImage: styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: ${BorderRadius.circle};
  `,
  LinkWrapper: styled.div`
    margin: 3rem 0 0;
  `,
  HTMLATag: styled.a`
    color: ${Colors.LightText};
  `,
};
