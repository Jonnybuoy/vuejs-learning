 const app = Vue.createApp({
     data() {
         return {
             showBooks: true,
             title: "The final Empire",
             author: 'Brandon Sanderson',
             age: 40,
             x: 0,
             y: 0

         }
     },
     methods: {
         toggleShowBooks() {
             this.showBooks = !this.showBooks
         },
         handleEvent(e) {
             console.log(e, e.type)

         },
         handleMousemove(e) {
             this.x = e.offsetX
             this.y = e.offsetY

         }

     }
 })

 app.mount('#app')