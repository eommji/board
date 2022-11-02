<template>
<!-- 게시글 리스트 -->
<div class="container" style="margin-top:100px">
	<div class="card shadow">
		<div class="card-body">
			<h4 class="card-title">게시판 이름</h4>
			<table class="table table-hover" id='board_list'>
				<thead>
					<tr>
						<th class="text-center d-none d-md-table-cell">글번호</th>
						<th class="w-50">제목</th>
						<th class="text-center d-none d-md-table-cell">작성자</th>
						<th class="text-center d-none d-md-table-cell">작성날짜</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in temp_list" v-bind:key="i" @click="go_board_read">
						<td class="text-center d-none d-md-table-cell">{{i}}</td>
						<td>글 제목 입니다</td>
						<td class="text-center d-none d-md-table-cell">홍길동</td>
						<td class="text-center d-none d-md-table-cell">2018-12-12</td>
					</tr>
				</tbody>
			</table>
			
			<div class="d-none d-md-block">
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<router-link to="/board_main" class="page-link">이전</router-link>
					</li>
					<li class="page-item" v-for="i in temp_list" v-bind:key="i">
						<router-link to="/board_main" class="page-link">{{i}}</router-link>
					</li>
					<li class="page-item">
						<router-link to="/board_main" class="page-link">다음</router-link>
					</li>
				</ul>
			</div>
			
			<div class="d-block d-md-none">
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<router-link to="/board_main" class="page-link">이전</router-link>
					</li>
					<li class="page-item">
						<router-link to="/board_main" class="page-link">다음</router-link>
					</li>
				</ul>
			</div>
			
			<div class="text-right">
				<router-link to="board_write" class="btn btn-primary">글쓰기</router-link>
			</div>
			
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
        temp_list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    methods: {
      go_board_read: function(){
        this.$router.push('/board_read')
      }
    }
  }
</script>