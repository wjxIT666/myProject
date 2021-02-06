import JSencrypt from 'jsencrypt';
export default {
    rsaCode: function (str) {
        //获取公钥
        let pubKey = `-----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCdNjxtIXdmTU1eFulkKUW/zTum
        4MQhyh4jeZToEtKy2aF7o5cOv1I+XOdtj09vDPLXqlyych4OVkMWAnu2yO6RZVLY
        hXqr7dYq2JsabqenRq80nPwRFQxk97fBGlQuBd0khMsai/VmtLZi8wPnCAVm4DRT
        WzHUesMME8RdQlq6qQIDAQAB
        -----END PUBLIC KEY-----`;
        //Jsencrypt实例化
        let encryptStr = new JSencrypt();
        //设置公钥
        encryptStr.setPublicKey(pubKey);
        //公钥加密
        let data = encryptStr.encrypt(str.toString());
        return data;
    }
}
