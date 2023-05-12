import { useBaseComponent } from '@base/BaseComponent';
import { ProductCard } from '../ProductCard/ProductCard';
import {
  StyledProductList,
  StyledProductListItem,
  StyledProductListWrapper,
} from './ProductListStyle';
import { IProductListProps } from './ProductListType';

export const ProductList = (props: IProductListProps) => {
  useBaseComponent<IProductListProps>({ props });
  const { products } = props;

  return (
    <StyledProductList>
      <StyledProductListWrapper>
        {products.map((product) => {
          const { id } = product;
          return (
            <StyledProductListItem key={id}>
              <ProductCard productCardData={product} />
            </StyledProductListItem>
          );
        })}
      </StyledProductListWrapper>
    </StyledProductList>
  );
};
