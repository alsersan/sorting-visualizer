import React, { useEffect, useContext } from 'react';

import useLocalStorageState from 'hooks/useLocalStorageState';
import { getColors } from 'algorithms/utils';

const BarColorContext = React.createContext();

const BarColorProvider = ({ children }) => {
  const defaultUnsortedColor = '#ec3232';
  const defaultSelectedColor = '#3226df';
  const defaultReferenceColor = '#d6ec32';
  const defaultSortedColor = '#216e3c';

  const [unsortedColor, setUnsortedColor] = useLocalStorageState(
    'SortingVisualizer_unsortedColor',
    defaultUnsortedColor
  );
  const [selectedColor, setSelectedColor] = useLocalStorageState(
    'SortingVisualizer_selectedColor',
    defaultSelectedColor
  );
  const [referenceColor, setReferenceColor] = useLocalStorageState(
    'SortingVisualizer_referenceColor',
    defaultReferenceColor
  );
  const [sortedColor, setSortedColor] = useLocalStorageState(
    'SortingVisualizer_sortedColor',
    defaultSortedColor
  );

  useEffect(() => {
    const colors = [unsortedColor, selectedColor, referenceColor, sortedColor];
    getColors(colors);
  });

  const resetDefaultColors = () => {
    setUnsortedColor(defaultUnsortedColor);
    setSelectedColor(defaultSelectedColor);
    setReferenceColor(defaultReferenceColor);
    setSortedColor(defaultSortedColor);
  };

  const value = {
    unsortedColor,
    setUnsortedColor,
    selectedColor,
    setSelectedColor,
    referenceColor,
    setReferenceColor,
    sortedColor,
    setSortedColor,
    resetDefaultColors,
  };

  return (
    <BarColorContext.Provider value={value}>
      {children}
    </BarColorContext.Provider>
  );
};

const useBarColorContext = () => useContext(BarColorContext);

export { BarColorProvider, useBarColorContext };
