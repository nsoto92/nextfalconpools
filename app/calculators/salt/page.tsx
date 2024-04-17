import type { Metadata } from 'next';
import Page from '@/components/Page/Page';
import { SaltCalculator } from '@/components/Calculators/SaltCalculator/SaltCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Salinidad',
};

export default function SaltCalculatorPage() {
  return (
    <>
      <Page>
        <SaltCalculator />
      </Page>
    </>
  );
}
