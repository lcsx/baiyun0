<template>
	<section style="height: 100%;min-width: 1280px;min-height: 600px;">
		<div class="header" style="display: none;">header</div>
		<div class="content" style="height: 100%;width: 100%;">
			<el-row style="height: 100%;width: 100%;">
				<el-col :span="4" style="height: 100%;background-color: #042950;padding-top: 66px;" class='wrap-left'>
					<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" text-color="#fff" active-text-color="#ffd04b" unique-opened>
						<div class="leftNav-title-box">
							<el-submenu :index="item.title" v-for='(item,index) in leftNav' :key='item.titile'>
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>{{ item.title }}</span>
								</template>
								<el-menu-item :index="inner_item.title" v-for='(inner_item,index) in item.list' :key='inner_item.title' @click="$router.push(inner_item.path)">
									{{ inner_item.title }}
								</el-menu-item>
							</el-submenu>
						</div>
					</el-menu>
				</el-col>
				<el-col :span="20" style="height: 100%;overflow: hidden;">
					<section style="height: 100%;">
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
					</section>
				</el-col>
			</el-row>
		</div>
		<div class="footer" style="display: none;">footer</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				//设置默认展开，数组，值为name属性的值
				activeNames: [],
				leftNav: [],
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		mounted() {
			this.axios.get("/api/leftNav").then((res) => {
				this.leftNav = res.data;
//				console.log(this.leftNav)
			}, (err) => {
				console.log(err)
			})
		}
	}
</script>

<style>
	.content {
		overflow: auto;
		height: 100%;
	}
	
	.fl {
		float: left;
	}
	
	.leftNav-title-box .el-submenu__title {
		color: #fff;
		font-size: 14px;
		background: -webkit-linear-gradient(left, #017ec8, #023c67);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #017ec8, #023c67);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #017ec8, #023c67);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #017ec8, #023c67);
		/* 标准的语法 */
	}
	
	.leftNav-title-box .el-menu-item {
		background-color: #042950;
		font-size: 12px;
	}
	
	.leftNav-title-box .el-menu-item:hover {
		background-color: #0a417a;
	}
	
	.leftNav-title-box .el-icon-location,
	.leftNav-title-box .el-submenu__icon-arrow,
	.leftNav-title-box .el-icon-arrow-down {
		color: #FFF;
	}
	
	.wrap-left .el-menu {
		border-right: none
	}
</style>