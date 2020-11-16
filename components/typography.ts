import styled from "styled-components";
import { Colors } from "./general-constants";

export const Typography = {
  H2XLarge: styled.h2`
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  `,
  H2Large: styled.h2`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  `,
  H1XLarge: styled.h1`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  `,
  Body: styled.p``,
  H3LightColor: styled.h3`
    font-size: 1.2rem;
    line-height: 1.3;
    font-weight: 400;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
    color: ${Colors.LightText};
  `,
};
