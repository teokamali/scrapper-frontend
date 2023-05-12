import { useBaseComponent } from '@base/BaseComponent';
import { LanguageSwitcher } from '@components/Shared/LanguageSwicher/LanguageSwitcher';
import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import {
  StyledHomeHeaderCode,
  StyledHomeHeaderTextWrapper,
  StyledHomeHeaderWrapper,
} from './HomeHeaderStyle';

export const HomeHeader = () => {
  const { translate } = useBaseComponent({
    chain: 'common',
  });
  return (
    <StyledHomeHeaderWrapper>
      <StyledHomeHeaderTextWrapper>
        {translate('theme.switch-theme')} &nbsp;
        <StyledHomeHeaderCode>
          <ThemeSwitcher />
        </StyledHomeHeaderCode>
      </StyledHomeHeaderTextWrapper>
      <StyledHomeHeaderTextWrapper>
        <StyledHomeHeaderCode>
          <LanguageSwitcher />
        </StyledHomeHeaderCode>
      </StyledHomeHeaderTextWrapper>
    </StyledHomeHeaderWrapper>
  );
};
