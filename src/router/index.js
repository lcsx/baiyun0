import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'

import History from '@/pages/History'
import Workload from '@/pages/Workload'

import Index from '@/pages/Index'
import Department from '@/pages/Department'
import Outpatient from '@/pages/Outpatient'
import Consultation from '@/pages/Consultation'

import PatientDetail from '@/pages/PatientDetail'
import Case from '@/pages/Case'
import Treatment from '@/pages/Treatment'
import TreatmentHistory from '@/pages/TreatmentHistory'
import CaseAll from '@/pages/CaseAll'
import CaseRecord from '@/pages/CaseRecord'
import createTr from '@/pages/createTr'
import info from '@/pages/info'
import zlshome from '@/pages1/zlshome'
import zlsindex from '@/pages1/zlsindex'
import zlshistory from '@/pages1/zlshistory'
import zlsinfo from '@/pages1/zlsinfo'
import plcl from '@/pages1/plcl'
import zlhistory from '@/pages1/zlhistory'
import zx from '@/pages1/zx'


import admin from '@/components/admin'
import Config from '@/pages2/config/Config'
import Area from '@/pages2/infor/Area'
import Bed from '@/pages2/infor/Bed'
import Department2 from '@/pages2/infor/Department2'
import Ward from '@/pages2/infor/Ward'
import Equipment from '@/pages2/treatment/Equipment'
import Frequency from '@/pages2/treatment/Frequency'
import Method from '@/pages2/treatment/method'
import Parts from '@/pages2/treatment/parts'
import Pay from '@/pages2/treatment/Pay'
import Room from '@/pages2/treatment/Room'
import Treatment2 from '@/pages2/treatment/Treatment2'
import Rights from '@/pages2/user/Rights'
import Roles from '@/pages2/user/Roles'
import User from '@/pages2/user/User'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/index',
			component: Home,
			name: 'Home',
			redirect: '/index',
			children: [{
					path: '/index',
					name: 'Index',
					component: Index,
					redirect: '/index/department',
					children: [{
							path: 'department',
							name: 'Department',
							component: Department
						},
						{
							path: 'outpatient',
							name: 'Outpatient',
							component: Outpatient
						},
						{
							path: 'consultation',
							name: 'Consultation',
							component: Consultation
						},
					]
				},
				{
					path: '/patientDetail',
					name: 'PatientDetail',
					component: PatientDetail,
					redirect: '/patientDetail/case',
					children: [{
							path: 'case',
							name: 'Case',
							component: Case,
							redirect: '/patientDetail/case/caseAll',
							children: [{
									path: 'caseAll',
									name: 'CaseAll',
									component: CaseAll
								},
								{
									path: 'caseRecord',
									name: 'CaseRecord',
									component: CaseRecord
								},

							]
						},
						{
							path: '/treatment',
							name: 'Treatment',
							component: Treatment,
							children: [

							]
						},
						{
							path: '/treatmentHistory',
							name: 'TreatmentHistory',
							component: TreatmentHistory
						},
						{
							path: '/createTr',
							name: 'createTr',
							component: createTr
						}
					]
				},
				{
					path: '/history',
					name: 'History',
					component: History
				},
				{
					path: '/workload',
					name: 'Workload',
					component: Workload
				},
				{
					path: '/info',
					name: 'info',
					component: info
				},
			]
		},
		{
			path: '/zlshome',
			name: 'zls',
			component: zlshome,
			redirect: '/zlshome/zlsindex',
			children: [{
					path: 'zlsindex',
					name: 'zlsindex',
					component: zlsindex
				},
				{
					path: 'zlshistory',
					name: 'zlshistory',
					component: zlshistory
				},
				{
					path: 'zlsinfo',
					name: 'zlsinfo',
					component: zlsinfo
				},
				{
					path: 'plcl',
					name: 'plcl',
					component: plcl
				},
				{
					path: 'zlhistory',
					name: 'zlhistory',
					component: zlhistory
				},
				{
					path: 'zx',
					name: 'zx',
					component: zx
				}
			]
		},
		{path:'/admin',name:'admin',component:admin,children: [
	            { path: '/rights', component: Rights, name: 'Rights' },
	            { path: '/user', component: User, name: 'User' },
	            { path: '/roles', component: Roles, name: 'Roles' },
	            { path: '/treatment2', component: Treatment, name: 'Treatment2' },
	            { path: '/room', component: Room, name: 'Room' },
	            { path: '/parts', component: Parts, name: 'Parts' },
	            { path: '/pay', component: Pay, name: 'Pay' },
	            { path: '/method', component: Method, name: 'Method' },
	            { path: '/frequency', component: Frequency, name: 'Frequency' },
	            { path: '/equipment', component: Equipment, name: 'Equipment' },
	            { path: '/ward', component: Ward, name: 'Ward' },
	            { path: '/department2', component: Department2, name: 'Department2' },
	            { path: '/bed', component: Bed, name: 'Bed' },
	            { path: '/config', component: Config, name: 'Config' },
	            { path: '/area', component: Config, name: 'Area' },
	        ]},
		
	]
})