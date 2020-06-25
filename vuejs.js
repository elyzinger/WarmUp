
const app = new Vue({
  
  el: "#app",
  data: {
    index:0,
      customers:[
        name="",
        email=""
      ],
    },  
    methods: {
      nextFunc(index){
        if(index < this.customers.length - 1){
          this.index = index + 1;
        }   
        else
        Swal.fire('End')
      },
      backFunc(index){
        if(index > 0){
          this.index = index - 1; 
        }
        else {
          Swal.fire('Start')
        }

      },
    },
    mounted(){
      fetch( "https://jsonplaceholder.typicode.com/posts/1/comments")

      .then(Response => Response.json())
      .then((data)=>{
     
           this.customers = data;
     
      })
    },
 
  template: `
    <div>
      <h2> 
      Name: {{customers[index].name}}
      <br/>
      Email: {{customers[index].email}}
      </h2>
      <button v-on:click="backFunc(index)">< BACK</button>
      <button v-on:click="nextFunc(index)">NEXT ></button>
      
    </div>
    `
  
})
