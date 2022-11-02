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
						<input type="text" id="board_subject" v-model="board_subject" class="form-control">
					</div>
					<div class="form-group">
						<label for="board_content">내용</label>
						<textarea id="board_content" v-model="board_content" class="form-control" rows="10" style="resize:none"></textarea>
					</div>
					<div class="form-group">
						<label for="board_file">첨부 이미지</label>
						<img :src="board_image" width="100%"/>	
						<input type="file" name="board_file" id="board_file" class="form-control" accept="image/*"/>					
					</div>
					<div class="form-group">
						<div class="text-right">
							<button type="button" @click="check_input" class="btn btn-primary">수정완료</button>
							<router-link to="board_read" class="btn btn-info">취소</router-link>
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
    data: function() {
      return {
        board_writer_name: '새로운 작성자',
        board_date: '2222-09-09',
        board_subject: '새로운 제목',
        board_content: '새로운 내용',
        board_image: 'image/logo.png',
      }
    },
    methods: {
      check_input : function() {
        if(this.board_subject.length === 0){
          alert("제목을 입력해 주세요.")
          $("#board_subject").focus()
          return
        }
        if(this.board_content.length === 0){
          alert("내용을 입력해 주세요.")
          $("#board_content").focus()
          return
        }
        alert('수정되었습니다.')
        this.$router.push('/board_read')
      }
    }
  }
</script>