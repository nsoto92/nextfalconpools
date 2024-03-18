import { HomeHero } from '@/components/HomeHero/HomeHero';
import Page from '@/components/Page/Page';
import { Services } from '@/components/Services/Services';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import Link from 'next/link';
// import { LOGIN_PATH } from '@/firebase/routes';

export default function HomePage() {
  return (
    <>
      <Page>
        <HomeHero />
        {/* <ColorSchemeToggle /> */}
        <Services />
        {/* <Link href={LOGIN_PATH}>Login</Link> */}
      </Page>
    </>
  );
}
