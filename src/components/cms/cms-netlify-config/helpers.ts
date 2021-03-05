export function titleCase(str: string): string {
  const parts = str.toLowerCase().split(' ');
  for (var i = 0; i < parts.length; i++) {
    parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1); 
  }
  return parts.join(' ');
}
