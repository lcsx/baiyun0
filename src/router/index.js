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



Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path:'/',
    	component:Home,
    	name:'Home',
    	redirect: '/index',
    	children:[
    		{path:'/index',name:'Index',component:Index,redirect: '/index/department',children:[
    			{path:'department',name:'Department',component:Department},
    			{path:'outpatient',name:'Outpatient',component:Outpatient},
    			{path:'consultation',name:'Consultation',component:Consultation},
    		]},
    		{path:'/patientDetail',name:'PatientDetail',component:PatientDetail,redirect: '/patientDetail/case',children:[
    			{path:'case',name:'Case',component:Case,redirect: '/patientDetail/case/caseAll',children:[
    				{path:'caseAll',name:'CaseAll',component:CaseAll},
    				{path:'caseRecord',name:'CaseRecord',component:CaseRecord},
    				
    			]},
    			{path:'/treatment',name:'Treatment',component:Treatment,children:[
    			
    			]},
    			{path:'/treatmentHistory',name:'TreatmentHistory',component:TreatmentHistory},
    			{path:'/createTr',name:'createTr',component:createTr}	
    		]},
    		{path:'/history',name:'History',component:History},
    		{path:'/workload',name:'Workload',component:Workload},
    	]
    }
  ]
})
