import { ADD_COUNT } from './mutations2.js';
export default {
    [ADD_COUNT] (state, data) {
        state.add += data;
    }
}
