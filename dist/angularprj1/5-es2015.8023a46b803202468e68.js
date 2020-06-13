(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipeModule",(function(){return w}));var r=i("ofXK"),n=i("3Pt+"),c=i("tyNb"),o=i("fXoL"),s=i("ceC1");const b=function(e){return[e]};let a=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipes-item"]],inputs:{recipe:"recipe",id:"id"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"mb-2","list-group-item","clearfix",2,"border","0.3px solid lightgrey","cursor","pointer",3,"routerLink"],[1,"float-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"float-right","p-3"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(o.Mb(0,"a",0),o.Mb(1,"div",1),o.Mb(2,"h4",2),o.hc(3),o.Lb(),o.Mb(4,"p",3),o.hc(5),o.Lb(),o.Lb(),o.Mb(6,"span",4),o.Kb(7,"img",5),o.Lb(),o.Lb()),2&e&&(o.Xb("routerLink",o.ac(5,b,t.id)),o.zb(3),o.jc(" ",t.recipe.name," "),o.zb(2),o.jc(" ",t.recipe.desc," "),o.zb(2),o.Yb("src",t.recipe.imgpath,o.ec),o.Yb("alt",t.recipe.name))},directives:[c.e,c.d],styles:[""]}),e})();function p(e,t){if(1&e&&o.Kb(0,"app-recipes-item",4),2&e){const e=t.index;o.Xb("recipe",t.$implicit)("id",e)}}let d=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.route=t,this.actiroute=i}ngOnInit(){this.subscription=this.recipeService.recipeChanged.subscribe(e=>{this.recipes=e}),this.recipes=this.recipeService.getRecipe()}onNavigate(){this.route.navigate(["new"],{relativeTo:this.actiroute})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(s.a),o.Jb(c.c),o.Jb(c.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipes-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xl-12"],[1,"btn","btn-success","mb-3","mt-3",3,"click"],[3,"recipe","id",4,"ngFor","ngForOf"],[3,"recipe","id"]],template:function(e,t){1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"button",2),o.Ub("click",(function(){return t.onNavigate()})),o.hc(3," New Recipe "),o.Lb(),o.Lb(),o.Lb(),o.Kb(4,"hr"),o.Mb(5,"div",0),o.Mb(6,"div",1),o.gc(7,p,1,2,"app-recipes-item",3),o.Lb(),o.Lb()),2&e&&(o.zb(7),o.Xb("ngForOf",t.recipes))},directives:[r.h,a],styles:[""]}),e})(),l=(()=>{class e{constructor(e){this.recipeService=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(s.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7","m-x-4"]],template:function(e,t){1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Kb(2,"app-recipes-list"),o.Lb(),o.Mb(3,"div",2),o.Kb(4,"router-outlet"),o.Lb(),o.Lb())},directives:[d,c.g],styles:[""]}),e})(),u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(o.Mb(0,"h3"),o.hc(1," Please select a recipe!\n"),o.Lb())},styles:[""]}),e})();var m=i("AOFq");function h(e,t){if(1&e){const e=o.Nb();o.Mb(0,"div",19),o.Mb(1,"div",20),o.Mb(2,"div",3),o.Kb(3,"input",21),o.Lb(),o.Lb(),o.Mb(4,"div",22),o.Mb(5,"div",3),o.Kb(6,"input",23),o.Lb(),o.Lb(),o.Mb(7,"div",22),o.Mb(8,"button",24),o.Ub("click",(function(){o.dc(e);const i=t.index;return o.Wb().onDeleteIngerident(i)})),o.hc(9,"X"),o.Lb(),o.Lb(),o.Lb()}2&e&&o.Xb("formGroup",t.$implicit)}let g=(()=>{class e{constructor(e,t,i,r,n){this.router=e,this.route=t,this.Recipeser=i,this.fb=r,this.datastore=n,this.editmode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editmode=null!=e.id,this.initForm()})}onSubmit(){this.editmode?(this.Recipeser.updateNewRecipe(this.id,this.recipeForm.value),this.datastore.storeData().subscribe()):(this.Recipeser.addNewRecipe(this.recipeForm.value),this.datastore.storeData().subscribe()),this.onCancel()}initForm(){let e="",t="",i="",r=this.fb.array([]);if(this.editmode){const c=this.Recipeser.getRecipies(this.id);if(e=c.name,t=c.imgpath,i=c.desc,c.ingr)for(let e of c.ingr)r.push(this.fb.group({name:[e.name,{validators:n.o.required}],amount:[e.amount,{validators:n.o.pattern(/^[1-9]+[0-9]*$/)}]}))}this.recipeForm=this.fb.group({name:[e,{validators:n.o.required}],imgpath:[t,{validators:n.o.required}],desc:[i,{validators:n.o.required}],ingr:r})}addNewIngrident(){this.recipeForm.get("ingr").push(this.fb.group({name:[null,{validators:n.o.required}],amount:[null,{validators:n.o.pattern(/^[1-9]+[0-9]*$/)}]}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngerident(e){this.recipeForm.get("ingr").removeAt(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(c.c),o.Jb(c.a),o.Jb(s.a),o.Jb(n.c),o.Jb(m.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-edit"]],decls:33,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","formControlName","name","name","name","id","recipeName","placeholder","Enter recipe name",1,"form-control"],["for","img"],["type","text","name","recipeImage","formControlName","imgpath","id","recipeImage","placeholder","Enter recipe image path",1,"form-control"],["imgPath",""],[1,"img-responsive","ml-3","mb-3",2,"height","200px",3,"src"],["for","desc"],["type","text","name","desc","id","desc","rows","6","formControlName","desc","placeholder","Enter the description of recipe",1,"form-control"],[1,"row","mx-2"],["formArrayName","ingr",1,"col-xs-12"],["class","row",3,"formGroup",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success","px-5","mx-2","mb-2",3,"click"],[1,"col-xs-6"],["type","submit",1,"btn","btn-success","px-5","mx-3",3,"disabled"],["type","button",1,"btn","btn-danger","px-5","mx-2",3,"click"],[1,"row",3,"formGroup"],[1,"col-xs-6","mx-1"],["type","text","name","ingriName","id","ingriName","formControlName","name","placeholder","Enter ingerident name",1,"form-control"],[1,"col-xs-2","mx-1"],["type","number","name","ingrAmount","id","ingrAmount","formControlName","amount","placeholder","Enter amount",1,"form-control"],["name","cancel","id","cancel","type","button",1,"btn","btn-danger","p-x-2",3,"click"]],template:function(e,t){if(1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"form",2),o.Ub("ngSubmit",(function(){return t.onSubmit()})),o.Mb(3,"div",3),o.Mb(4,"label",4),o.hc(5,"Name"),o.Lb(),o.Kb(6,"input",5),o.Lb(),o.Mb(7,"div",3),o.Mb(8,"label",6),o.hc(9,"Image"),o.Lb(),o.Kb(10,"input",7,8),o.Lb(),o.Mb(12,"div",0),o.Mb(13,"div",1),o.Kb(14,"img",9),o.Lb(),o.Lb(),o.Mb(15,"div",3),o.Mb(16,"label",10),o.hc(17,"Description"),o.Lb(),o.Kb(18,"textarea",11),o.Lb(),o.Mb(19,"div",12),o.Mb(20,"div",13),o.gc(21,h,10,1,"div",14),o.Mb(22,"div",0),o.Mb(23,"div",1),o.Mb(24,"button",15),o.Ub("click",(function(){return t.addNewIngrident()})),o.hc(25,"Add Ingerident"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(26,"div",0),o.Mb(27,"div",16),o.Mb(28,"button",17),o.hc(29,"Save"),o.Lb(),o.Lb(),o.Mb(30,"div",16),o.Mb(31,"button",18),o.Ub("click",(function(){return t.onCancel()})),o.hc(32,"Cancel"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&e){const e=o.cc(11);o.zb(2),o.Xb("formGroup",t.recipeForm),o.zb(12),o.Xb("src",e.value,o.ec),o.zb(7),o.Xb("ngForOf",t.recipeForm.get("ingr").controls),o.zb(7),o.Xb("disabled",!t.recipeForm.valid)}},directives:[n.p,n.h,n.e,n.a,n.g,n.d,n.b,r.h,n.k],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var v=i("Nyw2");function f(e,t){if(1&e&&(o.Mb(0,"li",18),o.hc(1),o.Lb()),2&e){const e=t.$implicit;o.zb(1),o.kc(" ",e.name," - (",e.amount,") ")}}const L=function(){return["/shopping"]},M=[{path:"",component:l,children:[{path:"",component:u},{path:"new",component:g,canActivate:[v.a]},{path:":id",component:(()=>{class e{constructor(e,t,i){this.recipeService=e,this.route=t,this.router=i}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.recipes=this.recipeService.getRecipies(this.id)})}addShopping(){this.recipeService.addIngredient(this.recipes.ingr)}onEdit(){this.router.navigate(["edit"],{relativeTo:this.route})}ondeleterecipe(){this.recipeService.ondeleterecipe(this.id),this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(s.a),o.Jb(c.a),o.Jb(c.c))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipes-detail"]],decls:28,vars:7,consts:[[1,"row"],[1,"ml-3"],[1,"col-xl-12"],[1,"img-responsive","mb-3",2,"height","200px",3,"src","alt"],[1,"btn-group"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-primary","dropdown-toggle"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],[1,"dropdown-item","text-primary",2,"cursor","pointer",3,"routerLink","click"],[1,"dropdown-item","text-success",2,"cursor","pointer",3,"click"],[1,"dropdown-item","text-danger",2,"cursor","pointer",3,"click"],[1,"my-3"],[1,"col-xl-12","ml-4","mb-2"],[1,"text-info"],[1,"col-xl-12","ml-4"],[1,"text-muted"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(o.Mb(0,"div",0),o.Mb(1,"h1",1),o.hc(2),o.Lb(),o.Mb(3,"div",2),o.Kb(4,"img",3),o.Lb(),o.Lb(),o.Mb(5,"div",0),o.Mb(6,"div",2),o.Mb(7,"div",4),o.Mb(8,"div",5),o.Mb(9,"button",6),o.hc(10," Manage Recipe "),o.Lb(),o.Mb(11,"div",7),o.Mb(12,"a",8),o.Ub("click",(function(){return t.addShopping()})),o.hc(13,"To Shoping List"),o.Lb(),o.Mb(14,"a",9),o.Ub("click",(function(){return t.onEdit()})),o.hc(15,"Edit Recipe"),o.Lb(),o.Mb(16,"a",10),o.Ub("click",(function(){return t.ondeleterecipe()})),o.hc(17,"Delete Recipe"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(18,"div",11),o.Mb(19,"div",0),o.Mb(20,"div",12),o.Mb(21,"h4",13),o.hc(22),o.Lb(),o.Lb(),o.Lb(),o.Mb(23,"div",0),o.Mb(24,"div",14),o.Mb(25,"h6",15),o.Mb(26,"ul",16),o.gc(27,f,2,2,"li",17),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&e&&(o.zb(2),o.ic(t.recipes.name),o.zb(2),o.Yb("alt",t.recipes.name),o.Xb("src",t.recipes.imgpath,o.ec),o.zb(8),o.Xb("routerLink",o.Zb(6,L)),o.zb(10),o.ic(t.recipes.desc),o.zb(5),o.Xb("ngForOf",t.recipes.ingr))},directives:[c.e,r.h],styles:[""]}),e})()},{path:":id/edit",component:g,canActivate:[v.a]}]}];let x=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[c.f.forChild(M)],c.f]}),e})(),w=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[r.b,n.m,x]]}),e})()}}]);