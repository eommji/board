<template>
  <div class="container" style="margin-top:100px">
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="card shadow">
				<div class="card-body">
					<div class="form-group">
						<label for="board_subject">제목</label>
						<input type="text" id="board_subject" v-model="board_subject" class="form-control"/>
					</div>
					<div class="form-group">
						<label for="board_content">내용</label>
						<textarea id="board_content" v-model="board_content" class="form-control" rows="10" style="resize:none"></textarea>
					</div>
					<div class="form-group">
						<label for="board_file">첨부 이미지</label>
						<input type="file" id="board_file" name="board_file" class="form-control" accept="image/*"/>
					</div>
					<div class="form-group">
						<div class="text-right">
							<button type="button" @click="check_input" class="btn btn-primary">작성하기</button>
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
        board_subject: '',
        board_content: '',
      }
    },
    methods: {
      check_input: function(){
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
        alert('저장되었습니다.');
        this.$router.push('/board_read');
      }
    }
  }
</script>