<template>
    <header>
        <h1>{{ title }}</h1> 
        <Button v-show="manipulatePage" @clicked="$emit('show-deleteForm')" text="Delete Exercise" color="grey" />
        <Button v-show="manipulatePage" @clicked="$emit('show-addForm')" text="Add Exercise" color="grey" />
        <Button v-show="manipulatePage" @clicked="$emit('show-searchForm')" text="Select a Bodypart" color="grey" />
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
        name: 'Header',
        props: {
            title: String,
        }, 
        components: {
            Button
        },
        computed: {
            manipulatePage() {
                if(this.$route.path === '/manipulate') {
                    return true
                } else {
                    return false
                }
            }
        }  
}
</script>

<style scoped>
header {
  vertical-align: middle;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

</style>


