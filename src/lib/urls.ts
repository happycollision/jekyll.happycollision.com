export function concatWithSlash(...str: string[]) {
  return [...str, ""].join("/").replace(/\/+/g, "/")
}

export function urlsMatch(str1: string, str2: string) {
  return concatWithSlash(str1, "") === concatWithSlash(str2, "")
}
