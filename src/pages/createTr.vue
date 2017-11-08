<template>
	<section>

		<section>
			<el-row>
				<el-col :span="4">
					<div style="margin: 10px 10px 10px 0;padding: 0 10px;">
						<el-input placeholder="拼音查询"></el-input>
					</div>
					<el-row style="border: 1px solid #999;">
						<el-col :span="4" style="border: 1px solid #999;">
							<ul style="padding: 20px 0 ;border-bottom: 1px solid #999;">
								<li style="text-align: center;width: 100%;padding: 20px 0;">组</li>
								<li style="text-align: center;width: 100%;padding: 20px 0">套</li>
							</ul>
							<ul style="padding: 20px 0 ;">
								<li style="text-align: center;width: 100%;padding: 10px 0;">自</li>
								<li style="text-align: center;width: 100%;padding: 10px 0">定</li>
								<li style="text-align: center;width: 100%;padding: 10px 0">义</li>
							</ul>
						</el-col>
						<el-col :span="20">
							<ul style="padding: 20px 0 ;">
								<li style="text-align: center;width: 100%;padding: 10px 0">运动疗法<i class="el-icon-plus" @click="ss1"></i></li>
								<li style="text-align: center;width: 100%;padding: 10px 0">作业疗法<i class="el-icon-plus" @click="ss2"></i></li>
								<li style="text-align: center;width: 100%;padding: 10px 0">关节活动度<i class="el-icon-plus" @click="ss3"></i></li>
							</ul>
						</el-col>
					</el-row>
				</el-col>
				<el-col :span="20">
					<el-form :inline="true" class="demo-form-inline" style="padding-left:50px ;">
						<el-form-item style="margin: 10px 10px 10px 0;">
							<el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">提交</el-button>
						</el-form-item>
						<el-form-item style="margin: 10px 10px 10px 0;">
							<el-button type="primary" @click="openFullScreen2">保存</el-button>
						</el-form-item>
						<el-form-item style="margin: 10px 10px 10px 0;">
							<el-button type="primary">取消</el-button>
						</el-form-item>
						<el-form-item style="margin: 10px 50px 10px 0;">
							<span>治疗项目数:</span><span>3</span>
						</el-form-item>
						<el-form-item style="margin: 10px 50px 10px 0;">
							<span>费用总计:</span><span>200</span>
						</el-form-item>
					</el-form>

					<template>
						<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" stripe>
							<el-table-column type="selection" width="60" align="center">
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
							<el-table-column fixed="right" label="操作" width="120">
								<template slot-scope="scope">
									<el-button @click.native.prevent="deleteRow(scope.$index, tableData3)" type="text" size="small">
										移除
									</el-button>
								</template>
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
				fullscreenLoading: false,
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
			ss1() {
				this.tableData3.push({
					name: '运动疗法',
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
			},
			ss2() {
				this.tableData3.push({
					name: '作业疗法',
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
			},
			ss3() {
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
			},
			deleteRow(index, rows) {
				rows.splice(index, 1);
			},
			openFullScreen() {
				this.fullscreenLoading = true;
				setTimeout(() => {
					this.fullscreenLoading = false;
					this.$router.push({path:'/treatment'})
				}, 2000);
				
			},
			openFullScreen2() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(() => {
					loading.close();
					this.$router.push({path:'/treatment'})
				}, 2000);
			}
		}
	}
</script>

<style>

</style>