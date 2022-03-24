import React, { useEffect, useState } from 'react';
import CovidContext from './CovidContext';

function CovidProvider({ children }) {

  const contextValue = {}

  return (
    <CovidContext.Provider value={ contextValue }>
      {children}
    </CovidContext.Provider>
  );
}


export default CovidProvider;
