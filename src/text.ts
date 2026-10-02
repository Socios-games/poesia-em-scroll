// "Camões" -> "camoes": para a busca ignorar acentos e maiúsculas.
export function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}
