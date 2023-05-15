import { useBaseComponent } from '@base/BaseComponent';
import { IBaseProps } from '@base/BaseInterface';
import { StyledLayout } from './LayoutStyle';

export const Layout = (props: IBaseProps) => {
  useBaseComponent<IBaseProps>({ props });
  const { children } = props;

  return <StyledLayout>{children}</StyledLayout>;
};
