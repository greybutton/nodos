export default class Route {
  constructor(options) {
    this.parent = options.parent;
    this.name = options.name;
    this.resourceName = options.resourceName;
    this.middlewares = options.middlewares;
    this.url = options.url;
    this.method = options.method;
  }
}
