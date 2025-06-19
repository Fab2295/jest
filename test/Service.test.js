const cds = require("@sap/cds");

describe("Testes matematicos", () => {
  const { GET, expect } = cds.test(__dirname + "/../", "--in-memory");

  describe("Testes somas", () => {
    it("Teste somar 1 + 2", async () => {
      const result = await GET("/odata/v4/MeuServico/somar(a=1,b=2)");

      expect(result.data.value).to.be.equal(3);
    });

    it("Teste somar 0 + 0", async () => {
      const result = await GET("/odata/v4/MeuServico/somar(a=0,b=0)");

      expect(result.data.value).to.be.equal(0);
    });

    it("Teste somar valores negativos", async () => {
      const result = await GET("/odata/v4/MeuServico/somar(a=-1,b=-3)");

      expect(result.data.value).to.be.equal(-4);
    });
  });

  describe("Testes multiplicações", () => {
    it("Teste multiplicar 2 * 2", async () => {
      const result = await GET("/odata/v4/MeuServico/multiplicar(a=2,b=2)");

      expect(result.data.value).to.be.equal(4);
    });

     it("Teste multiplicar 13567 * 0", async () => {
      const result = await GET("/odata/v4/MeuServico/multiplicar(a=13567,b=0)");

      expect(result.data.value).to.be.equal(0);
    });
  });

  describe("Testes divisões", () => {
    it("Teste multiplicar 2 / 2", async () => {
      const result = await GET("/odata/v4/MeuServico/dividir(a=2,b=2)");

      expect(result.data.value).to.be.equal(1);
    });
  });
});
