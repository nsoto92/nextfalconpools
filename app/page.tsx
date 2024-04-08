import { HomeHero } from '@/components/HomeHero/HomeHero';
import Page from '@/components/Page/Page';
import { Services } from '@/components/Services/Services';

export default function HomePage() {
  return (
    <>
      <Page>
        <HomeHero />
        <Services />
      </Page>
    </>
  );
}
