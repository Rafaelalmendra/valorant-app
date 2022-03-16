import Link from 'next/link';
import { useRouter } from 'next/router';
import { linksUrl } from './linksUrl';
import { LinksContainer, Li } from './style';

const Links = () => {
  const router = useRouter();
  return (
    <LinksContainer>
      {linksUrl.map(link => (
        <Link href={link.url}>
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