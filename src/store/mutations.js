import {
    RECEIVE_DIFF
} from './mutation-type'



export default {
    [RECEIVE_DIFF](state, {
        diff
    }) {
        state.diff = diff
    },

}