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
					<section class="fl top-tol" style="margin-left:50px">
						<el-select v-model="formInline.region" placeholder="执行人" style="width: 100px;">
							<el-option label="张三" value="shanghai"></el-option>
							<el-option label="李四" value="beijing"></el-option>
						</el-select>
					</section>

					<section class="fl top-tol" style="margin-left:50px">
						<el-select v-model="h.date" placeholder="入院日期" style="width: 150px;">
							<el-option label="2017-10-01" value="shanghai"></el-option>
							<el-option label="2017-10-02" value="beijing"></el-option>
						</el-select>
					</section>

					<section class="fl top-tol" style="margin-left:50px">
						<el-button type="primary" @click="search">查询</el-button>
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
						<el-table :data="tableData" style="width: 100%" stripe v-loading="loading">
							<el-table-column label="姓名">
								<template slot-scope="scope">
									<!--<i class="el-icon-time"></i>-->
									<span style="margin-left: 10px">{{ scope.row.name }}</span>
								</template>
							</el-table-column>
							<el-table-column label="住院号" >
								<template slot-scope="scope">
									<span>{{ scope.row.num }}</span>
								</template>
							</el-table-column>
							<el-table-column label="性别">
								<template slot-scope="scope">
									<!--<i class="el-icon-time"></i>-->
									<span style="margin-left: 10px">{{ scope.row.sex }}</span>
								</template>
							</el-table-column>
							<el-table-column label="年龄">
								<template slot-scope="scope">
									<span style="margin-left: 10px">{{ scope.row.age }}</span>
								</template>
							</el-table-column>
							<el-table-column label="病区">
								<template slot-scope="scope">
									<span>{{ scope.row.area }}</span>
								</template>
							</el-table-column>
							<el-table-column label="病床号">
								<template slot-scope="scope">
									<span style="margin-left: 10px">{{ scope.row.bednum }}</span>
								</template>
							</el-table-column>
							<el-table-column label="诊断">
								<template slot-scope="scope">
									<span style="margin-left: 10px">{{ scope.row.diagnosis }}</span>
								</template>
							</el-table-column>
							<el-table-column label="入院日期">
								<template slot-scope="scope">
									<span style="margin-left: 10px">{{ scope.row.date }}</span>
								</template>
							</el-table-column>
							<el-table-column label="主治医生">
								<template slot-scope="scope">
									<span style="margin-left: 10px">{{ scope.row.doctor }}</span>
								</template>
							</el-table-column>
							<el-table-column label="状态">
								<template slot-scope="scope">
									<span style="margin-left: 10px">{{ scope.row.state }}</span>
								</template>
							</el-table-column>
							<!--<el-table-column></el-table-column>-->
							<el-table-column label="操作" align="center">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								</template>
							</el-table-column>
						</el-table>
					</template>
					<div class="block" v-if='pageIsShow'>
						<el-pagination @current-change="handleCurrentChange" :current-page="currentPage" layout="total, prev, pager, next" :total="100" style="text-align: center;padding-top: 100px;">
						</el-pagination>
					</div>
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

				tableData: [],
				loading: false,
				currentPage: 1,
				pageIsShow: false,
			}
		},
		methods: {
			handleEdit(index, row) {
//				console.log(index, row);
//				console.log(index)

				
				this.$router.push({ path: '/patientDetail',query: { patientID: row.ID }})
				
			},
			search() {
				this.pageIsShow = false;
				this.axios.get("/api/zyTB").then((res) => {
					this.currentPage = 1,
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
						this.pageIsShow = true;
						this.tableData = res.data.pages[this.currentPage];
					}, 1000)
				}, (err) => {
					console.log(err)
				})
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				console.log(this.currentPage)
				this.axios.get("/api/zyTB").then((res) => {						
					this.loading = true;
					setTimeout(() => {
						this.tableData = res.data.pages[this.currentPage]
						this.loading = false;
						this.pageIsShow = true;
					}, 1000)
				}, (err) => {
					console.log(err)
				})
			},

		},
		mounted() {

		}

	}
</script>

<style>
	.input-search {}
	
	.top-tol {
		line-height: 60px;
	}
</style>