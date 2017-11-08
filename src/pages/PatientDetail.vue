<template>
	<section class="w-h-100">
		<el-row style="background: #545c64;">
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22" class="top-bar">
				<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#888">
					<el-menu-item index="/patientDetail/case" style="border: none;">病例</el-menu-item>
					<el-menu-item index="/treatment" style="border: none;">治疗</el-menu-item>
					<el-menu-item index="/treatmentHistory" style="border: none;">治疗历史</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
		</el-row>
		<section>
			<el-row style="background: #999;">
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<el-form :inline="true" :model="love" class="demo-form-inline ">
						<el-form-item label="姓名:" style="margin: 10px 50px 10px 0;">
							{{love.name}}
						</el-form-item>
						<el-form-item label="年龄:" style="margin: 10px 50px 10px 0;">
							{{love.age}}
						</el-form-item>
						<el-form-item style="margin: 10px 50px 10px 0;">
							<el-button type="primary">查询</el-button>
						</el-form-item>
						<el-form-item label="" style="margin: 10px 0 10px 0;">
							<el-select v-model="love.date" placeholder="入院日期">
								<el-option label="2017-11-01" value="shanghai"></el-option>
								<el-option label="2017-11-11" value="beijing"></el-option>
							</el-select>
						</el-form-item>
					</el-form>
				</el-col>
				<el-col :span="1">&nbsp;</el-col>
			</el-row>
		</section>
		<section class="w-h-100">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</section>
	</section>

</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				love: {
					name: "一眼",
					age: 24,
					date: ''
				},
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				//				console.log(key);
				this.$router.push({
					path: key
				})
			},
		},
		watch: {
			'$route' (to, from) {
				//		     	console.log(to);
				//		     	console.log(from);
				console.log(this.$route.query.patientID)
			}
		},
	}
</script>

<style scoped>
	.top-bar>.el-menu--horizontal {
		border: none;
		background: #007de3
	}
</style>