import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledProductCard = styled.div`
  ${tw`z-0 w-full relative`}
`;
export const StyledProductCardLink = styled(Link)`
  ${tw`z-0 relative`}
`;
export const StyledProductCardWrapper = styled.div`
  ${tw`w-full max-w-[300px] min-h-[360px] relative shadow flex flex-col items-center rounded-2xl bg-blue-3 border`}
`;
export const StyledCardContent = styled.div`
  ${tw`w-full p-3 flex flex-col gap-2 `}
`;
export const StyledProductName = styled.h5`
  ${tw`w-full text-right font-bold`}
`;
export const StyledProductPrice = styled.p`
  ${tw`text-center font-semibold`}
`;
export const StyledImageWrapper = styled.div`
  ${tw`w-full h-[250px] relative`}
`;
export const StyledImage = styled(Image)`
  ${tw`rounded-t-2xl`}
`;
export const StyledDownloadButton = styled.button`
  ${tw`z-20 absolute top-2.5 right-2.5 `}
`;
