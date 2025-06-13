/**
 * Función para mapear objetos de un tipo a otro.
 * @param input Objeto de origen.
 * @param mapper Función que transforma input a output.
 * @returns Resultado de la transformación.
 */
export function Mapper<I, O>(input: I, mapper: (item: I) => O): O {
  return mapper(input)
}

/**
 * Mapea listas de objetos.
 * @param items Array de origen.
 * @param mapper Función que transforma cada elemento.
 * @returns Array transformado.
 */
export function MapList<I, O>(items: I[], mapper: (item: I) => O): O[] {
  return items.map(mapper)
}
