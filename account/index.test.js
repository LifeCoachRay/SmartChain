const Account = require('./index');

describe('Account', () => {
  let account, data, signature;

  beforeEach(() => {
    account = new Account();
    data = { foo: 'foo' };
    signature = account.sign(data);
  });

  describe('verifySignature()', () => {
    it('validates a signature generated by the account', () => {
      expect(Account.verifySignature({
        publicKey: account.address,
        data,
        signature
      })).toBe(true);
    });

    it('invalidates a signature not generated by the account', () => {
      expect(Account.verifySignature({
        publicKey: new Account().address,
        data,
        signature
      })).toBe(false);
    });
  });
});