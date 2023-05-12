import { Layout } from '@components/Home/Layout/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return <Layout>HI</Layout>;
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
