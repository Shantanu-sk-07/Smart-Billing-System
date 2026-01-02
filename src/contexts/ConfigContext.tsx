import { createContext, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks';
import { config as defaultConfig } from '../utils';

// ==============================|| TYPES ||============================== //

interface ConfigType {
  fontFamily: string;
  borderRadius: number;
}

interface ConfigContextType extends ConfigType {
  onChangeFontFamily: (fontFamily: string) => void;
  onChangeBorderRadius: (event: Event, newValue: number) => void;
  onReset: () => void;
}

interface ConfigProviderProps {
  children: ReactNode;
}

// ==============================|| INITIAL STATE ||============================== //

// initial state
const initialState: ConfigContextType = {
  ...defaultConfig,
  onChangeFontFamily: () => {},
  onChangeBorderRadius: () => {},
  onReset: () => {}
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext<ConfigContextType>(initialState);

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage<ConfigType>('berry-config-vite-ts', {
    fontFamily: initialState.fontFamily,
    borderRadius: initialState.borderRadius
  });

  const onChangeFontFamily = (fontFamily: string) => {
    setConfig({
      ...config,
      fontFamily
    });
  };

  const onChangeBorderRadius = (_event: Event, newValue: number) => {
    setConfig({
      ...config,
      borderRadius: newValue
    });
  };

  const onReset = () => {
    setConfig({ ...defaultConfig });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeFontFamily,
        onChangeBorderRadius,
        onReset
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
