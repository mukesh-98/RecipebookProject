import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators,FormBuilder} from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { DatabaseService } from '../../shared/database.service';



@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  constructor(private router:Router,
    private route:ActivatedRoute, 
    private Recipeser : RecipeService,
    private fb: FormBuilder, 
    private datastore:DatabaseService) { }
  id: number;
  editmode=false;
  recipeForm : FormGroup;
  

  ngOnInit(): void { 
      this.route.params.subscribe(
        (params:Params)=>{
          this.id =+params['id'];
          this.editmode = params['id'] != null;
          this.initForm();
        }
      )
      

  }

  onSubmit(){
    
    if(this.editmode){
      this.Recipeser.updateNewRecipe(this.id,this.recipeForm.value);
      this.datastore.storeData().subscribe();
    } else{
      this.Recipeser.addNewRecipe(this.recipeForm.value);
      this.datastore.storeData().subscribe();
      
    }
    this.onCancel();
  }
  private initForm(){
    let recipename="";
    let recipeimage="";
    let recipedesc="";
    let recipeingr=this.fb.array([]);

    if(this.editmode){
      const recipe = this.Recipeser.getRecipies(this.id);
      recipename= recipe.name;
      recipeimage=recipe.imgpath;
      recipedesc= recipe.desc;
      if(recipe['ingr']){
        for (let ing of recipe.ingr){
          recipeingr.push(
            this.fb.group({
              'name': [ing.name, {validators:Validators.required}],
              'amount': [ing.amount,{ validators:(Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/))}]
            })
          );
        }
      }
    }

    this.recipeForm = this.fb.group({
      'name': [recipename,{ validators:Validators.required}],
      'imgpath':[recipeimage,{ validators:Validators.required}],
      'desc': [recipedesc,{ validators:Validators.required}],
      'ingr': recipeingr
    });
  }

  addNewIngrident(){
    (<FormArray>this.recipeForm.get('ingr')).push(
      this.fb.group({
        'name': [null,{ validators:Validators.required}],
        'amount': [null,{ validators:(Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/))}]
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});     
  }

  onDeleteIngerident(id:number){
    (<FormArray>this.recipeForm.get('ingr')).removeAt(id);
  }
}
