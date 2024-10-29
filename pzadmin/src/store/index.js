import {createStore} from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
    plugins: [new createPersistedstate({
        key: 'pz_sys'
    })],
    modules:{
        menu
    }

})