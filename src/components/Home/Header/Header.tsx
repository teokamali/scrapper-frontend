import { useBaseComponent } from '@base/BaseComponent';
import { ChangeEvent } from 'react';
import { useHeaderHelper } from './HeaderHelper';
import {
  StyledHeader,
  StyledInputWrapper,
  StyledSearchIcon,
  StyledSearchInput,
} from './HeaderStyle';
import { IHeaderProps } from './HeaderType';

export const Header = (props: IHeaderProps) => {
  const { helper } = useBaseComponent<
    IHeaderProps,
    any,
    ReturnType<typeof useHeaderHelper>
  >({
    props,
    helperHook: useHeaderHelper,
  });

  const { formik } = helper;
  const { values, setValues, handleSubmit } = formik;
  const { search } = values;
  return (
    <StyledHeader>
      <StyledInputWrapper>
        <form onSubmit={handleSubmit}>
          <StyledSearchInput
            type="text"
            placeholder="جستجوی محصول"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValues({ search: e.target.value });
            }}
          />
        </form>
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
