import Link from 'next/link';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HomeHero } from '@/components/HomeHero/HomeHero';
import Page from '@/components/Page/Page';
import { LOGIN_PATH } from '@/firebase/routes';

export default function HomePage() {
  return (
    <>
      <Page>
        <HomeHero />
        <Welcome />
        <ColorSchemeToggle />
        <Link href={LOGIN_PATH}>Login</Link>
      </Page>
    </>
  );
}
