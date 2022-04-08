<template>
  <form @submit="onSubmit" class="delete-form">
    <div class="form-control">
      <label>Exercise name:</label>
      <input type="text" v-model="title" name="title" placeholder="Delete exercise" />
    </div>
        <input type="submit" value="submit" class="btn btn-block" />
  </form>
</template>

<script>
export default {
    name: 'DeleteExercise',
    data() {
        return {
            title: '',

        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.title) {
                alert('Please chose a name')
                return
            }
            
            this.$emit('delete-exercise', this.title) 
        }
    }
}
</script>

<style scoped>
.delete-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 80%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

</style>