<template>
	<section class="right-wrap">
		<el-breadcrumb separator-class="el-icon-arrow-right" class='breadcrumb'>
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			<el-breadcrumb-item>角色管理</el-breadcrumb-item>
		</el-breadcrumb>
		<section class="right-main">
			<section class="tools">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item>
						<el-input v-model="formInline.user" placeholder="输入角色查询"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>
					<section class="fr">
						<el-form-item>
							<el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">修改</el-button>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">删除</el-button>
						</el-form-item>
					</section>
				</el-form>
			</section>
			<section>
				<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" stripe style="width: 100%" @selection-change="handleSelectionChange" header-cell-class-name="top-bar" v-loading="loading">
					<el-table-column type="selection" width="55" align="center">
					</el-table-column>
					<el-table-column prop="roleName" label="角色名称">
						<!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
					</el-table-column>
					<el-table-column prop="name" label="姓名">
					</el-table-column>
					<el-table-column prop="sex" label="性别">
					</el-table-column>
					<el-table-column prop="role" label="角色">
					</el-table-column>
					<el-table-column prop="position" label="职位">
					</el-table-column>
					<el-table-column prop="username" label="登录用户名">
					</el-table-column>
					<el-table-column prop="role" label="密码">
					</el-table-column>
				</el-table>
			</section>
		

		</section>

		<!-- Form -->
		
		<el-dialog title="添加角色" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="角色名称" :label-width="formLabelWidth">
					<el-input v-model="form.roleName" auto-complete="off"></el-input>
				</el-form-item>
				<!--<el-form-item label="活动区域" :label-width="formLabelWidth">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>-->
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>

	</section>
</template>

<script>
	import '../../assets/css/common.css'
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: ''
				},
				tableData3: [],
				loading: true,
				//				对话框
				dialogFormVisible: false,
				formLabelWidth: '120px',
				form: {
					roleName: '111',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			}
		},
		mounted() {
			this.axios.get("/api/userList").then((res) => {
				setTimeout(() => {
					this.tableData3 = res.data.userList;
					this.loading = false
				}, 1000)
			}, (err) => {
				console.log(err)
			})
		}
	}
</script>

<style>
	.top-bar {
		background-color: #B9D8FC;
		padding: 0 0 0 10px;
	}
</style>