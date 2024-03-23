import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { Icon3dCubeSphere, IconPool, IconBackhoe, IconBuildingPavilion, IconCooker, IconWavesElectricity } from '@tabler/icons-react';
import styles from './Services.module.css';

export const SERVICEDATA = [
  {
    icon: Icon3dCubeSphere,
    title: 'Diseño 3D',
    description:
      'En Falcón Pools, ofrecemos diseño 3D con Pool Studio para que los clientes vean su proyecto antes de construir. Creamos diseños personalizados que se ajustan a sus necesidades.',
  },
  {
    icon: IconBackhoe,
    title: 'Construcción de Piscinas',
    description:
      'Nos especializamos en construir piscinas personalizadas de alta calidad para nuestros clientes. Nuestro equipo profesional se encarga de todo con la máxima calidad y atención.',
  },
  {
    icon: IconPool,
    title: 'Remodelación de Piscinas',
    description:
      'Si ya tienes una piscina, pero necesitas modernizar, ya sea que necesites una renovación completa o simplemente quieras añadir características nuevas, nuestro equipo de profesionales se encargará de cada detalle para que tu piscina se vea como nueva.',
  },
  {
    title: 'Cocinas de Exterior',
    icon: IconCooker,
    description:
      'Nos especializamos en cocinas personalizadas que se ajustan a las necesidades y gustos de nuestros clientes para que puedan disfrutar de la vida al aire libre. Trabajamos accesorios como: BBQ, horno de pizza, fregadero, receptáculos, nevera, vinera, hielera, tope de barra, gavetas, etc.',
  },
  {
    icon: IconBuildingPavilion,
    title: 'Terrazas',
    description:
      'Trabajamos estrechamente con nuestros clientes para entender sus visiones y deseos. Nuestra amplia experiencia en la industria de la construcción, combinada con nuestra dedicación a la excelencia en el servicio al cliente, nos convierte en la elección ideal para su proyecto de terraza.',
  },
  {
    icon: IconWavesElectricity,
    title: 'Venta e Instalación de Equipos',
    description:
      'Ofrecemos soluciones confiables, trabajamos con marcas reconocidas y ofrecemos una amplia gama de productos de alta calidad para asegurar el funcionamiento eficiente de su piscina. Nos enorgullecemos de brindar un servicio al cliente excepcional, con asesoramiento personalizado y cumplimiento de los códigos y regulaciones aplicables.',
  },
];

interface ServiceProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Service({ icon: Icon, title, description }: ServiceProps) {
  return (
    <div>
      <div className={styles.serviceTitle}>
        <ThemeIcon className={styles.serviceIcon} variant="light" size={40} radius={40}>
          <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ThemeIcon>
        <Text mt="sm" mb={7}>
          {title}
        </Text>
      </div>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function Services() {
  const services = SERVICEDATA.map((service, index) => <Service {...service} key={index} />);

  return (
    <Container className={styles.wrapper}>
      <Title className={styles.title}>Especialistas en piscinas por más de 15 años</Title>

      <Container size={700} p={0}>
        <Text size="sm" className={styles.description}>
        Falcón Pools se esfuerza por elevar la experiencia a la que el cliente está acostumbrado,
        para que así los clientes recuerden su experiencia con la compañía por siempre. El
        compromiso con la satisfacción del cliente es de suma importancia para Falcón Pools.
        La compañía trabaja de cerca con sus clientes para asegurarse de que sus expectativas sean
        cumplidas y cree en la importancia de la comunicación efectiva y transparente para que los
        clientes siempre se sientan informados y seguros en el proceso de construcción o
        remodelación.
        </Text>{' '}
        <Text size="md" className={styles.description} fw={800}>
          Nos especializamos en los siguientes servicios:
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {services}
      </SimpleGrid>
    </Container>
  );
}
