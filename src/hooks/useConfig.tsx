import { useContext } from 'react';
import { ConfigContext } from '../contexts';

// ==============================|| CONFIG - HOOKS ||============================== //

export default function useConfig() {
  return useContext(ConfigContext);
}