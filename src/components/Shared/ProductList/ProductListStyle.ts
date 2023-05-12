import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledProductList = styled.div`
  ${tw`flex justify-center`}
`;

export const StyledProductListWrapper = styled.div`
  ${tw`w-full flex flex-wrap justify-center items-center gap-4 `}
`;
export const StyledProductListItem = styled.div`
  ${tw`w-full md:w-1/3 lg:w-[calc(100% / 5)]`}
`;
