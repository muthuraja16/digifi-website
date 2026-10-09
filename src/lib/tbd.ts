/** True for content still waiting on DIGIFI ("[TBD: ...]"). Such values are never used as links. */
export function isTbd(value: string | null | undefined): boolean {
  return !value || value.startsWith("[TBD");
}
