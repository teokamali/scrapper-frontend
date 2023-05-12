import { ICommonHelperParams } from '@base/BaseInterface';
import { useTranslation } from 'react-i18next';

export const useLanguageSwitcherHelper = (params: ICommonHelperParams) => {
  const { router } = params;
  const { i18n } = useTranslation();
  const { pathname, asPath, query } = router;

  const changeLocale = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };
  return {
    changeLocale,
  };
};
