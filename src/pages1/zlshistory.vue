<template>
	<section>
		<section>
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<section class="fl top-tol">
						<div class="input-search">
							<el-input placeholder="输入患者姓名或首字母回车" prefix-icon="el-icon-search" v-model="input21" style="width: 300px;">
							</el-input>
						</div>
					</section>
					<section class="fl top-tol" style="margin-left:20px">
						<el-select v-model="formInline.region" placeholder="医生A" style="width: 120px;">
							<el-option label="医生B" value="shanghai"></el-option>
							<el-option label="医生C" value="beijing"></el-option>
							<el-option label="医生D" value="beijing"></el-option>
						</el-select>
					</section>

					<section class="fl top-tol" style="margin-left:20px">
						<el-button type="primary">查询</el-button>
					</section>

				</el-col>
				<el-col :span="1">&nbsp;</el-col>
			</el-row>
		</section>

		<section>
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span='22'>
					<template>
						<el-table :data="tableData" style="width: 100%">
							<el-table-column label="名字">
								<template slot-scope="scope">
									<!--<i class="el-icon-time"></i>-->
									<span style="margin-left: 10px">{{ scope.row.name }}</span>
								</template>
							</el-table-column>
							<el-table-column label="类别" prop='class'>
							</el-table-column>
							<el-table-column label="性别" prop='sex'>
							</el-table-column>
							<el-table-column label="年龄" prop='age'>
							</el-table-column>
							<el-table-column label="状态" prop='state'>
							</el-table-column>
							<el-table-column>
							</el-table-column>
							<el-table-column label="操作" width="280">
								<template slot-scope="scope">
									<el-button size="mini">详情</el-button>
									<el-button size="mini" type="">处方单</el-button>
									<el-button size="mini" type="">治疗历史</el-button>
								</template>
							</el-table-column>
						</el-table>
					</template>

				</el-col>
				<el-col :span="1">&nbsp;</el-col>
			</el-row>
		</section>

	</section>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: ''
				},
				input21: '',
				h: {
					date: ''
				},
				checked: true,
				tableData: [],
				loading: false,
				currentPage: 1,
				pageIsShow: false,

				tableData: [{
					name: '生',
					class: '住院',
					sex: '男',
					age: 22,
					state: '已诊'
				}, {
					name: '生',
					class: '住院',
					sex: '女',
					age: 22,
					state: '未诊'
				}]

			}
		},

	}
</script>

<style>
	.top-tol {
		line-height: 60px;
	}
</style>