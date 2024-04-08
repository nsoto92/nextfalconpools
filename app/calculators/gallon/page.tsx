import type { Metadata } from 'next'
import Page from '@/components/Page/Page';

export const metadata: Metadata = {
  title: 'Calculadora de Galones',
};

export default function GallonCalculator() {
  return (
    <>
      <Page>
        <h1>Hello World</h1>
      </Page>
    </>
  );
}
