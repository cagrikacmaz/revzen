const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** Prefixes a site-relative path with the configured base. */
export function url(path = ''): string {
  return base + path.replace(/^\//, '');
}
