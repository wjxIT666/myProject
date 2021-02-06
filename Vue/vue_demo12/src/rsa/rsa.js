import JSencrypt from 'jsencrypt';

export default {
    rsaCode: function (str) {
        //获取公钥
        let pubKey = `-----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDtoYvSL6BZ7D/Xz2co1WNf5pHQ
        b5tJJrjswl1m4QZvazvEgZcdGdZPXOBlWYhB90TvYg7UjELBB/HN0vXOVsR3Hs91
        N3BfcwJSe5omTia967wyIHuvwLJqRz3heMA/irMSeYXcREG94SJHDaSLHDNd0FzQ
        HSPkXVGl0ZNRsh1NPwIDAQAB
        -----END PUBLIC KEY-----`;
        //创建rsa实例
        let encryStr = new JSencrypt();
        //设置公钥
        encryStr.setPublicKey(pubKey);
        //公钥加密
        let data = encryStr.encrypt(str.toString());

        return data;
    }
}
