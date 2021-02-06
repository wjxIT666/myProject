import { Message } from 'element-ui';
export default {
    //校验用户名
    checkName: function (name) {
        let reg1 = /^[a-zA-Z0-9]{8,14}$/;
        let reg2 = /\D/;
        if (!reg1.test(name)) {
            Message({
                type: 'warning',
                message: '用户名必须是8-14位字母或者数字和字母组合',
                duration: 3000
            });
            return false;
        } else if (!reg2.test(name)) {
            Message({
                type: 'warning',
                message: '用户名必须是8-14位字母或者数字和字母组合',
                duration: 3000
            });
            return false;
        } else {
            return true;
        };
    },
    //校验密码
    checkPassword: function (password) {
        let reg = /^[0-9a-zA-Z_]{6}$/;
        if (!reg.test(password)) {
            Message({
                type: 'warning',
                message: '密码可以由数字，字母，下划线构成，并且长度为6位',
                duration: 3000
            });
            return false;
        }
    }
};
