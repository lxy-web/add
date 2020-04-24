import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
		path:"/",
		redirect:"/home/index"
	},
	{
		path:"/home",  
		component:()=>import("../views/home/Home.vue"),
		children:[
			{
				path:"/home/index",
				component:()=>import("@/views/home/index/index.vue")
			},
			{
				path:"/home/Articllist",
				component:()=>import("@/views/home/Article/Article_list.vue")
			},
			{
				path:"/home/Articladd",
				component:()=>import("@/views/home/Article/Article_add.vue")
			},
			{
				path:"/home/Classifiedadd",
				component:()=>import("@/views/home/Classified/Classified_add.vue")
			},
			{
				path:"/home/Classifiedlist",
				component:()=>import("@/views/home/Classified/Classified_list.vue")
			},
			{
				path:"/home/Label_list",
				component:()=>import("@/views/home/Label/Label_list.vue")
			},
			{
				path:"/home/Label_add",
				component:()=>import("@/views/home/Label/Label_add.vue")
			},
			
			{
				path:"/home/User_Modifyt",
				component:()=>import("@/views/home/User/User_Modify.vue")
			},
			{
				path:"/home/User_list",
				component:()=>import("@/views/home/User/User_list.vue")
			},
			{
				path:"/home/User_add",
				component:()=>import("@/views/home/User/User_add.vue")
			},
			{
				path:"/home/Currency_Basics",
				component:()=>import("@/views/home/Currency/Currency_Basics.vue")
			},
			{
				path:"/home/Currency_Menu",
				component:()=>import("@/views/home/Currency/Currency_Menu.vue")
			},
			
			
		]
		
	},
	{
		path:"/login",
		component:()=>import("../views/login/Login.vue")
	},
	{
		path:"/Register",
		component:()=>import("../views/register/Register.vue")
	}
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
