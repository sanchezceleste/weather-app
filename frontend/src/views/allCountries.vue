<script setup lang="ts">

import Country from './types.ts'
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Country } from './types'

export default defineComponent({
    props: {
        country:{
            type: Object as PropType<Country>,
            required: true,
        }
    }


    
})
 
</script>

<template>
  <main>

  </main>
</template>