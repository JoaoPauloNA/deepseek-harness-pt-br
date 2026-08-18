/**
 * Host half of the locale plugin.
 *
 * The Web module loader discovers the browser half through `./client`; this
 * empty host entry keeps the plugin present in the Cordis loader lifecycle.
 */
export function apply() {}
