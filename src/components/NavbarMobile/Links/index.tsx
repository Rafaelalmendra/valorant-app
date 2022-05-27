import Link from "next/link";
import { useRouter } from "next/router";

//data
import { linksUrl } from "./linksUrl";

//styles
import { LinksContainer, Li, IconClose } from "./style";

//icons
import { X } from "react-feather";

const Links = () => {
  const router = useRouter();

  return (
    <LinksContainer>
      <IconClose>
        <X />
      </IconClose>

      {linksUrl.map((link) => (
        <Link href={link.url} key={link.id}>
          <a>
            <Li
              key={link.id}
              active={router.pathname === link.url ? "active" : ""}
            >
              <i>{link.icon}</i>
              <p>{link.name}</p>
            </Li>
          </a>
        </Link>
      ))}
    </LinksContainer>
  );
};

export default Links;
