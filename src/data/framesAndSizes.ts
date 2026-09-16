import { FrameOption, ProductSize } from '../types';

export const STANDARD_SIZES: ProductSize[] = [
  {
    id: 'a3',
    name: 'Standard Gallery',
    dimensions: '12" × 18" (30 × 45 cm)',
    priceModifier: 1.0,
  },
  {
    id: 'a2',
    name: 'Exhibition Master',
    dimensions: '18" × 24" (45 × 60 cm)',
    priceModifier: 1.45,
    popular: true,
  },
  {
    id: 'a1',
    name: 'Grand Statement',
    dimensions: '24" × 36" (60 × 90 cm)',
    priceModifier: 2.1,
  },
  {
    id: 'collector',
    name: 'Collector 8K Monument',
    dimensions: '32" × 48" (80 × 120 cm)',
    priceModifier: 2.9,
  }
];

export const FRAME_OPTIONS: FrameOption[] = [
  {
    id: 'unframed',
    name: 'Unframed Archival Print',
    material: '310gsm Hahnemühle Photo Rag with 1" white exhibition border',
    price: 0,
    borderStyle: 'border-0',
    previewColor: 'transparent',
  },
  {
    id: 'obsidian-matte',
    name: 'Obsidian Matte Aluminum',
    material: 'Anodized brushed aerospace aluminum with anti-glare museum glass',
    price: 49,
    borderStyle: 'border-[8px] border-[#18181f] shadow-[0_0_20px_rgba(0,0,0,0.8)]',
    previewColor: '#121218',
  },
  {
    id: 'brushed-titanium',
    name: 'Cyber Titanium Alloy',
    material: 'Precision-milled gunmetal titanium frame with UV-shield acrylic',
    price: 65,
    borderStyle: 'border-[8px] border-[#383b48] shadow-[0_0_25px_rgba(56,189,248,0.2)]',
    previewColor: '#2b2e3b',
  },
  {
    id: 'floating-acrylic',
    name: 'Museum Floating Acrylic',
    material: '4mm diamond-polished cast acrylic face mount with hidden aluminum float subframe',
    price: 89,
    borderStyle: 'border-[1px] border-white/30 shadow-[0_15px_40px_rgba(168,85,247,0.3)] ring-4 ring-purple-500/20',
    previewColor: 'rgba(255,255,255,0.05)',
  }
];
