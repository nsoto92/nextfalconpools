import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';

interface PageProps {
  children?: React.ReactNode;
}
export default function Page({ children }: PageProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
