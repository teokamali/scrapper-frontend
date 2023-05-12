import { useBaseComponent } from '@base/BaseComponent';
import { IBaseProps } from '@base/BaseInterface';
import { Header } from '../Header/Header';

export const Layout = (props: IBaseProps) => {
  useBaseComponent<IBaseProps>({ props });
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
