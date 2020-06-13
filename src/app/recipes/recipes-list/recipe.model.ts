import { Ingredients } from '../../shared/ingredients.model';


export class Recipe{

    constructor(
        public name: string,
        public desc:string,
        public imgpath: string,
        public ingr: Ingredients[]
        ){
    }
}

  