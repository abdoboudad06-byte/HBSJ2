export type BearingCategory = 
  | 'ball' 
  | 'roller' 
  | 'tapered' 
  | 'needle' 
  | 'units' 
  | 'autoparts';

export interface BearingProduct {
  id: string;
  reference: string;
  name: string;
  category: BearingCategory;
  categoryName: string;
  subType: string;
  innerDiameter: number; // mm (d)
  outerDiameter: number; // mm (D)
  width: number; // mm (B / T)
  dynamicLoad: number; // kN (Cr)
  staticLoad: number; // kN (Cor)
  limitingSpeedGrease: number; // RPM
  limitingSpeedOil: number; // RPM
  weight: number; // kg
  sealType: string; // 2RS, ZZ, Open
  clearance: string; // Normal, C3, C4
  precisionGrade: string; // P0 / P6 / P5 (ABEC-1, ABEC-3, ABEC-5)
  material: string; // 100Cr6 / GCr15
  applications: string[];
  crossReferences: {
    skf?: string;
    fag?: string;
    timken?: string;
    nsk?: string;
    ina?: string;
    asahi?: string;
    snr?: string;
    [key: string]: string | undefined;
  };
  featured?: boolean;
  description: string;
}

export interface QuoteRequest {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  productReference: string;
  quantity: number;
  deliveryUrgency: 'standard' | 'urgent' | 'express';
  notes: string;
}
