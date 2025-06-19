const cds = require("@sap/cds");
const { somar, multiplicar, dividir } = require("../srv/lib/math");

describe("Testes matematicos", () => {
  const { expect, assert } = cds.test();

  describe("Testes de soma", () => {
    it("teste de soma 1 + 2", () => {
      expect(somar(1, 2)).to.be.equal(3);
    });

    it("teste de soma 5 + 3", () => {
      expect(somar(5, 3)).to.be.equal(8);
    });

    it("teste de soma 100 + 1376", () => {
      expect(somar(100, 1376)).to.be.equal(1476);
    });

    it("teste de soma undefined + undefined", () => {
      assert.throws(() => {
        somar(undefined, undefined), new Error("Error");
      });
    });

    it("teste de soma null + null", () => {
      assert.throws(function () {
        somar(null, null), new Error("Error");
      });
    });
  });

  describe("Testes de multiplicação", () => {
    it("teste de multiplicar 2 * 1", () => {
      expect(multiplicar(2, 1)).to.be.equal(2);
    });

    it("teste de multiplicar 5 * 3", () => {
      expect(multiplicar(5, 3)).to.be.equal(15);
    });

    it("teste de soma 100 + 1376", () => {
      expect(multiplicar(100, 1376)).to.be.equal(137600);
    });
  });

  describe("Testes de divisões", () => {
    it("teste de dividir 1 / 1", () => {
      expect(dividir(1, 1)).to.be.equal(1);
    });

    it("teste de dividir 15 / 3", () => {
      expect(dividir(15, 3)).to.be.equal(5);
    });

    it("teste de dividir 1 / 0", () => {
      expect(dividir(1, 0)).to.be.equal(Infinity);
    });
  });
});
