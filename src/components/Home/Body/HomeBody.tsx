import { useBaseComponent } from '@base/BaseComponent';
import Image from 'next/image';
import {
  StyledCardParagraph,
  StyledCardSpan,
  StyledCardTitle,
  StyledCardWrapper,
  StyledHomeBodyCardsWrapper,
  StyledHomeBodyImageWrapper,
} from './HomeBodyStyle';
import { IHomeBodyType } from './HomeBodyType';

export const HomeBody = (props: IHomeBodyType) => {
  const { translate } = useBaseComponent<IHomeBodyType>({
    chain: 'common',
  });

  return (
    <>
      <StyledHomeBodyImageWrapper>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </StyledHomeBodyImageWrapper>
      <StyledHomeBodyCardsWrapper>
        <StyledCardWrapper
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            {translate('home.docs')} <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            {translate('home.docs-description')}
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="/SSG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            {translate('home.SSG')} <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            {translate('home.SSG-description')}
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="/SSR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            {translate('home.SSR')} <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            {translate('home.SSR-description')}
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="/ISR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            {translate('home.ISR')} <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            {translate('home.ISR-description')}
          </StyledCardParagraph>
        </StyledCardWrapper>
      </StyledHomeBodyCardsWrapper>
    </>
  );
};
