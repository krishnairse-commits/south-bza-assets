import React, { useState } from 'react';
import Header from './components/Header';
import MapLayer from './components/MapLayer';
import SidePanel from './components/SidePanel';
import { Asset, Curve, FilterState, Jurisdiction, PSR, Yard } from './types';

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    stations: true,
    lcs: true,
    bridges: true,
    yards: true,
    curves: true,
    psrs: true,
    lineIII: true,
    lineUP: true,
    lineDN: true,
  });

  const [selectedItem, setSelectedItem] = useState<Asset | Jurisdiction | Yard | Curve | PSR | null>(null);

  return (
    <div className="flex flex-col h-screen w-full bg-blueprint-bg text-slate-50 font-mono relative overflow-hidden">
      <Header filters={filters} setFilters={setFilters} />
      
      <main 
        className="flex-grow relative overflow-y-auto bg-grid-pattern bg-[length:20px_20px]"
        id="map-viewport"
        onClick={() => setSelectedItem(null)} // Close panel on map click
      >
        <MapLayer filters={filters} onSelect={setSelectedItem} />
      </main>

      <SidePanel selectedItem={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default App;
