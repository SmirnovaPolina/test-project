<template>
    <div>
        LOGIN {{ token }}
        <button @click="login">1</button>
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
        methods: {
            ...mapActions('user', {
            	auth: 'auth',
            }),
			login(){
                this.auth({
					_username: 'test',
					_password: 'test',
                });
            }
        },
	}
</script>

<style scoped>

</style>