<template>
    <div>
        <h3 v-if="questionRow.header">{{ questionRow.header }}:</h3>
        <v-row> 
            <v-col v-for="question in questionRow.questions" :key="question.id" >
                <questionBox 
                    @answerChange="answerChange(question.id, $event )" :question="question" 
                    :answer="getQuestionAnswers.find(answer => answer.id == question.id)?.answer || ''"
                    :disabled="isDisabled(question)"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import questionBox from "./questionBox.vue"
import {  mapGetters } from 'vuex'

export default {
    props:["questionRow"],
    components:{questionBox},

    computed: {
        ...mapGetters(["getQuestionAnswers"])
    },

    methods: {
        isDisabled(question){
        if(!question.enabledBy) return false
        // is enabled if answer is for the wanted question and the answer is equal to the activating value
        return !question.enabledBy.every((questionId,i) =>  // check if enabling value is in answers/enabling value is false
                                                            this.getQuestionAnswers.find(answer=> 
                                                            answer.id == questionId && 
                                                            (answer.answer === question.enabledValue[i] || 
                                                             question.enabledValue[i] === "" && answer.answer)) 
                                                             || 
                                                             // check if enabled i=by false meaning if checkbox hasnt been selected its also false
                                                             (question.enabledValue[i] === null && 
                                                              this.getQuestionAnswers.every(answer=>answer.id != questionId )))
         },

         answerChange(id, answer){
            this.$emit("answerChange", {id, answer})
        },
    },

}
</script>

<style scoped>
.row{
    margin:0px
}
</style>