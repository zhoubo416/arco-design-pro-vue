import { JSEncrypt } from 'jsencrypt';

export function hexEncode(str: string, pub: string) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(pub); //传入字符串
  const result = encrypt.encrypt(str);
  return result;
}
