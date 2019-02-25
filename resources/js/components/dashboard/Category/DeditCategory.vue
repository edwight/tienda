<template>
	<div>
        <form autocomplete="off" @submit.prevent="editCategory" method="put">
            <div class="form-group">
                <label for="name">Title</label>
                <input type="text" id="name" class="form-control" v-model="item.name" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" class="form-control" v-model="item.description" required></textarea>
            </div>

            <button type="submit" class="btn btn-info">Editar</button>
        </form>
    </div>
</template>
<script>
    export default{
        name:'DeditCategory',
        created(){
            this.categoryId = this.$route.params.categoryId;
            this.findCategory();
        },
        data(){
            return {
                item:{},
                categoryId:null,
            }
        },
        methods:{
            findCategory(){
                this.$store.dispatch('getCategoryfind',this.categoryId)
                .then(response=>{
                //console.log(response)
                this.item = response.data.data
            })
            .catch(error=>{
                console.log(error.response)
            })
            },
            editCategory(){
                this.$store.dispatch('editCategory',{
                    categoryId:this.item.id,
                    name:this.item.name,
                    description:this.item.description,
                })
                .then(response=>{
                    console.log(response);
                    this.$router.push({ name: 'DeditCategory'});

                })
                .catch(error=>{
                    console.log(error)
                })
            }   
        }
        
    }
</script>