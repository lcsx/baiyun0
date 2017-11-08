<template>
	<section class="right-wrap">
		<el-breadcrumb separator-class="el-icon-arrow-right" class='breadcrumb'>
			<el-breadcrumb-item>治疗管理</el-breadcrumb-item>
			<el-breadcrumb-item>治疗频率</el-breadcrumb-item>
		</el-breadcrumb>
		<section class="right-main">
			<section class="tools">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="所有治疗频率">
						<el-input v-model="formInline.user" placeholder="搜索治疗频率"></el-input>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>

					<section class="fr">

						<el-form-item>
							<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
					</section>
				</el-form>
			</section>
			<section>
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" stripe style="width: 100%" @selection-change="handleSelectionChange" header-cell-class-name="top-bar" v-loading="loading">
					<el-table-column type="selection" width="55" align="center">
					</el-table-column>
					<el-table-column prop="units" label="角色名称" align="center">
					</el-table-column>
					<el-table-column prop="num" label="姓名频率数量" align="center">
					</el-table-column>
					<el-table-column prop="often" label="次数/天数" align="center">
					</el-table-column>
					<el-table-column prop="remark" label="备注" align="center">
					</el-table-column>
					<el-table-column prop="position" label="操作" align="center">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						</template>
					</el-table-column>
				</el-table>
			</section>
			<template >
				<div class="block" style="float: right;margin-right: 10%;margin-top: 100px;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
					</el-pagination>
				</div>
			</template>
		</section>

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
				tableData: [],
				loading: false,
				currentPage1: 5,
				sels: [],//列表选中列
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
			handleSelectionChange(sels) {
				this.sels = sels;
				console.log(this.sels)
				var ids = this.sels.map(item => item.units).toString();
				console.log(ids)
//				console.log(this.sels.length)
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
		mounted() {
			this.axios.get("/api/CFList").then((res) => {
				console.log(this.res)
				setTimeout(() => {
					this.tableData = res.data.list;
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