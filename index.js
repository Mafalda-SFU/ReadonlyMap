const blackList = ['clear', 'delete', 'set']

const handler =
{
  get(target, propertyKey, receiver) {
    if(blackList.includes(propertyKey))
      throw new SyntaxError(`${propertyKey} not allowed`)

    return Reflect.get(target, propertyKey, receiver)
  }
}


export default function ReadonlyMap(target)
{
  return new Proxy(target, handler)
}
