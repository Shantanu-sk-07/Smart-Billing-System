import { Suspense, type ComponentType, type LazyExoticComponent } from 'react';
import Loader from './Loader';

// Generic HOC to wrap lazy-loaded components with Suspense and Loader fallback
export default function Loadable<T extends object>(
  Component: LazyExoticComponent<ComponentType<T>>
): ComponentType<T> {
  const WrappedComponent = (props: T) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

  return WrappedComponent;
}
