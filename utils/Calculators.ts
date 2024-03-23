export type PoolShapes = 'Rectangular' | 'Circular' | 'Irregular';

export const calculateGallons = (
  shape: PoolShapes,
  depth1: number,
  length?: number,
  width?: number,
  depth2?: number,
  diameter?: number,
  largeDiameter?: number,
  smallDiameter?: number,
): number | undefined => {
  if (shape === 'Rectangular' && length && width) {
    if (depth2) {
      return Math.floor(length * width * ((depth1 + depth2) / 2) * 7.5);
    }
    return Math.floor(length * width * depth1 * 7.5);
  }
  if (shape === 'Circular' && diameter) {
    const radius = diameter;
    if (depth2) {
      return Math.floor(Math.PI * (radius * radius) * ((depth1 + depth2) / 2) * 7.5);
    }
    return Math.floor(Math.PI * (radius * radius) * depth1 * 7.5);
  }
  if (shape === 'Irregular' && largeDiameter && smallDiameter && length) {
    const cubicVolume = !depth2 ? (
      0.45 * (largeDiameter + smallDiameter) * length * depth1
    ) : (
      0.45 * ((largeDiameter + smallDiameter) * length) * ((depth1 + depth2) / 2)
    );
    return Math.floor(cubicVolume * 7.5);
  }
  return undefined;
};
