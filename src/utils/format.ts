export function currency(value: number): string {
  return `$${value.toFixed(2)}`;
}

export function kilometers(value: number): string {
  return `${value.toFixed(1)} km`;
}
