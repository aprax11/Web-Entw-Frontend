import axios from "axios";

const URL = "http://localhost:5000/api/exercises/"

class ExerciseService{
    addExercise(exercise){
        return axios.post(URL, exercise)
    }
    change(exercise){
        return axios.put(URL + exercise.id, exercise)
    }
    deleteExercise(id) {
        return axios.delete(URL + id)
    }
    getAllExercises() {
        return axios.get(URL)
    }
    patchComment(exercise, newComment){
        exercise.comment = newComment
        return axios.patch(URL + exercise.id, exercise)
    }
    getBodypart(bodypart) {
        return axios.get(URL).then(response => response.data.filter(exercise => exercise.bodypart == bodypart))
    }
}

export default new ExerciseService()