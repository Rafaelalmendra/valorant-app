/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';

import { linksUrl } from './linksUrl';
import { LinksContainer, Li } from './style';

export default function Links() {
  const router = useRouter();

  return (
    <LinksContainer>
        <ul>
          {linksUrl.map((link) => (
            <>
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
            </>
          ))}
        </ul>
    </LinksContainer>
  );
};