<template>
  <div class="p-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
      <div class="px-6 py-4 pb-2">
        <h2 class="font-bold mb-2 prose prose-slate prose-xl">The Coldest Sunset</h2>
        <p class="bg-white text-pink-700"> The coldest sunset is one that's filled with a chill in the air, the sky
          painted in shades of pink and orange, and a peaceful stillness that only comes with the end of the day. As the
          sun slowly fades away, a sense of calmness and serenity takes over, and the beauty of the moment is truly
          breathtaking. </p>
      </div>
      <div class="px-6 py-4 space-y-2">
        <span class="badge mr-2">#photography</span>
        <span class="badge mr-2">#travel</span>
        <span class="badge">#winter</span>
        <span class="badge">#winter</span>
      </div>
    </div>
</div>
</template>
<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;

  &:hover {
    @apply bg-gray-300;
  }
}</style>