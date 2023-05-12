import { useBaseComponent } from '@base/BaseComponent';
import { useTimeTrackingHelper } from './TimeTrackingHelper';
import { ITimeTrackingProps } from './TimeTrackingType';

export const TimeTracking = (props: ITimeTrackingProps) => {
  const { helper } = useBaseComponent<
    ITimeTrackingProps,
    any,
    ReturnType<typeof useTimeTrackingHelper>
  >({ props, helperHook: useTimeTrackingHelper });

  const { time } = helper;

  return <div>{time}</div>;
};
