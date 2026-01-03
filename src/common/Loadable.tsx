import { Suspense, ComponentType } from 'react';
import LoadingScreen from './Loader';

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  return function LoadableComponent(props: P) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default Loadable;
