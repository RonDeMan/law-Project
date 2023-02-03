<template>
    <div>
        <div v-for="question in getPageQuestions" :key="question.id">
            <questionBox :question="question"  @answerChange="answerChange(question.id, $event )" 
                :answer="getQuestionAnswers.find(answer => answer.id == question.id)?.answer || ''"
                :disabled="isDisabled(question)"/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

    import questionBox from './questionBox.vue'
export default {
    name:"questionsForm",
    components:{questionBox},
    props:{
        questionPage: {required: true}
    },

    computed:{
        ...mapGetters(["getQuestionAnswers","getQuestionPages"]),

        getPageQuestions(){
            return this.getQuestionPages.find(page=> page.id == this.questionPage).questions
        }
    },
    methods:{
        ...mapActions(["setQuestionAnswer"]),

        answerChange(id, answer){
            this.setQuestionAnswer({id, answer})
        },

        isDisabled(question){
            if(!question.enabledBy) return false

            return !question.enabledBy.every(questionId => this.getQuestionAnswers.find(answer=> 
                                                                answer.id == questionId && answer.answer ))
        }
    },
}
</script>

<style>

</style>