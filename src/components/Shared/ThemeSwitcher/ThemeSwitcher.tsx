import { useBaseComponent } from '@base/BaseComponent';
import { useTheme } from 'next-themes';
import { useThemeSwitcherHelper } from './ThemeSwitcherHelper';
import {
  StyledThemeSwitcherButton,
  StyledThemeSwitcherToggleWrapper,
  StyledThemeSwitcherWrapper,
} from './ThemeSwitcherStyle';
import { IThemeSwitcherProps, IThemeSwitcherState } from './ThemeSwitcherType';

export const ThemeSwitcher = (props: IThemeSwitcherProps) => {
  const { helper, translate } = useBaseComponent<
    IThemeSwitcherProps,
    IThemeSwitcherState,
    ReturnType<typeof useThemeSwitcherHelper>
  >({
    props,
    helperHook: useThemeSwitcherHelper,
    chain: 'common',
  });
  const { themeToggleHandler } = helper;
  const { theme } = useTheme();

  return (
    <>
      <StyledThemeSwitcherWrapper>
        <span>{translate('theme.dark')}</span>
        <StyledThemeSwitcherToggleWrapper
          onClick={() => {
            themeToggleHandler(theme === 'dark' ? false : true);
          }}
        >
          <StyledThemeSwitcherButton isLight={theme === 'light'} />
        </StyledThemeSwitcherToggleWrapper>
        <span>{translate('theme.light')}</span>
      </StyledThemeSwitcherWrapper>
    </>
  );
};
