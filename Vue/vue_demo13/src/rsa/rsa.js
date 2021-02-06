import JSencrypt from 'jsencrypt';
export default {
    //RSA加密校验
    rsaCheck: function (str) {
        //获取公钥
        let pubKey = `-----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCc8bIcjUu06GcdwGj1Zwjc2dkL
        YVV1LXgWvAnaBtj+AFk4i8ewafPlB5jc8aZNRzWPEA6SfP4QhCpGAPi/kH9hAEuo
        ZVLz90n77PLMCKKXZC2UYURtqQi+ffPdSz7LZh+xi7JWoFnrKjrbCUZ1QOFN6bIC
        RWWkGV6VAy3TZ5ok2QIDAQAB
        -----END PUBLIC KEY-----`;
        //创建JSencrypt实例
        let encryStr = new JSencrypt();
        //设置公钥
        encryStr.setPublicKey(pubKey);
        //加密公钥
        let data = encryStr.encrypt(str.toString());
        return data;
    }
}
