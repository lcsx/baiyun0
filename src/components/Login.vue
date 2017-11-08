<template>
	<section>
		<el-row>
			<el-col :span="8">
				<div class="grid-content bg-purple">&nbsp;</div>
			</el-col>
			<el-col :span="8">
				<div class="login-box">
					<h1 style="text-align: center;">白云医院</h1>
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="用户名">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="密码" >
							<el-input v-model="form.password" type="password"></el-input>
						</el-form-item>
						<el-form-item label="登录类型">
							<el-select v-model="form.way" placeholder="请选择活动区域">
								<el-option label="医生登录" value="1"></el-option>
								<el-option label="治疗师登录" value="2"></el-option>
								<el-option label="后台登录" value="3"></el-option>
							</el-select>
						</el-form-item>

						<div style="text-align: center;">
							<el-button type="primary" @click="onSubmit">登录</el-button>
						</div>
					</el-form>
				</div>
			</el-col>
			<el-col :span="8">&nbsp;</el-col>
		</el-row>

	</section>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					password: '',
					way:'',
				}
			}
		},
		methods: {
			onSubmit() {
				console.log(this.form);
			}
		}
	}
</script>

<style>
	h1{font-size: 30px;font-weight: 600;padding: 20px;}
	.login-box{margin-top: 20%;border: 1px solid rgba(88,88,88,.3);box-shadow: 0 0 8px rgba(88,88,88,.3);padding: 20px 50px 20px 20px;border-radius: 10px;}
</style>