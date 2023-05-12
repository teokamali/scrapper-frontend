import {
  StyledHeader,
  StyledInputWrapper,
  StyledSearchIcon,
  StyledSearchInput,
} from './HeaderStyle';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledInputWrapper>
        <StyledSearchInput type="text" placeholder="جستجوی محصول" />
        <StyledSearchIcon
          alt="search icon"
          src="/Icons/search.svg"
          width={30}
          height={30}
        />
      </StyledInputWrapper>
    </StyledHeader>
  );
};
