import type { Metadata } from 'next';
import Page from '@/components/Page/Page';
import { GallonCalculator } from '@/components/Calculators/GallonCalculator/GallonCalculator';

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
