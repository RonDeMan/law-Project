<template>
    <component :value="value" :is="type" :label="label"  @change="$emit('input',$event)"
                   :prefix="prefix" :items="items" :rules="rules" :disabled="disabled" />
</template>

<script>
import { VTextField,VSelect,VCheckbox } from 'vuetify/lib'

export default {
    name:"genericInput",
    props:{
        type:{ type: String, require:true},
        rules: Array,
        value:{ require:true},
        prefix:{ type: String},
        label:{ type: String},
        items:{ type: Array},
        disabled:{ type: Boolean, default:false}
    },
    components:{
      VTextField,
      VSelect,
      VCheckbox
    },
}
</script>

<style>

</style>