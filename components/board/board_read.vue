<template>
<div class="container" style="margin-top:100px">
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="card shadow">
				<div class="card-body">
					<div class="form-group">
						<label for="board_writer_name">작성자</label>
						<input type="text" id="board_writer_name" v-model="board_writer_name" class="form-control" disabled="disabled"/>
					</div>
					<div class="form-group">
						<label for="board_date">작성날짜</label>
						<input type="text" id="board_date" v-model="board_date" class="form-control" disabled="disabled"/>
					</div>
					<div class="form-group">
						<label for="board_subject">제목</label>
						<input type="text" id="board_subject" v-model="board_subject" class="form-control" disabled="disabled"/>
					</div>
					<div class="form-group">
						<label for="board_content">내용</label>
						<textarea id="board_content" v-model="board_content" class="form-control" rows="10" style="resize:none" disabled="disabled"></textarea>
					</div>
					<div class="form-group">
						<label for="board_file">첨부 이미지</label>
						<img :src="board_image" width="100%"/>						
					</div>
					<div class="form-group">
						<div class="text-right">
							<router-link to="/board_main" class="btn btn-primary">목록보기</router-link>
							<router-link to="board_modify" class="btn btn-info">수정하기</router-link>
							<router-link to="board_delete" class="btn btn-danger">삭제하기</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-3"></div>
	</div>
</div>
</template>
<script>
  module.exports = {
    data: function(){
      return {
        board_writer_name: '새로운 작성자',
        board_date: '2222-09-09',
        board_subject: '새로운 제목',
        board_content: '새로운 내용',
        board_image: 'image/logo.png',
      }
    },
  }
</script>