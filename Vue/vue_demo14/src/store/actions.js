import axios from 'axios';
export default {
    getDuanzi: function (context) {
        axios({
            method: 'get',
            url: '/api/blobRouter'
        }).then( res => {
            //向vuex发送同步数据
            context.commit('setDuanzi', res.data);
        } );
    }
};
