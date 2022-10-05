module.exports = Ferdi =>
  class Bitrix24 extends Ferdi {
    async validateUrl() {
      return true;
    }
  };
