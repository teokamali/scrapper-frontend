import { ICommonHelperParams } from '@base/BaseInterface';
import { ITimeTrackingProps } from './TimeTrackingType';

export const useTimeTrackingHelper = (
  params: ICommonHelperParams<ITimeTrackingProps>,
) => {
  const { props } = params;
  const { date } = props;
  const time =
    'Last Sync: ' +
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getFullYear() +
    ' @ ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds();

  return {
    time,
  };
};
