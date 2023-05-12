import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  ${tw`w-full bg-blue-3 p-4 flex justify-center items-center`}
`;
export const StyledInputWrapper = styled.div`
  ${tw`relative`}
`;
export const StyledSearchIcon = styled(Image)`
  ${tw`absolute top-[50%] translate-y-[-50%] left-2`}
`;
export const StyledSearchInput = styled.input`
  ${tw`w-[50vh] p-2 bg-white shadow  rounded outline-0`}
`;
