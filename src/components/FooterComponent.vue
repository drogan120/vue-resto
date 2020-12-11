<template>
  <div class="mx-auto text-center p-5 bg-green-100 text-gray-600 border-t
  border-green-200">
    @drogan120 {{ currentYear }}
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentYear: new Date('YYYY'),
    };
  },
};
</script>
