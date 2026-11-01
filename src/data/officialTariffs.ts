export interface TariffItem {
  id: string;
  itemNo?: number;
  type: string;
  brand: 'HBSJ' | 'USJ';
  priceDhs: number; // Prix Tarif Hors Taxe en DHS
  category: 'ball_6000' | 'ball_6200' | 'ball_6300' | 'tapered' | 'spherical' | 'pillow_blocks' | 'needle' | 'wheel_hub' | 'accessories';
  categoryLabel: string;
  seal: string;
  description: string;
  boreMm?: number;
  outerMm?: number;
  widthMm?: number;
}

export const HBSJ_TARIFF: TariffItem[] = [
  // Page 2: 6000 series
  { id: 'hbsj-1', itemNo: 1, type: '6000-2RS', brand: 'HBSJ', priceDhs: 2.70, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 10, outerMm: 26, widthMm: 8 },
  { id: 'hbsj-2', itemNo: 2, type: '6000-2Z', brand: 'HBSJ', priceDhs: 2.70, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2Z', description: 'Roulement rigide flasqué métal', boreMm: 10, outerMm: 26, widthMm: 8 },
  { id: 'hbsj-3', itemNo: 3, type: '6001-2RS', brand: 'HBSJ', priceDhs: 2.90, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 12, outerMm: 28, widthMm: 8 },
  { id: 'hbsj-4', itemNo: 4, type: '6001-2Z', brand: 'HBSJ', priceDhs: 2.90, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2Z', description: 'Roulement rigide flasqué métal', boreMm: 12, outerMm: 28, widthMm: 8 },
  { id: 'hbsj-5', itemNo: 5, type: '6002-2RS', brand: 'HBSJ', priceDhs: 3.50, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 15, outerMm: 32, widthMm: 9 },
  { id: 'hbsj-6', itemNo: 6, type: '6003-2RS', brand: 'HBSJ', priceDhs: 4.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 17, outerMm: 35, widthMm: 10 },
  { id: 'hbsj-7', itemNo: 7, type: '6004-2RS', brand: 'HBSJ', priceDhs: 5.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 20, outerMm: 42, widthMm: 12 },
  { id: 'hbsj-8', itemNo: 8, type: '6005-2RS', brand: 'HBSJ', priceDhs: 5.50, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 25, outerMm: 47, widthMm: 12 },
  { id: 'hbsj-9', itemNo: 9, type: '6006-2RS', brand: 'HBSJ', priceDhs: 11.50, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 30, outerMm: 55, widthMm: 13 },
  { id: 'hbsj-10', itemNo: 10, type: '6007-2RS', brand: 'HBSJ', priceDhs: 12.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 35, outerMm: 62, widthMm: 14 },
  { id: 'hbsj-11', itemNo: 11, type: '6008-2RS', brand: 'HBSJ', priceDhs: 17.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 40, outerMm: 68, widthMm: 15 },
  { id: 'hbsj-12', itemNo: 12, type: '6009-2RS', brand: 'HBSJ', priceDhs: 21.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 45, outerMm: 75, widthMm: 16 },
  { id: 'hbsj-13', itemNo: 13, type: '6010-2RS', brand: 'HBSJ', priceDhs: 23.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 50, outerMm: 80, widthMm: 16 },
  { id: 'hbsj-14', itemNo: 14, type: '6011-2RS', brand: 'HBSJ', priceDhs: 31.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 55, outerMm: 90, widthMm: 18 },
  { id: 'hbsj-15', itemNo: 15, type: '6012-2RS', brand: 'HBSJ', priceDhs: 35.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 60, outerMm: 95, widthMm: 18 },
  { id: 'hbsj-16', itemNo: 16, type: '6013-2RS', brand: 'HBSJ', priceDhs: 39.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 65, outerMm: 100, widthMm: 18 },
  { id: 'hbsj-17', itemNo: 17, type: '6014-2RS', brand: 'HBSJ', priceDhs: 51.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 70, outerMm: 110, widthMm: 20 },
  { id: 'hbsj-18', itemNo: 18, type: '6015-2RS', brand: 'HBSJ', priceDhs: 56.00, category: 'ball_6000', categoryLabel: 'Roulements 6000', seal: '2RS', description: 'Roulement rigide à billes étanche', boreMm: 75, outerMm: 115, widthMm: 20 },

  // 6200 series
  { id: 'hbsj-19', itemNo: 19, type: '6200-2RS', brand: 'HBSJ', priceDhs: 3.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 10, outerMm: 30, widthMm: 9 },
  { id: 'hbsj-20', itemNo: 20, type: '6200-2Z', brand: 'HBSJ', priceDhs: 3.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2Z', description: 'Roulement rigide série 6200 flasqué', boreMm: 10, outerMm: 30, widthMm: 9 },
  { id: 'hbsj-21', itemNo: 21, type: '6201-2RS', brand: 'HBSJ', priceDhs: 4.30, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 12, outerMm: 32, widthMm: 10 },
  { id: 'hbsj-22', itemNo: 22, type: '6201-2Z', brand: 'HBSJ', priceDhs: 4.30, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2Z', description: 'Roulement rigide série 6200 flasqué', boreMm: 12, outerMm: 32, widthMm: 10 },
  { id: 'hbsj-23', itemNo: 23, type: '6202-2RS', brand: 'HBSJ', priceDhs: 4.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 15, outerMm: 35, widthMm: 11 },
  { id: 'hbsj-24', itemNo: 24, type: '6202-2Z', brand: 'HBSJ', priceDhs: 4.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2Z', description: 'Roulement rigide série 6200 flasqué', boreMm: 15, outerMm: 35, widthMm: 11 },
  { id: 'hbsj-25', itemNo: 25, type: '6203-2RS', brand: 'HBSJ', priceDhs: 6.00, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 17, outerMm: 40, widthMm: 12 },
  { id: 'hbsj-26', itemNo: 26, type: '6204-2RS', brand: 'HBSJ', priceDhs: 7.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 20, outerMm: 47, widthMm: 14 },
  { id: 'hbsj-27', itemNo: 27, type: '6205-2RS', brand: 'HBSJ', priceDhs: 9.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche universel', boreMm: 25, outerMm: 52, widthMm: 15 },
  { id: 'hbsj-28', itemNo: 28, type: '6206-2RS', brand: 'HBSJ', priceDhs: 12.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 30, outerMm: 62, widthMm: 16 },
  { id: 'hbsj-29', itemNo: 29, type: '6207-2RS', brand: 'HBSJ', priceDhs: 18.00, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 35, outerMm: 72, widthMm: 17 },
  { id: 'hbsj-30', itemNo: 30, type: '6208-2RS', brand: 'HBSJ', priceDhs: 21.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 40, outerMm: 80, widthMm: 18 },
  { id: 'hbsj-31', itemNo: 31, type: '6209-2RS', brand: 'HBSJ', priceDhs: 25.00, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 45, outerMm: 85, widthMm: 19 },
  { id: 'hbsj-32', itemNo: 32, type: '6210-2RS', brand: 'HBSJ', priceDhs: 27.00, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 50, outerMm: 90, widthMm: 20 },
  { id: 'hbsj-33', itemNo: 33, type: '6211-2RS', brand: 'HBSJ', priceDhs: 35.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 55, outerMm: 100, widthMm: 21 },
  { id: 'hbsj-34', itemNo: 34, type: '6212-2RS', brand: 'HBSJ', priceDhs: 45.00, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 60, outerMm: 110, widthMm: 22 },
  { id: 'hbsj-35', itemNo: 35, type: '6213-2RS', brand: 'HBSJ', priceDhs: 54.00, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 étanche', boreMm: 65, outerMm: 120, widthMm: 23 },
  { id: 'hbsj-36', itemNo: 36, type: '6214-2RS', brand: 'HBSJ', priceDhs: 62.50, category: 'ball_6200', categoryLabel: 'Roulements 6200', seal: '2RS', description: 'Roulement rigide série 6200 grand format', boreMm: 70, outerMm: 125, widthMm: 24 },

  // 6300 series
  { id: 'hbsj-37', itemNo: 37, type: '6300-2RS', brand: 'HBSJ', priceDhs: 4.60, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 10, outerMm: 35, widthMm: 11 },
  { id: 'hbsj-38', itemNo: 38, type: '6300-2Z', brand: 'HBSJ', priceDhs: 4.60, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2Z', description: 'Roulement rigide série 6300 flasqué', boreMm: 10, outerMm: 35, widthMm: 11 },
  { id: 'hbsj-39', itemNo: 39, type: '6301-2RS', brand: 'HBSJ', priceDhs: 5.50, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 12, outerMm: 37, widthMm: 12 },
  { id: 'hbsj-40', itemNo: 40, type: '6302-2RS', brand: 'HBSJ', priceDhs: 6.00, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 15, outerMm: 42, widthMm: 13 },
  { id: 'hbsj-41', itemNo: 41, type: '6303-2RS', brand: 'HBSJ', priceDhs: 8.50, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 17, outerMm: 47, widthMm: 14 },
  { id: 'hbsj-42', itemNo: 42, type: '6304-2RS', brand: 'HBSJ', priceDhs: 9.50, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 20, outerMm: 52, widthMm: 15 },
  { id: 'hbsj-43', itemNo: 43, type: '6305-2RS', brand: 'HBSJ', priceDhs: 13.50, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 25, outerMm: 62, widthMm: 17 },
  { id: 'hbsj-44', itemNo: 44, type: '6306-2RS', brand: 'HBSJ', priceDhs: 21.00, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 30, outerMm: 72, widthMm: 19 },
  { id: 'hbsj-45', itemNo: 45, type: '6307-2RS', brand: 'HBSJ', priceDhs: 25.50, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 35, outerMm: 80, widthMm: 21 },
  { id: 'hbsj-46', itemNo: 46, type: '6308-2RS', brand: 'HBSJ', priceDhs: 39.00, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 40, outerMm: 90, widthMm: 23 },
  { id: 'hbsj-47', itemNo: 47, type: '6309-2RS', brand: 'HBSJ', priceDhs: 45.50, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 45, outerMm: 100, widthMm: 25 },
  { id: 'hbsj-48', itemNo: 48, type: '6310-2RS', brand: 'HBSJ', priceDhs: 56.00, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 50, outerMm: 110, widthMm: 27 },
  { id: 'hbsj-49', itemNo: 49, type: '6311-2RS', brand: 'HBSJ', priceDhs: 72.00, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 55, outerMm: 120, widthMm: 29 },
  { id: 'hbsj-50', itemNo: 50, type: '6312-2RS', brand: 'HBSJ', priceDhs: 87.50, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 60, outerMm: 130, widthMm: 31 },
  { id: 'hbsj-51', itemNo: 51, type: '6313-2RS', brand: 'HBSJ', priceDhs: 107.50, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 65, outerMm: 140, widthMm: 33 },
  { id: 'hbsj-52', itemNo: 52, type: '6314-2RS', brand: 'HBSJ', priceDhs: 126.00, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 70, outerMm: 150, widthMm: 35 },
  { id: 'hbsj-53', itemNo: 53, type: '6315-2RS', brand: 'HBSJ', priceDhs: 161.00, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 75, outerMm: 160, widthMm: 37 },
  { id: 'hbsj-54', itemNo: 54, type: '6316-2RS', brand: 'HBSJ', priceDhs: 179.00, category: 'ball_6300', categoryLabel: 'Roulements 6300', seal: '2RS', description: 'Roulement rigide série 6300 forte charge', boreMm: 80, outerMm: 170, widthMm: 39 },

  // Special & Tapered & Units
  { id: 'hbsj-55', itemNo: 55, type: '1209K', brand: 'HBSJ', priceDhs: 42.00, category: 'spherical', categoryLabel: 'Auto-aligneurs', seal: 'Open', description: 'Roulement auto-aligneur à billes alésage conique', boreMm: 45, outerMm: 85, widthMm: 19 },
  { id: 'hbsj-56', itemNo: 56, type: '30204', brand: 'HBSJ', priceDhs: 11.00, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques métrique', boreMm: 20, outerMm: 47, widthMm: 15.25 },
  { id: 'hbsj-57', itemNo: 57, type: '30205', brand: 'HBSJ', priceDhs: 12.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques métrique', boreMm: 25, outerMm: 52, widthMm: 16.25 },
  { id: 'hbsj-58', itemNo: 58, type: '30206', brand: 'HBSJ', priceDhs: 17.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques métrique', boreMm: 30, outerMm: 62, widthMm: 17.25 },
  { id: 'hbsj-59', itemNo: 59, type: '30207', brand: 'HBSJ', priceDhs: 24.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques métrique', boreMm: 35, outerMm: 72, widthMm: 18.25 },
  { id: 'hbsj-60', itemNo: 60, type: '30208', brand: 'HBSJ', priceDhs: 29.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques métrique', boreMm: 40, outerMm: 80, widthMm: 19.75 },
  { id: 'hbsj-61', itemNo: 61, type: '30209', brand: 'HBSJ', priceDhs: 33.00, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques métrique', boreMm: 45, outerMm: 85, widthMm: 20.75 },
  { id: 'hbsj-62', itemNo: 62, type: '30214', brand: 'HBSJ', priceDhs: 76.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques métrique', boreMm: 70, outerMm: 125, widthMm: 26.25 },
  { id: 'hbsj-63', itemNo: 63, type: '30216', brand: 'HBSJ', priceDhs: 104.00, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques métrique', boreMm: 80, outerMm: 140, widthMm: 28.25 },
  { id: 'hbsj-64', itemNo: 64, type: '32004', brand: 'HBSJ', priceDhs: 11.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques série 320', boreMm: 20, outerMm: 42, widthMm: 15 },
  { id: 'hbsj-65', itemNo: 65, type: '32006', brand: 'HBSJ', priceDhs: 16.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques série 320', boreMm: 30, outerMm: 55, widthMm: 17 },
  { id: 'hbsj-66', itemNo: 66, type: '32008', brand: 'HBSJ', priceDhs: 24.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement à rouleaux coniques série 320', boreMm: 40, outerMm: 68, widthMm: 19 },
  { id: 'hbsj-67', itemNo: 67, type: '22211KMBW33/C3', brand: 'HBSJ', priceDhs: 94.50, category: 'spherical', categoryLabel: 'Rouleaux Sphériques', seal: 'W33', description: 'Roulement à rouleaux sphériques haute charge', boreMm: 55, outerMm: 100, widthMm: 25 },
  { id: 'hbsj-68', itemNo: 68, type: 'SN511', brand: 'HBSJ', priceDhs: 140.00, category: 'pillow_blocks', categoryLabel: 'Paliers Fonte', seal: 'Feutre', description: 'Corps de palier à chapeau en deux parties', boreMm: 50, outerMm: 255, widthMm: 95 },
  { id: 'hbsj-69', itemNo: 69, type: 'UCP204', brand: 'HBSJ', priceDhs: 29.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP', seal: 'Joint+Chicane', description: 'Palier à semelle fonte avec roulement UC Ø20mm', boreMm: 20, outerMm: 127, widthMm: 33.3 },
  { id: 'hbsj-70', itemNo: 70, type: 'UCP205', brand: 'HBSJ', priceDhs: 31.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP', seal: 'Joint+Chicane', description: 'Palier à semelle fonte avec roulement UC Ø25mm', boreMm: 25, outerMm: 140, widthMm: 36.5 },
  { id: 'hbsj-71', itemNo: 71, type: 'UCP206', brand: 'HBSJ', priceDhs: 47.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP', seal: 'Joint+Chicane', description: 'Palier à semelle fonte avec roulement UC Ø30mm', boreMm: 30, outerMm: 165, widthMm: 42.9 },
  { id: 'hbsj-72', itemNo: 72, type: 'UCP207', brand: 'HBSJ', priceDhs: 57.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP', seal: 'Joint+Chicane', description: 'Palier à semelle fonte avec roulement UC Ø35mm', boreMm: 35, outerMm: 167, widthMm: 47.6 },
  { id: 'hbsj-73', itemNo: 73, type: 'UCP208', brand: 'HBSJ', priceDhs: 67.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP', seal: 'Joint+Chicane', description: 'Palier à semelle fonte avec roulement UC Ø40mm', boreMm: 40, outerMm: 184, widthMm: 49.2 },
  { id: 'hbsj-74', itemNo: 74, type: 'UCP209', brand: 'HBSJ', priceDhs: 77.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP', seal: 'Joint+Chicane', description: 'Palier à semelle fonte avec roulement UC Ø45mm', boreMm: 45, outerMm: 190, widthMm: 54 },
  { id: 'hbsj-75', itemNo: 75, type: 'UCP210', brand: 'HBSJ', priceDhs: 90.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP', seal: 'Joint+Chicane', description: 'Palier à semelle fonte avec roulement UC Ø50mm', boreMm: 50, outerMm: 206, widthMm: 57.2 },
  { id: 'hbsj-76', itemNo: 76, type: 'UCP211', brand: 'HBSJ', priceDhs: 105.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP', seal: 'Joint+Chicane', description: 'Palier à semelle fonte avec roulement UC Ø55mm', boreMm: 55, outerMm: 219, widthMm: 63.5 },
];

export const USJ_TARIFF: TariffItem[] = [
  // Page 1: Coniques & Sphériques & Manchon & Paliers UCP / UCF
  { id: 'usj-1', itemNo: 1, type: '30204', brand: 'USJ', priceDhs: 31.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ Heavy Duty', boreMm: 20, outerMm: 47, widthMm: 15.25 },
  { id: 'usj-2', itemNo: 2, type: '30205', brand: 'USJ', priceDhs: 34.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ Heavy Duty', boreMm: 25, outerMm: 52, widthMm: 16.25 },
  { id: 'usj-3', itemNo: 3, type: '30206', brand: 'USJ', priceDhs: 40.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ Heavy Duty', boreMm: 30, outerMm: 62, widthMm: 17.25 },
  { id: 'usj-4', itemNo: 4, type: '30207', brand: 'USJ', priceDhs: 49.00, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ Heavy Duty', boreMm: 35, outerMm: 72, widthMm: 18.25 },
  { id: 'usj-5', itemNo: 5, type: '30208', brand: 'USJ', priceDhs: 57.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ Heavy Duty', boreMm: 40, outerMm: 80, widthMm: 19.75 },
  { id: 'usj-6', itemNo: 6, type: '30209', brand: 'USJ', priceDhs: 67.00, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ Heavy Duty', boreMm: 45, outerMm: 85, widthMm: 20.75 },
  { id: 'usj-7', itemNo: 7, type: '30214', brand: 'USJ', priceDhs: 147.00, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ Heavy Duty', boreMm: 70, outerMm: 125, widthMm: 26.25 },
  { id: 'usj-8', itemNo: 8, type: '30216', brand: 'USJ', priceDhs: 183.00, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ Heavy Duty', boreMm: 80, outerMm: 140, widthMm: 28.25 },
  { id: 'usj-9', itemNo: 9, type: '32004', brand: 'USJ', priceDhs: 28.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ compact 320', boreMm: 20, outerMm: 42, widthMm: 15 },
  { id: 'usj-10', itemNo: 10, type: '32006', brand: 'USJ', priceDhs: 40.50, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ compact 320', boreMm: 30, outerMm: 55, widthMm: 17 },
  { id: 'usj-11', itemNo: 11, type: '32008', brand: 'USJ', priceDhs: 55.00, category: 'tapered', categoryLabel: 'Roulements Coniques', seal: 'Open', description: 'Roulement conique USJ compact 320', boreMm: 40, outerMm: 68, widthMm: 19 },
  { id: 'usj-12', itemNo: 12, type: '22211KMBW33/C3', brand: 'USJ', priceDhs: 318.00, category: 'spherical', categoryLabel: 'Rouleaux Sphériques', seal: 'W33/C3', description: 'Roulement à rouleaux sphériques USJ Premium Mine/Carrière', boreMm: 55, outerMm: 100, widthMm: 25 },
  { id: 'usj-13', itemNo: 13, type: 'H209', brand: 'USJ', priceDhs: 42.00, category: 'accessories', categoryLabel: 'Manchons de serrage', seal: 'Acier', description: 'Manchon de serrage complet avec écrou et rondelle cran', boreMm: 40, outerMm: 65, widthMm: 33 },
  { id: 'usj-14', itemNo: 14, type: 'H311', brand: 'USJ', priceDhs: 65.50, category: 'accessories', categoryLabel: 'Manchons de serrage', seal: 'Acier', description: 'Manchon de serrage complet avec écrou et rondelle cran', boreMm: 50, outerMm: 75, widthMm: 45 },

  // Paliers UCP USJ
  { id: 'usj-15', itemNo: 15, type: 'UCP204', brand: 'USJ', priceDhs: 59.50, category: 'pillow_blocks', categoryLabel: 'Paliers UCP USJ', seal: 'Double lèvre', description: 'Palier à semelle renforcé fonte haute résistance', boreMm: 20, outerMm: 127, widthMm: 33.3 },
  { id: 'usj-16', itemNo: 16, type: 'UCP205', brand: 'USJ', priceDhs: 65.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP USJ', seal: 'Double lèvre', description: 'Palier à semelle renforcé fonte haute résistance', boreMm: 25, outerMm: 140, widthMm: 36.5 },
  { id: 'usj-17', itemNo: 17, type: 'UCP206', brand: 'USJ', priceDhs: 96.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP USJ', seal: 'Double lèvre', description: 'Palier à semelle renforcé fonte haute résistance', boreMm: 30, outerMm: 165, widthMm: 42.9 },
  { id: 'usj-18', itemNo: 18, type: 'UCP207', brand: 'USJ', priceDhs: 121.50, category: 'pillow_blocks', categoryLabel: 'Paliers UCP USJ', seal: 'Double lèvre', description: 'Palier à semelle renforcé fonte haute résistance', boreMm: 35, outerMm: 167, widthMm: 47.6 },
  { id: 'usj-19', itemNo: 19, type: 'UCP208', brand: 'USJ', priceDhs: 150.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP USJ', seal: 'Double lèvre', description: 'Palier à semelle renforcé fonte haute résistance', boreMm: 40, outerMm: 184, widthMm: 49.2 },
  { id: 'usj-20', itemNo: 20, type: 'UCP209', brand: 'USJ', priceDhs: 175.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP USJ', seal: 'Double lèvre', description: 'Palier à semelle renforcé fonte haute résistance', boreMm: 45, outerMm: 190, widthMm: 54 },
  { id: 'usj-21', itemNo: 21, type: 'UCP210', brand: 'USJ', priceDhs: 201.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP USJ', seal: 'Double lèvre', description: 'Palier à semelle renforcé fonte haute résistance', boreMm: 50, outerMm: 206, widthMm: 57.2 },
  { id: 'usj-22', itemNo: 22, type: 'UCP211', brand: 'USJ', priceDhs: 254.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCP USJ', seal: 'Double lèvre', description: 'Palier à semelle renforcé fonte haute résistance', boreMm: 55, outerMm: 219, widthMm: 63.5 },

  // Paliers UCF USJ (Brides 4 trous)
  { id: 'usj-23', itemNo: 23, type: 'UCF204', brand: 'USJ', priceDhs: 59.50, category: 'pillow_blocks', categoryLabel: 'Paliers UCF USJ', seal: 'Double lèvre', description: 'Palier bride carrée 4 trous applique fonte', boreMm: 20, outerMm: 86, widthMm: 33.3 },
  { id: 'usj-24', itemNo: 24, type: 'UCF205', brand: 'USJ', priceDhs: 65.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCF USJ', seal: 'Double lèvre', description: 'Palier bride carrée 4 trous applique fonte', boreMm: 25, outerMm: 95, widthMm: 35.8 },
  { id: 'usj-25', itemNo: 25, type: 'UCF206', brand: 'USJ', priceDhs: 96.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCF USJ', seal: 'Double lèvre', description: 'Palier bride carrée 4 trous applique fonte', boreMm: 30, outerMm: 108, widthMm: 40.2 },
  { id: 'usj-26', itemNo: 26, type: 'UCF207', brand: 'USJ', priceDhs: 121.50, category: 'pillow_blocks', categoryLabel: 'Paliers UCF USJ', seal: 'Double lèvre', description: 'Palier bride carrée 4 trous applique fonte', boreMm: 35, outerMm: 117, widthMm: 44.4 },
  { id: 'usj-27', itemNo: 27, type: 'UCF208', brand: 'USJ', priceDhs: 150.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCF USJ', seal: 'Double lèvre', description: 'Palier bride carrée 4 trous applique fonte', boreMm: 40, outerMm: 130, widthMm: 51.2 },
  { id: 'usj-28', itemNo: 28, type: 'UCF209', brand: 'USJ', priceDhs: 175.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCF USJ', seal: 'Double lèvre', description: 'Palier bride carrée 4 trous applique fonte', boreMm: 45, outerMm: 137, widthMm: 52.2 },
  { id: 'usj-29', itemNo: 29, type: 'UCF210', brand: 'USJ', priceDhs: 201.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCF USJ', seal: 'Double lèvre', description: 'Palier bride carrée 4 trous applique fonte', boreMm: 50, outerMm: 143, widthMm: 54.6 },
  { id: 'usj-30', itemNo: 30, type: 'UCF211', brand: 'USJ', priceDhs: 254.00, category: 'pillow_blocks', categoryLabel: 'Paliers UCF USJ', seal: 'Double lèvre', description: 'Palier bride carrée 4 trous applique fonte', boreMm: 55, outerMm: 162, widthMm: 58.4 },

  // USJ 6000 series
  { id: 'usj-31', itemNo: 31, type: '6000-2RS', brand: 'USJ', priceDhs: 7.00, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 10, outerMm: 26, widthMm: 8 },
  { id: 'usj-32', itemNo: 32, type: '6000-2Z', brand: 'USJ', priceDhs: 7.00, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2Z', description: 'Roulement USJ Premium flasqué métal', boreMm: 10, outerMm: 26, widthMm: 8 },
  { id: 'usj-33', itemNo: 33, type: '6001-2RS', brand: 'USJ', priceDhs: 7.50, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 12, outerMm: 28, widthMm: 8 },
  { id: 'usj-34', itemNo: 34, type: '6001-2Z', brand: 'USJ', priceDhs: 7.50, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2Z', description: 'Roulement USJ Premium flasqué métal', boreMm: 12, outerMm: 28, widthMm: 8 },
  { id: 'usj-35', itemNo: 35, type: '6002-2RS', brand: 'USJ', priceDhs: 9.50, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 15, outerMm: 32, widthMm: 9 },
  { id: 'usj-36', itemNo: 36, type: '6003-2RS', brand: 'USJ', priceDhs: 10.50, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 17, outerMm: 35, widthMm: 10 },
  { id: 'usj-37', itemNo: 37, type: '6004-2RS', brand: 'USJ', priceDhs: 12.50, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 20, outerMm: 42, widthMm: 12 },
  { id: 'usj-38', itemNo: 38, type: '6005-2RS', brand: 'USJ', priceDhs: 14.50, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 25, outerMm: 47, widthMm: 12 },
  { id: 'usj-39', itemNo: 39, type: '6006-2RS', brand: 'USJ', priceDhs: 19.00, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 30, outerMm: 55, widthMm: 13 },
  { id: 'usj-40', itemNo: 40, type: '6007-2RS', brand: 'USJ', priceDhs: 24.00, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 35, outerMm: 62, widthMm: 14 },
  { id: 'usj-41', itemNo: 41, type: '6008-2RS', brand: 'USJ', priceDhs: 30.00, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 40, outerMm: 68, widthMm: 15 },
  { id: 'usj-42', itemNo: 42, type: '6009-2RS', brand: 'USJ', priceDhs: 36.50, category: 'ball_6000', categoryLabel: 'Roulements 6000 USJ', seal: '2RS', description: 'Roulement USJ Premium précision', boreMm: 45, outerMm: 75, widthMm: 16 },

  // USJ 6200 series
  { id: 'usj-43', itemNo: 43, type: '6200-2RS', brand: 'USJ', priceDhs: 8.50, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 10, outerMm: 30, widthMm: 9 },
  { id: 'usj-44', itemNo: 44, type: '6201-2RS', brand: 'USJ', priceDhs: 9.50, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 12, outerMm: 32, widthMm: 10 },
  { id: 'usj-45', itemNo: 45, type: '6202-2RS', brand: 'USJ', priceDhs: 10.00, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 15, outerMm: 35, widthMm: 11 },
  { id: 'usj-46', itemNo: 46, type: '6203-2RS', brand: 'USJ', priceDhs: 12.00, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 17, outerMm: 40, widthMm: 12 },
  { id: 'usj-47', itemNo: 47, type: '6204-2RS', brand: 'USJ', priceDhs: 16.50, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 20, outerMm: 47, widthMm: 14 },
  { id: 'usj-48', itemNo: 48, type: '6205-2RS', brand: 'USJ', priceDhs: 18.50, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 25, outerMm: 52, widthMm: 15 },
  { id: 'usj-49', itemNo: 49, type: '6206-2RS', brand: 'USJ', priceDhs: 28.50, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 30, outerMm: 62, widthMm: 16 },
  { id: 'usj-50', itemNo: 50, type: '6207-2RS', brand: 'USJ', priceDhs: 39.50, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 35, outerMm: 72, widthMm: 17 },
  { id: 'usj-51', itemNo: 51, type: '6208-2RS', brand: 'USJ', priceDhs: 50.00, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 40, outerMm: 80, widthMm: 18 },
  { id: 'usj-52', itemNo: 52, type: '6209-2RS', brand: 'USJ', priceDhs: 55.00, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 45, outerMm: 85, widthMm: 19 },
  { id: 'usj-53', itemNo: 53, type: '6210-2RS', brand: 'USJ', priceDhs: 63.00, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 50, outerMm: 90, widthMm: 20 },
  { id: 'usj-54', itemNo: 54, type: '6211-2RS', brand: 'USJ', priceDhs: 71.00, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 55, outerMm: 100, widthMm: 21 },
  { id: 'usj-55', itemNo: 55, type: '6212-2RS', brand: 'USJ', priceDhs: 96.00, category: 'ball_6200', categoryLabel: 'Roulements 6200 USJ', seal: '2RS', description: 'Roulement USJ Premium série 6200', boreMm: 60, outerMm: 110, widthMm: 22 },

  // USJ 6300 series
  { id: 'usj-56', itemNo: 56, type: '6300-2RS', brand: 'USJ', priceDhs: 12.50, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 10, outerMm: 35, widthMm: 11 },
  { id: 'usj-57', itemNo: 57, type: '6301-2RS', brand: 'USJ', priceDhs: 13.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 12, outerMm: 37, widthMm: 12 },
  { id: 'usj-58', itemNo: 58, type: '6302-2RS', brand: 'USJ', priceDhs: 15.50, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 15, outerMm: 42, widthMm: 13 },
  { id: 'usj-59', itemNo: 59, type: '6303-2RS', brand: 'USJ', priceDhs: 19.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 17, outerMm: 47, widthMm: 14 },
  { id: 'usj-60', itemNo: 60, type: '6304-2RS', brand: 'USJ', priceDhs: 23.50, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 20, outerMm: 52, widthMm: 15 },
  { id: 'usj-61', itemNo: 61, type: '6305-2RS', brand: 'USJ', priceDhs: 32.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 25, outerMm: 62, widthMm: 17 },
  { id: 'usj-62', itemNo: 62, type: '6306-2RS', brand: 'USJ', priceDhs: 45.50, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 30, outerMm: 72, widthMm: 19 },
  { id: 'usj-63', itemNo: 63, type: '6307-2RS', brand: 'USJ', priceDhs: 59.50, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 35, outerMm: 80, widthMm: 21 },
  { id: 'usj-64', itemNo: 64, type: '6308-2RS', brand: 'USJ', priceDhs: 71.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 40, outerMm: 90, widthMm: 23 },
  { id: 'usj-65', itemNo: 65, type: '6309-2RS', brand: 'USJ', priceDhs: 89.50, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 45, outerMm: 100, widthMm: 25 },
  { id: 'usj-66', itemNo: 66, type: '6310-2RS', brand: 'USJ', priceDhs: 119.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 50, outerMm: 110, widthMm: 27 },
  { id: 'usj-67', itemNo: 67, type: '6311-2RS', brand: 'USJ', priceDhs: 144.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 55, outerMm: 120, widthMm: 29 },
  { id: 'usj-68', itemNo: 68, type: '6312-2RS', brand: 'USJ', priceDhs: 177.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 60, outerMm: 130, widthMm: 31 },
  { id: 'usj-69', itemNo: 69, type: '6313-2RS', brand: 'USJ', priceDhs: 218.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 65, outerMm: 140, widthMm: 33 },
  { id: 'usj-70', itemNo: 70, type: '6314-2RS', brand: 'USJ', priceDhs: 256.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 70, outerMm: 150, widthMm: 35 },
  { id: 'usj-71', itemNo: 71, type: '6315-2RS', brand: 'USJ', priceDhs: 311.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 75, outerMm: 160, widthMm: 37 },
  { id: 'usj-72', itemNo: 72, type: '6316-2RS', brand: 'USJ', priceDhs: 364.00, category: 'ball_6300', categoryLabel: 'Roulements 6300 USJ', seal: '2RS', description: 'Roulement USJ Premium forte charge', boreMm: 80, outerMm: 170, widthMm: 39 },
  { id: 'usj-73', itemNo: 73, type: '1209K', brand: 'USJ', priceDhs: 79.00, category: 'spherical', categoryLabel: 'Auto-aligneurs USJ', seal: 'Open', description: 'Roulement auto-aligneur à billes alésage conique', boreMm: 45, outerMm: 85, widthMm: 19 },

  // Wheel Hubs & Automotive DU / DAC & Cages à aiguilles (Page 3)
  { id: 'usj-74', itemNo: 74, type: 'DU47880055ZZ', brand: 'USJ', priceDhs: 336.00, category: 'wheel_hub', categoryLabel: 'Moyeux de Roue Auto', seal: 'ZZ Blindé', description: 'Roulement de roue automobile double rangée blindé', boreMm: 47, outerMm: 88, widthMm: 55 },
  { id: 'usj-75', itemNo: 75, type: 'DU55900060ZZ', brand: 'USJ', priceDhs: 364.00, category: 'wheel_hub', categoryLabel: 'Moyeux de Roue Auto', seal: 'ZZ Blindé', description: 'Roulement de roue automobile double rangée blindé', boreMm: 55, outerMm: 90, widthMm: 60 },
  { id: 'usj-76', itemNo: 76, type: 'DU40730055ZZ', brand: 'USJ', priceDhs: 304.00, category: 'wheel_hub', categoryLabel: 'Moyeux de Roue Auto', seal: 'ZZ Blindé', description: 'Roulement de roue automobile double rangée blindé', boreMm: 40, outerMm: 73, widthMm: 55 },
  { id: 'usj-77', itemNo: 77, type: 'DU49840048ZZ', brand: 'USJ', priceDhs: 283.00, category: 'wheel_hub', categoryLabel: 'Moyeux de Roue Auto', seal: 'ZZ Blindé', description: 'Roulement de roue automobile double rangée blindé', boreMm: 49, outerMm: 84, widthMm: 48 },
  { id: 'usj-78', itemNo: 78, type: 'DAC38720036/33ZZ', brand: 'USJ', priceDhs: 155.00, category: 'wheel_hub', categoryLabel: 'Moyeux de Roue Auto', seal: 'ZZ Blindé', description: 'Roulement de roue DAC automobile renforcé', boreMm: 38, outerMm: 72, widthMm: 36 },

  // Needle Cages (Série K) & Douilles
  { id: 'usj-79', itemNo: 79, type: 'K404718', brand: 'USJ', priceDhs: 23.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 40x47x18', boreMm: 40, outerMm: 47, widthMm: 18 },
  { id: 'usj-80', itemNo: 80, type: 'K121513', brand: 'USJ', priceDhs: 6.50, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 12x15x13', boreMm: 12, outerMm: 15, widthMm: 13 },
  { id: 'usj-81', itemNo: 81, type: 'K251917', brand: 'USJ', priceDhs: 11.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K', boreMm: 19, outerMm: 25, widthMm: 17 },
  { id: 'usj-82', itemNo: 82, type: 'K253320', brand: 'USJ', priceDhs: 12.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 25x33x20', boreMm: 25, outerMm: 33, widthMm: 20 },
  { id: 'usj-83', itemNo: 83, type: 'K354218', brand: 'USJ', priceDhs: 19.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 35x42x18', boreMm: 35, outerMm: 42, widthMm: 18 },
  { id: 'usj-84', itemNo: 84, type: 'K354220', brand: 'USJ', priceDhs: 27.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 35x42x20', boreMm: 35, outerMm: 42, widthMm: 20 },
  { id: 'usj-85', itemNo: 85, type: 'K404517', brand: 'USJ', priceDhs: 16.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 40x45x17', boreMm: 40, outerMm: 45, widthMm: 17 },
  { id: 'usj-86', itemNo: 86, type: 'K404527', brand: 'USJ', priceDhs: 16.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 40x45x27', boreMm: 40, outerMm: 45, widthMm: 27 },
  { id: 'usj-87', itemNo: 87, type: 'K475217', brand: 'USJ', priceDhs: 22.50, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 47x52x17', boreMm: 47, outerMm: 52, widthMm: 17 },
  { id: 'usj-88', itemNo: 88, type: 'K556020', brand: 'USJ', priceDhs: 24.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 55x60x20', boreMm: 55, outerMm: 60, widthMm: 20 },
  { id: 'usj-89', itemNo: 89, type: 'K556325', brand: 'USJ', priceDhs: 32.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 55x63x25', boreMm: 55, outerMm: 63, widthMm: 25 },
  { id: 'usj-90', itemNo: 90, type: 'K556315', brand: 'USJ', priceDhs: 39.50, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 55x63x15', boreMm: 55, outerMm: 63, widthMm: 15 },
  { id: 'usj-91', itemNo: 91, type: 'KT253216', brand: 'USJ', priceDhs: 15.50, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage à aiguilles série KT 25x32x16', boreMm: 25, outerMm: 32, widthMm: 16 },
  { id: 'usj-92', itemNo: 92, type: 'K455218', brand: 'USJ', priceDhs: 22.50, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 45x52x18', boreMm: 45, outerMm: 52, widthMm: 18 },
  { id: 'usj-93', itemNo: 93, type: 'K374217', brand: 'USJ', priceDhs: 22.50, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 37x42x17', boreMm: 37, outerMm: 42, widthMm: 17 },
  { id: 'usj-94', itemNo: 94, type: 'K354216', brand: 'USJ', priceDhs: 20.00, category: 'needle', categoryLabel: 'Cages à Aiguilles K', seal: 'Cage', description: 'Cage radiale à aiguilles série K 35x42x16', boreMm: 35, outerMm: 42, widthMm: 16 },
  { id: 'usj-95', itemNo: 95, type: 'BA1812', brand: 'USJ', priceDhs: 15.50, category: 'needle', categoryLabel: 'Douilles à Aiguilles', seal: 'Douille', description: 'Douille à aiguilles à coupelle emboutie BA 1812', boreMm: 28.57, outerMm: 34.92, widthMm: 19.05 },
];

export const ALL_TARIFF_ITEMS: TariffItem[] = [...HBSJ_TARIFF, ...USJ_TARIFF];

export const BRAND_SUMMARY = {
  HBSJ: {
    name: 'HBSJ BEARING',
    tagline: 'Ligne Industrielle Standard & Haute Compétitivité',
    desc: 'La marque référence pour les distributeurs et ateliers industriels : meilleur rapport qualité-prix sortie usine constructeur, acier 100Cr6 et fiabilité certifiée.',
    referencesCount: HBSJ_TARIFF.length,
    pdfUrl: '/public/assets/aistudio/hbsj_9847da1b.pdf',
    badgeColor: 'border-blue-500 text-blue-400 bg-blue-950/60'
  },
  USJ: {
    name: 'USJ BEARING',
    tagline: 'Ligne Premium Industrielle Renforcée & Automobile',
    desc: 'La marque haute endurance pour mines, concasseurs, carrières, charges vibratoires, paliers lourds et moyeux de roues automobiles spécifiques.',
    referencesCount: USJ_TARIFF.length,
    pdfUrl: '/public/assets/aistudio/usj_16db0aa4.pdf',
    badgeColor: 'border-amber-500 text-amber-400 bg-amber-950/60'
  }
};
