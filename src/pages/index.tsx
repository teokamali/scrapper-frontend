import {
  getAllProducts,
  useGetAllProductsMutation,
} from '@api/products/products';
import { IGetAllProductsResponse } from '@api/products/productsType';
import { useSearchMutation } from '@api/search/search';
import { useBaseComponent } from '@base/BaseComponent';
import { Header } from '@components/Home/Header/Header';
import { Layout } from '@components/Home/Layout/Layout';
import { ProductList } from '@components/Shared/ProductList/ProductList';
import { wrapper } from '@redux/store';
import { IProduct } from '@type/global';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function Home(props: { products: IGetAllProductsResponse }) {
  const { products } = props;
  const { router } = useBaseComponent();
  const [fetchData] = useGetAllProductsMutation();
  const [searchMutation] = useSearchMutation();

  const [allProducts, setAllProducts] = useState<IProduct[]>();

  const [pagination, setPagination] = useState<{
    page: number;
    totalPages?: number;
  }>({
    page: 1,
  });

  const { totalPages } = pagination;

  const searchProducts = (page: number, search: string) => {
    const searchText = { value: search };
    searchMutation({ limit: 20, page, search: searchText })
      .unwrap()
      .then((res) => {
        const { page, results, totalPages } = res;
        setAllProducts(results);
        setPagination({ page, totalPages: 0 });
      });
  };

  const fetchMoreProducts = (page: number) => {
    fetchData({ limit: 20, page })
      .unwrap()
      .then((result) => {
        const { page, results, totalPages } = result;
        setAllProducts(results);
        setPagination({ page, totalPages });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (products) {
      const { page, results, totalPages } = products;
      setAllProducts(results);
      setPagination({ page, totalPages });
    }
  }, []);

  const onSearchSubmit = (search: string) => {
    if (search.length) {
      router.query.search = search;
      router.push(router);
      searchProducts(1, search);
    } else {
      router.push('/');
      fetchMoreProducts(1);
    }
  };

  return (
    <Layout>
      <Header
        onSearchSubmit={(search) => {
          onSearchSubmit(search);
        }}
      />
      {allProducts ? (
        <>
          <ProductList products={allProducts} />
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={({ selected }) => {
              const selectedPage = selected + 1;
              setPagination({ page: selectedPage });
              fetchMoreProducts(selectedPage);
            }}
            pageRangeDisplayed={5}
            pageCount={totalPages ?? 0}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </>
      ) : (
        <span>loading</span>
      )}
    </Layout>
  );
}
export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const allProducts = await store.dispatch(
      getAllProducts.initiate({
        limit: 20,
        page: 1,
      }),
    );
    return {
      props: {
        //@ts-ignore
        products: allProducts.data,
      },
    };
  },
);
