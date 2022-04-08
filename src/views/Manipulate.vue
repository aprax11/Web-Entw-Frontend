<template>
    <div v-show="showDeleteForm">
      <DeleteExercise @delete-exercise="deleteTask" />
    </div>
    <div v-show="showAddForm">
      <AddExerciseForm @add-exercise="addExercise" />
    </div>
    <div v-show="showSearchForm">
      <SearchForm @search-exercise="search" />
    </div>
    <Exercises :exercises="exercises" />
</template>

<script>
import Exercises from '../components/Exercises.vue'
import DeleteExercise from '../components/DeleteExercise.vue'
import AddExerciseForm from '../components/AddExerciseForm.vue'
import SearchForm from '../components/SearchForm.vue'
import ExerciseService from '../services/ExerciseService'

export default {
  name: 'Manipulate',
  props: {
    showDeleteForm: Boolean,
    showAddForm: Boolean,
    showSearchForm: Boolean
    
  },
  components: {
    Exercises,
    DeleteExercise,
    AddExerciseForm,
    SearchForm
  },
  data() {
    return {
      exercises: [],
    }
  },
   methods: {
    deleteTask(title) {
      var ex = this.exercises.filter(function(exercise)  {
        return exercise.title == title
      })
      for(var i = 0; i < ex.length; i++){
             ExerciseService.deleteExercise(ex[i].id)
      }
      window.location.reload()
    },
    getExercises() {
      ExerciseService.getAllExercises().then((response) => {
        this.exercises = response.data;
      })
    },
    addExercise(newExercise) {
      ExerciseService.addExercise(newExercise).then(response => newExercise.id = response.id)
      window.location.reload()
    },
    search(search) {
      if(search == "all") {
        window.location.reload()
      }else {
        ExerciseService.getBodypart(search).then(response => {
          this.exercises = response
        })
      }
    }
    
  },

   
  created() {
   this.getExercises()
  }
}
</script>


