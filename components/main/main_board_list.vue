<template>
		<div class="col-lg-6" style="margin-top:20px">
			<div class="card shadow">
				<div class="card-body">
					<h4 class="card-title">board</h4>
					<table class="table table-hover" id='board_list'>
						<thead>
							<tr>
								<th class="text-center w-25">글번호</th>
								<th>제목</th>
								<th class="text-center w-25 d-none d-xl-table-cell">작성날짜</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="a1 in temp_list" v-bind:key="a1" @click="go_board_read">
								<td class="text-center">{{a1}}</td>
								<td>제목입니다</td>
								<td class="text-center d-none d-xl-table-cell">2018-12-12</td>
							</tr>
						</tbody>
					</table>
					
					<router-link to="board_main" class="btn btn-primary">더보기</router-link>
				</div>
			</div>
		</div>
</template>
<style>
#board_list > tbody > tr {
  cursor: pointer;
}
</style>
<script>
  module.exports = {
    data: function(){
      return {
        temp_list: [1, 2, 3, 4, 5],
      }
    },
    methods: {
      go_board_read: function(){
        this.$router.push('/board_read');
      }
    }
  }
</script>
