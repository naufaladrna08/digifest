<template>
	<div class="container">
		<p> Please wait... </p>
	</div>	
</template>

<script>
export default {
	data() {
		return {
			token: this.$route.query.token ? this.$route.query.token : null
		}
	},
	async mounted() {
		await this.$auth.loginWith('local', {data: {
			token: this.token
		}}).catch((e) => {
			console.log(e)	
		})

		switch (this.$auth.user.jenisAkun) {
			case 'guru':
				this.$router.push('/guru')
				break
			case 'murid':
				this.$router.push('/murid')
				break
		}
	},
	auth: 'guest'
}

// export default {
//   data() {
//     return {
//       token: this.$route.query.token ? this.$route.query.token : null
//     }
//   },
//   mounted() {
//   	this.$auth.strategy.token.set('local', 'Bearer ' + this.token)
//     this.$auth.setStrategy('local')
//     console.log(this.token)
//     this.$auth.fetchUser().then(() => {
// 	    switch (this.$auth.user.jenisAkun) {
// 				case 'guru':
// 					this.$router.push('/guru')
// 					break
// 				case 'murid':
// 					this.$router.push('/murid')
// 					break
// 			}
//     }).catch( (e) => {
//       this.$auth.logout();
//       console.log(e)	
//     });
//   },
//   auth: 'guest'  
// }
</script>
