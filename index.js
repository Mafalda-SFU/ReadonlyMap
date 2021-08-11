const blackList = ['clear', 'delete', 'set']

const handler =
{
  get(target, propertyKey) {
    if(blackList.includes(propertyKey))
      throw new SyntaxError(`${propertyKey} not allowed`)

    let result = Reflect.get(target, propertyKey)

    if(result instanceof Function) result = result.bind(target)

    return result
  }
}


module.exports = function ReadonlyMap(target)
{
  return new Proxy(target, handler)
}
