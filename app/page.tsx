import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HomeHero } from '@/components/HomeHero/HomeHero';
import Page from '@/components/Page/Page';

export default function HomePage() {
  return (
    <>
      <Page>
        <HomeHero />
        <Welcome />
        <ColorSchemeToggle />
      </Page>
    </>
  );
}
