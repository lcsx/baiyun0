<template>
	<section class="w-h-100">
		<el-row class="w-h-100">
			<el-col :span="5" style="height: 100%;">
				<section class="tree-box">
					<section style="text-align: center;padding: 10px 0 0;">
						<el-button type="primary" style="width: 120px;" @click="dialogFormVisible1 = true">新建</el-button>
					</section>
					<section style="padding: 20px;">
						<h5>文书</h5>
						<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" class="tree"></el-tree>
					</section>
				</section>

			</el-col>
			<el-col :span="19">
				<div style="padding: 10px;background: #7fbef1;">
					<el-button type="primary">编辑</el-button>
					<el-button type="danger">删除</el-button>
					<el-button type="success">打印</el-button>
				</div>
				<div style="padding: 10px;background: #cce5f9;">
					<el-button type="primary">大病历</el-button>
					<el-button type="primary">病程记录</el-button>
					<el-button type="primary">知情通知书</el-button>
				</div>
				<router-view></router-view>
			</el-col>
		</el-row>

		<section>

			<el-dialog title="选择新建类型" :visible.sync="dialogFormVisible1">
				<div>
					<el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible2 = true">新建病例</el-button>
					<el-button type="primary" icon="el-icon-edit"  @click="dialogFormVisible2 = true">新建病程记录</el-button>
				</div>
			</el-dialog>

			<el-dialog title="新建病例" :visible.sync="dialogFormVisible2">
				<el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
					<el-form-item label="审批人">
						<el-input v-model="formInline.user" placeholder="审批人" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="活动区域">
						<el-select v-model="formInline.region" placeholder="性别" style="width:90px">
							<el-option label="男" value="shanghai"></el-option>
							<el-option label="女" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="formInline.age" placeholder="年龄" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="formInline.age" placeholder="年龄" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="民族">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="身份证号">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="出生日期">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="病案号">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="付款类型">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="社保号">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="科室">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="主治医生">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="社保号">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="病区">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="病房">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="病床">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="入院时间">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="婚姻状况">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="教育程度">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="职业">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="籍贯">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="地址">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="联系电话">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<el-form-item label="地址">
						<el-input  placeholder="" style="width:90px"></el-input>
					</el-form-item>
					<br/>
					 <el-form-item label="活动形式" prop="desc">
					    <el-input type="textarea" v-model="formInline.desc"></el-input>
					  </el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="change1">取 消</el-button>
					<el-button type="primary" @click="change1">确 定</el-button>
				</div>
			</el-dialog>

		</section>

	</section>
</template>

<script>
	export default {
		data() {
			return {

				data: [{
					label: '病例',
					children: [{
						label: '大病历',
						path: '/patientDetail/case/caseAll'
					}]
				}, {
					label: '病程记录',
					children: [{
						label: '首次病程记录-治疗师B',
						path: '/patientDetail/case/caseRecord'
					}, {
						label: '20171101-治疗师A',
					}]
				}, {
					label: '通知书',
				}, {
					label: '随访记录',
				}, {
					label: '检查单',
				}],
				defaultProps: {
					children: 'children',
					label: 'label',
					path: 'path'
				},

				//dialog
				dialogFormVisible1: false,
				dialogFormVisible2: false,
				formInline: {
					user: '',
					region: '',
					age:'',
					desc: ''
				},
				
				

			}
		},
		methods: {
			handleNodeClick(data) {
				console.log(data.path);
				if(data.path) {
					this.$router.push({
						path: data.path
					})
				}
			},
			change1() {
				this.dialogFormVisible2 = false;
				this.dialogFormVisible1 = false
			}
		}

	}
</script>

<style>
	.tree-box {
		background: #cce5f9;
		height: 100%;
	}
	
	.tree {
		background: #cce5f9;
	}
	
	.el-tree-node__content {
		height: 35px;
	}
	
	.el-tree-node__content:hover {
		background: none;
	}
</style>