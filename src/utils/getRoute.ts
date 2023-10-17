
// Recieves a Route String and an option params object
const getRoute = (route: string, params: object = {}): string => {
    return Object.keys(params).reduce((modRoute, key) => {
        return modRoute.replace(`:${key}`, params[key])
    }, route)
}

export default getRoute