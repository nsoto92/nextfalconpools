import '@mantine/core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { AuthContextProvider } from '@/firebase/context/AuthContext';

export const metadata = {
  type: 'website',
  title: {
    template: '%s | Falcón Pools Puerto Rico',
    default: 'Falcón Pools Puerto Rico | Construcción y Remodelación de Piscinas',
  },
  description: 'Transforma tu oasis en el patio trasero con nuestros servicios expertos de construcción y remodelación de piscinas. En Falcon Pools Puerto Rico, nos especializamos en crear impresionantes piscinas a medida según tu visión única. Desde el diseño hasta la instalación, nuestro equipo capacitado aporta años de experiencia y un compromiso con la excelencia. Ya sea que sueñes con una lujosa piscina personalizada, renovaciones refrescantes o reparaciones confiables, somos tu compañía de piscinas de confianza. Sumérgete en un mundo de posibilidades infinitas y haz una gran impresión con nuestras soluciones de piscinas de primera categoría. ¡Contáctanos hoy mismo para una consulta!',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://falconpoolspr.com'),
  openGraph: {
    title: 'Falcón Pools Puerto Rico | Construcción y Remodelación de Piscinas',
    description: 'Transforma tu oasis en el patio trasero con nuestros servicios expertos de construcción y remodelación de piscinas. En Falcon Pools Puerto Rico, nos especializamos en crear impresionantes piscinas a medida según tu visión única. Desde el diseño hasta la instalación, nuestro equipo capacitado aporta años de experiencia y un compromiso con la excelencia. Ya sea que sueñes con una lujosa piscina personalizada, renovaciones refrescantes o reparaciones confiables, somos tu compañía de piscinas de confianza. Sumérgete en un mundo de posibilidades infinitas y haz una gran impresión con nuestras soluciones de piscinas de primera categoría. ¡Contáctanos hoy mismo para una consulta!',
    url: 'https://falconpoolspr.com',
    siteName: 'Falcón Pools Puerto Rico',
    images: '/construccion.jpg',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    userAgent: '*',
    disallow: '',
  },
  author: 'Norbert Soto',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AuthContextProvider>
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
        </AuthContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
