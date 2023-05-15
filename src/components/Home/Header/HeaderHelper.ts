import { ICommonHelperParams } from '@base/BaseInterface';
import { useFormik } from 'formik';
import { IHeaderProps } from './HeaderType';

export const useHeaderHelper = (params: ICommonHelperParams<IHeaderProps>) => {
  const { props } = params;
  const { onSearchSubmit } = props;
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      const { search } = values;
      onSearchSubmit(search);
    },
  });

  return {
    formik,
  };
};
