export interface Jurisdiction {
  type: string;
  label: string;
  start: number;
  end: number;
  color: string;
  layer: number;
}

export interface Yard {
  station: string;
  line: string;
  start: number;
  end: number;
}

export interface Curve {
  no: string;
  line: string;
  start: number;
  end: number;
  len: number;
  deg: number;
  se: number;
}

export interface BridgeDetails {
  str: string;
  span: string;
  fdn: string;
}

export interface Asset {
  type: 'STATION' | 'LC' | 'BRIDGE';
  km: number;
  // Specific fields
  code?: string;
  name?: string;
  id?: string;
  status?: string;
  agency?: string;
  line?: string;
  details?: BridgeDetails;
  // New LC fields
  lcClass?: string; // A, B2, C, SPL
  branch?: 'T' | 'E'; // Traffic or Engineering
  interlocked?: boolean;
  tvu?: number;
}

export interface PSR {
  line: string;
  start: number;
  end: number;
  speed: number;
  reason: string;
}

export interface FilterState {
  stations: boolean;
  lcs: boolean;
  bridges: boolean;
  yards: boolean;
  curves: boolean;
  psrs: boolean;
  // Line filters
  lineIII: boolean;
  lineUP: boolean;
  lineDN: boolean;
}