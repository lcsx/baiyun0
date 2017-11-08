<template>
	<section>

		<section>
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<section class="fl top-tol" >
						<el-select v-model="h.date" placeholder="治疗师" style="width: 120px;">
							<el-option label="治疗师A" value="shanghai"></el-option>
							<el-option label="治疗师B" value="beijing"></el-option>
						</el-select>
					</section>
					<section class="fl top-tol" style="margin-left:20px" >
						<el-select v-model="h.date" placeholder="日期" style="width: 120px;">
							<el-option label="2017-11-01" value="shanghai"></el-option>
							<el-option label="2017-11-11" value="beijing"></el-option>
						</el-select>
					</section>
					<section class="fl top-tol" style="margin-left:20px">
						<div class="input-search">
							<el-input placeholder="输入患者姓名或首字母回车" prefix-icon="el-icon-search" v-model="input21" style="width: 300px;">
							</el-input>
						</div>
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
				<el-col :span="22">

					<template>
						<el-table :data="tableData" style="width: 100%">
							<el-table-column label="名字">
								<template slot-scope="scope">
									<!--<i class="el-icon-time"></i>-->
									<span style="margin-left: 10px">{{ scope.row.name }}</span>
								</template>
							</el-table-column>
							<el-table-column label="治疗项名称" prop='mc'>
							</el-table-column>
							<el-table-column label="日期" prop='date'>
							</el-table-column>
							<el-table-column label="执行人" prop='zxr'>
							</el-table-column>
							<el-table-column label="下达人" prop='xdr'>
							</el-table-column>
							<el-table-column label='状态' prop='state'>
							</el-table-column>
							<el-table-column label='效果' prop='xg'>
							</el-table-column>
							<el-table-column label='备注' prop='bz'>
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
					name: 'gg',
					mc:'运动疗法',
					date:'2017-11-01',
					zxr:'治疗师A',
					xdr:'医生B',
					state:"已完成",
					xg:"良好",
					bz:'再来十次'
				}, {
					name: 'gg',
					mc:'运动疗法',
					date:'2017-11-11',
					zxr:'治疗师A',
					xdr:'医生C',
					state:"已完成",
					xg:"良好",
					bz:'再来100次'
				}]
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			gotoh(){
				this.$router.push({path:'/zlshome/zlhistory'})
			}
		}
	}
</script>

<style>
	.top-tol {
		line-height: 60px;
	}
</style>