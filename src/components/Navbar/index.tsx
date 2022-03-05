/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Links from './Links';
import Credits from './Credits';
import {
  Container,
  LogoContainer,
  GuideTitle
} from './style';

export default function Navbar() {
  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <a>
            <img src="/images/logo-red-typography.svg" alt="Logo Valorant" />
            <GuideTitle>
              <span></span>
              <p>guide</p>
              <span></span>
            </GuideTitle>
          </a>
        </Link>
      </LogoContainer>

      <Links />

      <Credits />
    </Container>
  );
};