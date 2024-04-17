export type PoolShapes = 'Rectangular' | 'Circular' | 'Irregular';

export const calculateRectangularGallons = (
  depth1: number,
  length: number,
  width: number,
  depth2?: number,
): number => {
  if (depth2) {
    return Math.floor(length * width * ((depth1 + depth2) / 2) * 7.5);
  }
  return Math.floor(length * width * depth1 * 7.5);
};

export const calculateCircularGallons = (
  depth1: number,
  diameter: number,
  depth2?: number,
): number => {
  const radius = diameter * diameter;
  if (depth2) {
    return Math.floor(Math.PI * (radius) * ((depth1 + depth2) / 2) * 7.5);
  }
  return Math.floor(Math.PI * (radius) * depth1 * 7.5);
};

export const calculateIrregularGallons = (
  depth1: number,
  length: number,
  largeDiameter: number,
  smallDiameter: number,
  depth2?: number,
): number => {
  const cubicVolume = !depth2 ? (
    0.45 * (largeDiameter + smallDiameter) * length * depth1
  ) : (
    0.45 * ((largeDiameter + smallDiameter) * length) * ((depth1 + depth2) / 2)
  );
  return Math.floor(cubicVolume * 7.5);
};

export const calculateSaltDemand = (
  poolVolume: number,
  saltLevel: number,
): number => Math.floor((poolVolume * 8.35 * (0.0032 - (saltLevel / 1000000))));
