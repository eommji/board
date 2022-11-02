<template>
<!-- 게시판 미리보기 부분 -->
<div class="container" style="margin-top:100px">
	<div class="row">
    <main_board_list></main_board_list>
    <main_board_list></main_board_list>
    <main_board_list></main_board_list>
    <main_board_list></main_board_list>
	</div>
</div>
</template>
<script>
  module.exports = {
    components: {
      'main_board_list': httpVueLoader('components/main/main_board_list.vue')
    }
  }
</script>
