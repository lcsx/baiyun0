<template>
	<section>
		<el-row>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22">
				<el-row>
					<el-col :span="12">
						<h1 style="margin-top: 20px;">{{infor.name}}</h1>

						<el-form ref="form" :model="form" label-width="80px">
							<el-form-item>
								<el-radio-group v-model="form.resource">
									<el-radio label="自己负责的治疗"></el-radio>
									<el-radio label="全部"></el-radio>
								</el-radio-group>
							</el-form-item>
						</el-form>

						<template>
							<el-table :data="tableData" style="width: 100%" size="mini" stripe header-cell-class-name='tb-top-bg'>
								<el-table-column prop="date" label="日期" width="180">
								</el-table-column>
								<el-table-column prop="name" label="姓名" width="180">
								</el-table-column>
								<el-table-column prop="address" label="地址">
								</el-table-column>
							</el-table>
						</template>

						<section style="margin-top: 40px;">
							<template>
								<el-table :data="tableData1" style="width: 100%" size="mini" stripe header-cell-class-name='tb-top-bg'>
									<el-table-column type="index" :index="indexMethod" align='center'>
									</el-table-column>
									<el-table-column prop="date" label="日期" width="180">
									</el-table-column>
									<el-table-column prop="name" label="姓名" width="180">
									</el-table-column>
									<el-table-column prop="address" label="地址">
									</el-table-column>
								</el-table>
							</template>
						</section>

					</el-col>
					<el-col :span="12">
						<section style="padding: 10px;">
							<h1>医嘱信息:<span style="padding: 0 10px;">{{yz.info}}</span></h1>
							<el-row>
								<el-col :span='12'>
									<ul class="infors">
										<li>频率: <span>{{yz.num}}</span>次,<span>{{yz.qd}}</span>,20分钟/次</li>
										<li>下达医生: <span>{{yz.doc}}</span></li>
										<li>下达时间: <span>{{yz.date}}</span></li>
									</ul>
								</el-col>
								<el-col :span='12'>
									<img :src="bg1" alt="" width="100%">
								</el-col>
							</el-row>
						</section>

						<section style="padding: 10px;">
							<el-row>
								<el-col :span="24">

									<h1>执行治疗项：今天2016-08-17星期三</h1>
									<section style="padding: 15px 0;">
										<el-form :inline="true" :model="formInline" class="demo-form-inline">
											<el-form-item label="治疗日期">
												<el-select v-model="formInline.region" placeholder="活动区域">
													<el-option label="2017-11-01" value="shanghai"></el-option>
													<el-option label="2017-11-11" value="beijing"></el-option>
												</el-select>
											</el-form-item>
											<el-form-item label="时长">
												<el-select v-model="formInline.region1" placeholder="活动区域">
													<el-option label="20分钟" value="shanghai"></el-option>
													<el-option label="30分钟" value="beijing"></el-option>
												</el-select>
											</el-form-item>
											<el-form-item label="治疗反应">
												<el-select v-model="formInline.region2" placeholder="活动区域">
													<el-option label="良好" value="shanghai"></el-option>
													<el-option label="好转" value="beijing"></el-option>
												</el-select>
											</el-form-item>

											<el-form-item label="备注">
												<el-input type="textarea" v-model="formInline.desc"></el-input>
											</el-form-item>

										</el-form>
									</section>

									<section>
										<template>
											<el-table :data="tableData2" style="width: 100%" size="min">
												<el-table-column prop="sfxm" label="收费项名称" >
												</el-table-column>
												<el-table-column prop="dj" label="单价" >
												</el-table-column>
												<el-table-column prop="dw" label="单位">
												</el-table-column>
												<el-table-column prop="num" label="数量">
												</el-table-column>
												<el-table-column prop="cost" label="费用">
												</el-table-column>
												<el-table-column prop="zxks" label="执行科室">
												</el-table-column>
											</el-table>
										</template>
									</section>
									<section style="margin: 20px;">
										<el-button type="primary">提交</el-button>
									</section>
								</el-col>
							</el-row>
						</section>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
		</el-row>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: '',
					region1: '',
					region2: '',
					desc: ''
				},
				bg1: require('../../static/images/u126.jpg'),
				infor: {
					name: '李相赫',
					id: 22,

				},
				yz: {
					info: '运动疗法',
					num: 10,
					qd: 'qd(一天一次)',
					doc: '医生A',
					date: "2017-11-01"
				},
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				tableData1: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
					tag: '家'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
					tag: '公司'
				}],
				tableData2:[{
					sfxm:"运动疗法",
					dj:"单价",
					dw:"单位",
					num:1,
					cost:50,
					zjkes:"康复医学科"
				}]
			}
		},
		methods: {
			indexMethod(index) {
				return index;
			}
		}
	}
</script>

<style>
	.tb-top-bg {
		background: #999;
		color: #fff;
	}
	
	.infors {
		margin-top: 20px;
	}
	
	.infors>li {
		line-height: 30px;
	}
</style>