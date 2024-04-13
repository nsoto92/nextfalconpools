import type { Metadata } from 'next';
import Page from '@/components/Page/Page';
import { GallonCalculator } from '@/components/PoolShapeSelector/GallonCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Galones',
};

export default function GallonCalculatorPage() {
  return (
    <>
      <Page>
        <GallonCalculator />
      </Page>
    </>
  );
}
