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
						<el-select v-model="formInline.region" placeholder="住院患者" style="width: 120px;">
							<el-option label="门诊患者" value="shanghai"></el-option>
							<el-option label="会诊患者" value="beijing"></el-option>
							<el-option label="全部" value="beijing"></el-option>
						</el-select>
					</section>

					<section class="fl top-tol" style="margin-left:20px">
						<el-select v-model="h.date" placeholder="待执行" style="width: 120px;">
							<el-option label="待执行" value="shanghai"></el-option>
							<el-option label="未执行" value="beijing"></el-option>
						</el-select>
					</section>

					<section class="fl top-tol" style="margin-left:20px">
						<template>
							<el-checkbox v-model="checked">属于自己角色的患者</el-checkbox>
						</template>
					</section>

					<section class="fl top-tol" style="margin-left:20px">
						<el-button type="primary">查询</el-button>
					</section>
					<section class="fl top-tol" style="margin-left:20px">
						<el-button type="primary">刷新</el-button>
					</section>
					<section class="fl top-tol" style="margin-left:20px">
						<el-button type="primary" @click='gotoplzs'>批量执行</el-button>
					</section>
					<section class="fl top-tol" style="margin-left:20px">
						<el-button type="primary">已完成</el-button>
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
							<el-table-column label="编号" prop='num'>
							</el-table-column>
							<el-table-column label="性别" prop='sex'>
							</el-table-column>
							<el-table-column label="时间" prop='date'>
							</el-table-column>
							<el-table-column label="类别" prop='class'>
							</el-table-column>
							<el-table-column>
							</el-table-column>
							<el-table-column label="操作" width="250">
								<template slot-scope="scope">
									<el-button size="mini" @click="gotozs(scope.$index, scope.row)">执行</el-button>
									<el-button size="mini" type="" @click="handleDelete(scope.$index, scope.row)">详情</el-button>
									<el-button size="mini" type="" @click="gotoh(scope.$index, scope.row)">治疗历史</el-button>
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
					name: '大可爱',
					num: 20171101,
					sex: '男',
					date: '2017-11-01',
					class: '病了'
				}, {
					name: '小可爱',
					num: 20171101,
					sex: '女',
					date: '2017-11-01',
					class: '好了'
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
			gotoh() {
				this.$router.push({
					path: '/zlshome/zlhistory'
				})
			},
			gotoplzs(){
				this.$router.push({
					path: '/zlshome/plcl'
				})
			},
			gotozs(){
				this.$router.push({path:'/zlshome/zx'})
			}
		}
	}
</script>

<style>
	.top-tol {
		line-height: 60px;
	}
</style>