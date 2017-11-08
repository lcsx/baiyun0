<template>
	<section class="home-wrap">

		<el-row>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#fff" text-color="#888" active-text-color="#888">
					<div class="top-bar-title">白云医院康复信息系统</div>
					<el-menu-item index="/">主页</el-menu-item>
					<el-menu-item index="/history">历史查询</el-menu-item>
					<el-menu-item index="/3">信息统计</el-menu-item>
					<el-submenu index="7" style="float: right;">
						<template slot="title">我的工作台</template>
						<el-menu-item index="7-1">注销</el-menu-item>
						<el-menu-item index="7-1">修改密码</el-menu-item>
						<el-menu-item index="7-2">帮组文档</el-menu-item>
						<el-menu-item index="7-1">关于系统</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
		</el-row>
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

				
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				//				console.log(key,keyPath);
				console.log(key);
				this.$router.push({ path: key})
			},
			
		}
	}
</script>

<style>
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.top-bar-title {
		float: left;
		line-height: 60px;
		letter-spacing: 3px;
		font-size: 20px;
		color: #007de3;
		padding: 0 50px 0 0;
		font-weight: bold;
	}
	.home-wrap{height: 100%;min-width: 1280px;min-height: 600px;width: 100%;overflow: hidden;}
	.w-h-100{width: 100%;height: 100%;}
</style>