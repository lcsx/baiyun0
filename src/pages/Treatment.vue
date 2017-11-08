<template>
	<section>
		<section>
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<el-form :inline="true" class="demo-form-inline " :model="sizeForm1">
						<el-form-item style="margin: 10px 10px 10px 0;">
							<el-date-picker type="date" placeholder="选择日期" v-model="sizeForm1.date1" style="width: 100%;"></el-date-picker>
						</el-form-item>
						<el-form-item style="margin: 10px 10px 10px 0;">
							<el-date-picker type="date" placeholder="选择日期" v-model="sizeForm1.date2" style="width: 100%;"></el-date-picker>
						</el-form-item>
						<el-form-item style="margin: 10px 10px 10px 0;">
							<!--<el-button type="primary" @click="to">新建</el-button>-->
							<router-link :to="{ path: '/createTr', query: { plan: lcs }}" tag="el-button" >新建</router-link>
						</el-form-item>
						<el-form-item style="margin: 10px 50px 10px 0;">
							<span>治疗项目数:</span><span>3</span>
						</el-form-item>
						<el-form-item style="margin: 10px 50px 10px 0;">
							<span>费用总计:</span><span>200</span>
						</el-form-item>

						<el-form-item style="margin: 10px 10px 10px 0;">
							<el-button type="primary">编辑</el-button>
						</el-form-item>
						<el-form-item style="margin: 10px 10px 10px 0;">
							<el-button type="primary">打印</el-button>
						</el-form-item>
					</el-form>
				</el-col>
				<el-col :span="1">&nbsp;
					
				</el-col>
			</el-row>
		</section>
		<section class="tb-treament">
			<el-row>
				<!--<el-col :span="5">
			  	<el-row>
			  		<el-col :span="10">11</el-col>
			  		<el-col :span="14">11</el-col>
			  	</el-row>
			  </el-col>
			  <el-col :span="19">1</el-col>-->
				<el-col :span="24">
					<template>
						<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" stripe>
							<el-table-column type="selection" width="100" align="center">
							</el-table-column>
							<el-table-column label="姓称" width="120">
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
							<el-table-column prop="num" label="数量" width="120">
							</el-table-column>
							<el-table-column prop="pl" label="频率" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="time" label="时间" show-overflow-tooltip>
							</el-table-column>
							<el-table-column label="详细信息" show-overflow-tooltip>
								<!--<el-table-column label="姓名" width="180">
									<template slot-scope="scope">
										<el-popover trigger="hover" placement="top">
											<p>姓名: {{ scope.row.name }}</p>
											<p>住址: {{ scope.row.address }}</p>
											<div slot="reference" class="name-wrapper">
												<el-tag size="medium">{{ scope.row.name }}</el-tag>
											</div>
										</el-popover>
									</template>
								</el-table-column>-->
							</el-table-column>
							<el-table-column prop="zxr" label="执行人" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="sb" label="设备" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="state" label="状态" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="cost" label="费用" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="xdr" label="下达人" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="date" label="下达日期" show-overflow-tooltip>
							</el-table-column>
						</el-table>
					</template>
				</el-col>
			</el-row>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				lcs:111,
				sizeForm1: {
					data1: '',
					region: '',
					data2: '',
				},
				tableData3: [{
						name: '运动疗法',
						num: 22,
						pl: 10,
						time: 20,
						bq: "康复一病区",
						zxr: "A治疗师",
						sb: "四肢联动",
						state: "已下达",
						cost: 50,
						xdr: 'b医生',
						date: '2017-11-01'
					}, {
						name: '作业疗法',
						num: 222,
						pl: 10,
						time: 20,
						zxr: "B治疗师",
						bq: "康复一病区",
						sb: "无",
						state: "已下达",
						cost: 50,
						xdr: 'c医生',
						date: '2017-11-01'
					},
					{
						name: '运动疗法',
						num: 22,
						pl: 10,
						time: 20,
						bq: "康复一病区",
						zxr: "A治疗师",
						sb: "四肢联动",
						state: "已下达",
						cost: 50,
						xdr: 'b医生',
						date: '2017-11-01'
					}
				],
				multipleSelection: []
			}
		},
		methods: {
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
			},
			ss() {
				this.tableData3.push({
					name: '关节活动度',
					num: 22,
					pl: 10,
					time: 20,
					zxr: "A治疗师",
					sb: "四肢联动",
					state: "已下达",
					cost: 200,
					xdr: 'd医生',
					date: '2017-11-01'
				})
			}
		}
	}
</script>

<style>
	.tb-treament .el-table-column--selection {
		padding-left: 30px;
	}
</style>