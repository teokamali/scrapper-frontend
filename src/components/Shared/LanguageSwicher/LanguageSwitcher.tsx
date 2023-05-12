import { useBaseComponent } from '@base/BaseComponent';
import Link from 'next/link';
import { useEffect } from 'react';
import { useLanguageSwitcherHelper } from './LanguageSwitcherHelper';

export const LanguageSwitcher = () => {
  const { helper, router } = useBaseComponent<
    any,
    any,
    ReturnType<typeof useLanguageSwitcherHelper>
  >({
    helperHook: useLanguageSwitcherHelper,
  });

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== 'default',
  );
  useEffect(() => {
    let dir = activeLocale == 'fa' ? 'rtl' : 'ltr';
    let lang = activeLocale == 'fa' ? 'fa' : 'en';
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.setAttribute('dir', dir);
      htmlElement.setAttribute('lang', lang);
    }
  }, [activeLocale]);

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={'locale-' + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              {locale === 'en' ? 'English' : locale === 'fa' ? 'فارسی' : null}
            </Link>
          </span>
        );
      })}
    </span>
  );
};
