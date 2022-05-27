import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GuideTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
  text-transform: uppercase;
  p {
    margin: 0 0.35rem 0 0.35rem;
    font-size: 0.875rem;
  }
  span {
    width: 1.875rem;
    height: 2px;
    background: var(--white);
  }
`;
