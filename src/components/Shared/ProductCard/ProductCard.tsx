import { useBaseComponent } from '@base/BaseComponent';
import Image from 'next/image';
import { HighlightText } from '../HighlightedText/HighlightedText';
import { useProductCardHelper } from './ProductCardHelper';
import {
  StyledCardContent,
  StyledDownloadButton,
  StyledImage,
  StyledImageWrapper,
  StyledProductCard,
  StyledProductCardWrapper,
  StyledProductName,
  StyledProductPrice,
} from './ProductCardStyle';
import { IProductCardProps } from './ProductCardType';

export const ProductCard = (props: IProductCardProps) => {
  const { helper, router } = useBaseComponent<
    IProductCardProps,
    any,
    ReturnType<typeof useProductCardHelper>
  >({ props, helperHook: useProductCardHelper });
  const { productCardData } = props;
  const { id, attributes, description, image, name, price } = productCardData;
  const { downloadImageHandler } = helper;
  const { search } = router.query;
  return (
    <StyledProductCard>
      {/* <StyledProductCardLink href={`/product/${id}`}> */}
      <StyledProductCardWrapper>
        <StyledImageWrapper>
          <StyledImage
            src={image}
            alt="product image"
            placeholder="blur"
            blurDataURL={'/images/imagePlaceholder.svg'}
            fill
            style={{
              top: 0,
              left: 0,
              right: 0,
              objectFit: 'fill',
            }}
          />
        </StyledImageWrapper>
        <StyledCardContent>
          <StyledProductName>
            <HighlightText text={name} highlightText={search} />
          </StyledProductName>
          <StyledProductPrice>{price}</StyledProductPrice>
        </StyledCardContent>
      </StyledProductCardWrapper>
      {/* </StyledProductCardLink> */}
      <StyledDownloadButton onClick={() => downloadImageHandler(image)}>
        <Image
          alt="download"
          src="/Icons/download.svg"
          width={25}
          height={25}
        />
      </StyledDownloadButton>
    </StyledProductCard>
  );
};
