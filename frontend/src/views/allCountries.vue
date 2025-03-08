<script lang="ts">

import Country from './types.ts'
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Country } from './types'

type DataShape = {
    filterText: string
    resturantList: Country[] // has a bunch of countries --> custom syntax for array
    showNewForm: boolean
}

export default defineComponent({
    // components: {
    //     addCountry,
    //     country,
    // },
    // data: (): DataShape => ({
    //     filterText: '',


    // })  
    // props: {
    //     country:{
    //         type: Object as PropType<Country>,
    //         required: true,
    //     }
    // }


    
})
 
</script>

<template>
  <main>

  </main>
</template>