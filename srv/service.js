const cds = require("@sap/cds");
const { somar, multiplicar, dividir } = require("./lib/math");

module.exports = class MeuServico extends cds.ApplicationService {
  init() {
    this.on("somar", (req) => {
      return somar(req.data.a, req.data.b);
    });

    this.on("multiplicar", (req) => {
      return multiplicar(req.data.a, req.data.b);
    });

    this.on("dividir", (req) => {
      return dividir(req.data.a, req.data.b);
    });

    return super.init();
  }
};
