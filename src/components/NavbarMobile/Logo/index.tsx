import { useRouter } from "next/router";
import Image from "next/image";

import { LogoContainer, GuideTitle } from "./style";

const Logo = () => {
  const router = useRouter();

  return (
    <LogoContainer onClick={() => router.push("/")}>
      <Image src={"/images/logo-red-typography.svg"} width={151} height={30} />
      <GuideTitle>
        <span></span> <p>guide</p> <span></span>
      </GuideTitle>
    </LogoContainer>
  );
};

export default Logo;
