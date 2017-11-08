<template>
	<section>
		<section>
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">

					<el-form :inline="true" class="demo-form-inline" style="padding: 20px 0;">

						<el-form-item label="" style="margin-bottom: 0;">
							<el-col :span="11">
								<el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
							</el-col>
							<el-col class="line" :span="2">至</el-col>
							<el-col :span="11">
								<el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
							</el-col>
						</el-form-item>

						<el-form-item style="margin-bottom: 0;">
							<el-button type="primary">打印</el-button>
							<el-button>导出word</el-button>
							<el-button>导出excel</el-button>
						</el-form-item>
					</el-form>

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
							<el-table-column prop="zls" label="治疗师">
							</el-table-column>
							<el-table-column prop="hznum" label="患者数">
							</el-table-column>
							<el-table-column label="执行数">
							</el-table-column>
							<el-table-column prop="yy" label="1月">
							</el-table-column>
							<el-table-column prop="ey" label="2月">
							</el-table-column>
							<el-table-column prop="sany" label="3月">
							</el-table-column>
							<el-table-column prop="siy" label="4月">
							</el-table-column>
							<el-table-column prop="wy" label="5月">
							</el-table-column>
							<el-table-column prop="ly" label="6月">
							</el-table-column>
							<el-table-column prop="qy" label="7月">
							</el-table-column>
							<el-table-column prop="by" label="8月">
							</el-table-column>
							<el-table-column prop="jy" label="9月">
							</el-table-column>
							<el-table-column prop="sy" label="10月">
							</el-table-column>
							<el-table-column prop="syy" label="11月">
							</el-table-column>
							<el-table-column prop="sey" label="12月">
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
					zls: '治疗师A',
					hznum: 50,
					yy:10,
					ey:20,
					sany:10,
					siy:10,
					wy:10,
					ly:10,
					qy:10,
					by:10,
					jy:10,
					sy:10,
					syy:10,
					sey:10
				}, {
					zls: '治疗师b',
					hznum: 60,
					yy:10,
					ey:20,
					sany:10,
					siy:10,
					wy:10,
					ly:10,
					qy:10,
					by:10,
					jy:10,
					sy:10,
					syy:10,
					sey:10
				}]
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},

		}
	}
</script>

<style>

</style>