export function cleanObj(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}
  console.log('obj', obj)
  for (const key in obj) {
    if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key]
    }
  }
  console.log('result ', result)
  return result
}
