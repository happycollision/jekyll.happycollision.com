export function concatWithSlash(...str: string[]) {
  return [...str, ""].join("/").replace(/\/+/g, "/")
}

export function slasher(
  strings: TemplateStringsArray,
  ...values: (string | number | undefined)[]
) {
  return (
    strings.map((str, i) => str + (values[i] ?? "")).join("/") + "/"
  ).replace(/\/+/g, "/")
}

export function urlsMatch(str1: string, str2: string) {
  return concatWithSlash(str1, "") === concatWithSlash(str2, "")
}
