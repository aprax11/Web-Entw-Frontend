<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Exercise name:</label>
      <input type="text" v-model="title" name="title" placeholder="Exercise name" />
      <label>Affected bodypart:</label>
      <select name="select" id="select" v-model="bodypart"> 
          <option value="Chest">Chest</option>
          <option value="Arms">Arms</option>
          <option value="Legs">Legs</option>
          <option value="Back">Back</option>
      </select>
      <label>Difficulty:</label>
      <input type="range" max="5" min="0" v-model="difficulty" name="difficulty" />
      <p> <br />
        {{difficulty}} </p>
      <label>Comment:</label>
      <input type="text" v-model="comment" name="comment" placeholder="Comment" />
      
    </div>
        <input type="submit" value="submit" class="btn btn-block" />
  </form>
</template>

<script>
export default {
    name: 'AddExercise',
    data() {
        return {
            title:'',
            bodypart: '',
            difficulty: 0,
            comment: ''

        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.title) {
                alert('Please chose a name')
                return
            }else if(!this.bodypart) {
              alert('Please chose a bodypart')
                return  
            }
            
            const newExercise = {
                id: Math.floor(Math.random() * 10000),
                title: this.title,
                bodypart: this.bodypart,
                difficulty: this.difficulty,
                comment: this.comment

            }
            

            this.$emit('add-exercise', newExercise)

            this.title = ''
            this.bodypart = ''
            this.difficulty = 0
            this.comment = ''
        }
    }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
  margin: 10px;
}
.form-control input {
  width: 80%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control select {
  width: 80%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

</style>