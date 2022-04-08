<template>
    <div class="exercise">
    <h2>{{ exercise.title }}</h2>
    <p> Bodypart: <br />
      {{exercise.bodypart}} </p>
    <p> Difficulty: <br />
      {{exercise.difficulty}} </p>
    <p> Comments: <br />
      {{exercise.comment}} </p>
    <form @submit="onSubmit" class="comment-form">
    <div class="form-control">
      <label>Add a comment: </label>
      <input type="text" v-model="newComment"/>
    </div>
        <input type="submit" value="submit" class="btn btn-block" />
    </form>
      <Button @clicked="showChangeFunc" text="overwrite" color="black" />
      <div v-show="showChangeForm">
        <AddExerciseForm @add-exercise="change" />
      </div>
   </div>
</template>


<script>
import Button from '../components/Button.vue'
import ExerciseService from '../services/ExerciseService'
import AddExerciseForm from '../components/AddExerciseForm.vue'
export default {
  name: 'Exercise',
  components: {
     AddExerciseForm,
     Button
     },
    props: {
        exercise: Object,   
    },
    data() {
      return {
        newComment: '',
        showChangeForm: false
      }
    },

    methods: {
      onSubmit(e) {
        e.preventDefault()
        let comments = this.exercise.comment + '\n' + this.newComment
        ExerciseService.patchComment(this.exercise, comments)

      },
      showChangeFunc() {
        this.showChangeForm = !this.showChangeForm
      },
      change(newExercise) {
        newExercise.id = this.exercise.id
        ExerciseService.change(newExercise)
        window.location.reload()
      }

    }
}
</script>

<style scope>
.comment-form {
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
.fas {
  color: rgba(236, 232, 232, 0.777);
}
.exercise {
  vertical-align: middle;
  white-space: pre-wrap;
  background: #e7e4e469;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
