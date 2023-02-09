<template>
    <div>
        <!-- <div v-for="question in getPageQuestions" :key="question.id">
            <questionBox :question="question"  @answerChange="answerChange($event )" 
                :answer="getQuestionAnswers.find(answer => answer.id == question.id)?.answer || ''"
                :disabled="isDisabled(question)"/>
        </div> -->
        <div v-for="questionRow in getPageQuestionRows" :key="questionRow.id">
            <questionRow :questionRow="questionRow" @answerChange="answerChange($event)" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

    // import questionBox from './questionBox.vue'
    import questionRow from './questionRow.vue'
export default {
    name:"questionsForm",
    components:{ questionRow},
    props:{
        questionPage: {required: true}
    },

    computed:{
        ...mapGetters(["getQuestionAnswers","getQuestionPages"]),

        getPageQuestionRows(){
            return this.getQuestionPages.find(page=> page.id == this.questionPage).questionRows
        }
    },
    methods:{
        ...mapActions(["setQuestionAnswer"]),

        answerChange({id, answer}){
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