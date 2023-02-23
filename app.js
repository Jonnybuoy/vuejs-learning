 const app = Vue.createApp({
     data() {
         return {
             showBooks: true,
             title: "The final Empire",
             author: 'Brandon Sanderson',
             age: 40

         }
     },
     methods: {
         toggleShowBooks() {
             this.showBooks = !this.showBooks
         }
     }
 })

 app.mount('#app')