import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

interface PageProps {
  children?: React.ReactNode;
}
export default function Page({ children }: PageProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
