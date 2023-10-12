
// Recieves a Route String and an option params object
const getRoute = (route: String, params: object = {}) => {
    return Object.keys(params).reduce((modRoute, key) => {
        return modRoute.replace(`:${key}`, params[key])
    }, route)
}

export default getRoute