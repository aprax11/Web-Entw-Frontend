<template>
<div :key="exercise.id" v-for="exercise in exercises">
    <Exercise :exercise="exercise"/>
</div>
</template>

<script>
import Exercise from './Exercise'

export default {
   name: 'Exercises',
   props: {
       exercises: Array
   },
   components: {
    Exercise
   }
}
</script>