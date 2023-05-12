import { useGetAllProductsQuery } from '@api/products/products';
import { Layout } from '@components/Home/Layout/Layout';
import { ProductList } from '@components/Shared/ProductList/ProductList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { data: AllProducts, isLoading } = useGetAllProductsQuery({
    limit: 20,
    page: 1,
  });
  return (
    <Layout>
      {AllProducts ? (
        <ProductList products={AllProducts.results} />
      ) : (
        <span>loading</span>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
