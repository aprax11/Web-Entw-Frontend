<template>
    <form @submit="onSubmit" class="search-form">
    <div class="form-control">
      <label>Pick a Bodypart: </label>
      <select name="select" id="select" v-model="select">
          <option value="all">Show all</option> 
          <option value="Chest">Chest</option>
          <option value="Arms">Arms</option>
          <option value="Legs">Legs</option>
          <option value="Back">Back</option>
      </select>
      
    </div>
        <input type="submit" value="submit" class="btn btn-block" />
  </form>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            select: '',

        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.select) {
                alert('Please chose a bodypart')
                return
            }
            
            this.$emit('search-exercise', this.select) 
        }
    }
}
</script>

<style scoped>
.search-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
  margin: 10px;
}
.form-control select {
  width: 80%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

</style>