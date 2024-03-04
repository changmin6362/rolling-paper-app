import React from 'react';
import MainHeader from 'components/commons/header/MainHeader';
import CardList from 'components/commons/cardList/CardList';
import styled from 'styled-components';
import PrimaryBtn from 'components/commons/buttons/PrimaryBtn';
import useDeviceType from 'hooks/useDeviceType';
import { useQuery } from 'react-query';
import { getRecipients } from 'api/recipient';
import { Link } from 'react-router-dom';
import routes from 'utils/constants/routes';

const ListPage = () => {
  const deviceType = useDeviceType();

  const { data: lastestList, isLoading: isLastestListLoading } = useQuery({
    queryKey: ['recipients', 'sortedLastest'],
    queryFn: () => getRecipients(),
  });

  const { data: topRatedList, isLoading: isTopRatedListLoading } = useQuery({
    queryKey: ['recipients', 'sortedTopRated'],
    queryFn: () => getRecipients(undefined, undefined, 'like'),
  });

  return (
    <div>
      <MainHeader />
      <MainContainer>
        <SectionConainer>
          <StyledHtag>인기 롤링 페이퍼 🔥</StyledHtag>
          <CardList
            carouselMargin={
              deviceType === 'PC' ? 0 : deviceType === 'Tablet' ? 2.4 : 2
            }
            data={topRatedList?.data?.results}
            isLoading={isTopRatedListLoading}
          />
        </SectionConainer>
        <SectionConainer>
          <StyledHtag>최근에 만든 롤링 페이퍼 ⭐️</StyledHtag>
          <CardList
            carouselMargin={
              deviceType === 'PC' ? 0 : deviceType === 'Tablet' ? 2.4 : 2
            }
            data={lastestList?.data?.results}
            isLoading={isLastestListLoading}
          />
        </SectionConainer>
      </MainContainer>
      <StyledFooter>
        <Link to={routes.post}>
          <ListPagePrimaryBtn>나도 만들어보기</ListPagePrimaryBtn>
        </Link>
      </StyledFooter>
    </div>
  );
};

export default ListPage;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;
  padding-top: 4rem;
  padding-bottom: 4.2rem;

  @media (min-width: 48rem) {
    gap: 3rem;
    padding-top: 5rem;
    padding-bottom: 13.2rem;
  }

  @media (min-width: 75rem) {
    padding-bottom: 4rem;
  }
`;

const SectionConainer = styled.section`
  @media (min-width: 75rem) {
    margin: 0 auto;
  }
`;

const StyledHtag = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 0.2rem;
  margin-left: 2rem;

  @media (min-width: 48rem) {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.024rem;
    margin-bottom: 0.6rem;
    margin-left: 2.4rem;
  }

  @media (min-width: 75rem) {
    margin-left: 0;
  }
`;

const StyledFooter = styled.footer`
  padding: 2.4rem 2rem;

  @media (min-width: 48rem) {
    padding: 2.4rem;
  }

  @media (min-width: 75rem) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const ListPagePrimaryBtn = styled(PrimaryBtn)`
  width: 100%;
  max-widht: 116rem;

  @media (min-width: 75rem) {
    width: 28rem;
    height: 5.6rem;
    display: block;
    margin: 0 auto;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.8rem;
    letter-spacing: -0.018rem;
  }
`;
