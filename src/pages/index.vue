<template>
	<section>
		<el-row style="background: #545c64;">
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22" class="top-bar">
				<el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#888">
					<el-menu-item index="department" style="border: none;" >住院</el-menu-item>
					<el-menu-item index="outpatient" style="border: none;">门诊</el-menu-item>
					<el-menu-item index="consultation" style="border: none;">会诊</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
		</el-row>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	
	</section>
	
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',

				
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key);
				this.$router.push({ path: key})
			},
			
		}
	}
</script>

<style scoped>
	.top-bar>.el-menu--horizontal{border: none;background: #007de3}
	
</style>