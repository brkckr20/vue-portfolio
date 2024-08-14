import { reactive } from "vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase'

const auth = getAuth(app);


const state = reactive({
    isAuthentication: false
})


onAuthStateChanged(auth, user => {
    state.isAuthentication = !!user;
});

export default {
    state,
};