import { useAuth } from '@hooks/Authentication/AuthenticationHook';
import { useAppDispatch } from '@redux/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
  IBaseComponentParams,
  IBaseComponentReturnType,
  IBaseState,
  IBaseVoidProps,
} from './BaseInterface';

export const useBaseComponent = <
  P extends IBaseVoidProps = {},
  S extends IBaseState = {},
  H = any,
>(
  params?: IBaseComponentParams<P, S>,
): IBaseComponentReturnType<S, H> => {
  const {
    props = {} as P,
    initialState = {} as S,
    helperHook,
    chain,
  } = params ?? { initialState: {} as S };

  const [state, pureSetState] = useState<S>(initialState);
  const isAuthenticated: boolean = useAuth();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t: translate } = useTranslation(chain ?? '');

  const currency: string = process.env.CURRENCY ?? 'Dollar';

  const setState = (newState: Partial<S>) => {
    pureSetState({
      ...state,
      ...newState,
    });
  };

  const helper = helperHook?.({
    props,
    state,
    router,
    isAuthenticated,
    setState,
    pureSetState,
    dispatch,
    translate,
  });

  return {
    isAuthenticated,
    state,
    helper,
    currency,
    router,
    setState,
    pureSetState,
    dispatch,
    translate,
  };
};
