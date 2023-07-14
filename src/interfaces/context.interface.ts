import { Dispatch, SetStateAction } from 'react';

export interface IPodcastCtx {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
