import type { Metadata } from 'next';
import Page from '@/components/Page/Page';
import { PoolShapeSelectors } from '@/components/PoolShapeSelector/PoolShapeSelector';

export const metadata: Metadata = {
  title: 'Calculadora de Galones',
};

export default function GallonCalculator() {
  return (
    <>
      <Page>
        <h1>Hello World</h1>
        <PoolShapeSelectors />
      </Page>
    </>
  );
}
