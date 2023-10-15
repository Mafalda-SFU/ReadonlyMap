/**
 * An array of blacklisted property keys.
 *
 * @type {string[]}
 */
const blackList = ['clear', 'delete', 'set']

/**
 * A handler object for the Proxy.
 *
 * @type {object}
 */
const handler =
{
  /**
   * A trap for getting property values.
   *
   * @param {object} target - The target object.
   * @param {string} propertyKey - The property key to get.
   *
   * @returns {*} - The property value.
   * @throws {SyntaxError} - If the property key is blacklisted.
   */
  get(target, propertyKey)
  {
    if(blackList.includes(propertyKey))
      throw new SyntaxError(`${propertyKey} not allowed`)

    let result = Reflect.get(target, propertyKey)

    if(result instanceof Function) result = result.bind(target)

    return result
  }
}


/**
 * Creates a new Proxy object with the given target object and handler.
 *
 * @param {object} target - The target object to proxy.
 *
 * @returns {object} - The new Proxy object.
 */
module.exports = function ReadonlyMap(target)
{
  return new Proxy(target, handler)
}
