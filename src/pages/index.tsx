import { useGetTodosQuery } from '@api/todo/todo';
import { HomeBody } from '@components/Home/Body/HomeBody';
import { HomeHeader } from '@components/Home/Header/HomeHeader';
import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { TimeTracking } from '@components/Shared/TimeTracking/TimeTracking';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(props: { date: string }) {
  const { data } = useGetTodosQuery({});
  const { date } = props;
  return (
    <HomeLayout>
      <TimeTracking date={new Date(date)} />
      <HomeHeader />
      <HomeBody />
    </HomeLayout>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const date = new Date().toString();
  return {
    props: {
      date,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
