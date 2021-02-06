import axios from 'axios';
export default {
    getDZ (context) {
        axios({
            method: 'get',
            url: '/api/Joke/QueryJokeByTime?key=866b56a2396b4893a214a836a4bc2083&page=2&rows=10&sort=asc&time=1418745237'
        }).then( res => {
            //向mutations发送方法
            context.commit('setDZ', res.data);
        } );
    }
}