<template>
    <div>
        <h1>Авторизация</h1>
        <div>
            <input v-model="username"
                   title="Login"
            />
            <input v-model="password"
                   title="Password"
            />
        </div>
        <button @click="authRequest">Войти</button>
    </div>
</template>

<script>
	import {mapState, mapActions} from 'vuex';

	export default {
		name: "Login",
        computed: {
            ...mapState('user', {
            	token: 'token',
            }),
        },
        data(){
			return {
				username: '',
                password: '',
            };
        },
        methods: {
            ...mapActions('user', {
				login: 'login',
            }),
			authRequest(){
                this.login({
					_username: this.username,
					_password: this.password,
                }).then(() => {
					this.$router.replace('/home');
                });
            }
        },
	}
</script>

<style scoped>

</style>