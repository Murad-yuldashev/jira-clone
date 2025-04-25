interface User {
    id: string;
    name: string;
    email: string;
    status: boolean;
}

const initialState: {user: User} = {
    user: {
        id: '',
        name: '',
        email: '',
        status: false,
    }
};

const useAuthStore = defineStore('auth', {
    state: () => initialState,

    getters: {
        currentUser: state => state.user
    },

    actions: {
        set(user: User) {
            this.$patch({user})
        },
        clear() {
            this.$patch(initialState)
        }
    }
});