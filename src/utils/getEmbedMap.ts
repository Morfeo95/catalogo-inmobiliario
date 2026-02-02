export function getEmbedMap(url?: string | null): string | null {
  if (!url) return null;
  return url.includes("/maps/embed") ? url : null;
}
