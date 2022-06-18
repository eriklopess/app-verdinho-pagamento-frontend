import PropTypes from 'prop-types';
import React, { createContext, useContext, useMemo } from 'react';

export const AppContext = createContext();

export default function Provider({ children }) {
  const [state, setState] = React.useState();
  const value = useMemo(() => ({ state, setState }), [state]);
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export function useProvider() {
  const context = useContext(AppContext);
  const { state, setState } = context;
  return [state, setState];
}
