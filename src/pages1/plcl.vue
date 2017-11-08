<template>
	<section>
		<section class="plcl-tb-wrap">
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<div style="overflow: auto;">
						<h1 style="padding: 20px;font-size: 20px;float: left;">批量执行</h1>  <el-button type="primary" style="float: left;margin: 10px 0 0 20px;">提交</el-button>
					</div>
					
					<template>
						<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" stripe  @selection-change="handleSelectionChange" header-cell-class-name="plcl-tb-header">
							<el-table-column type="selection" align='center'>
							</el-table-column>
							<el-table-column label="名字">
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
							<el-table-column prop="zlx" label="治疗项">
							</el-table-column>
							<el-table-column prop="date" label="执行时间" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="time" label="时间" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="fy" label="反应" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="bz" label="备注" show-overflow-tooltip>
							</el-table-column>
							<el-table-column prop="sfxm" label="收费项目" show-overflow-tooltip>
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
        tableData3: [{
          name: '李相赫',
         zlx:'运动疗法',
         date:'2017-11-01',
         time:20,
         fy:'nice',
         bz:'',
         sfxm:'',
        },
        {
          name: 'bang',
         zlx:'运动疗法',
         date:'2017-11-01',
         time:20,
         fy:'nice',
         bz:'adc',
         sfxm:'',
        },
        {
          name: 'Faker',
         zlx:'运动疗法',
         date:'2017-11-01',
         time:20,
         fy:'nice',
         bz:'',
         sfxm:'',
        }],
        multipleSelection: []
      }
    },

    methods: {
      
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>
.plcl-tb-header{background: #999;color:#fff}
</style>