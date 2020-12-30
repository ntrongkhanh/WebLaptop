export class CategoryModel {
     id: number;
     name: string;
     idProductType: number;
     prodctType: string;

     constructor()
     constructor(id?: number, name?: string, idProductType?: number, prodctType?: string){
          this.id = id;
          this.name = name;
          this.idProductType = idProductType;
          this.prodctType = prodctType;
          
     }
}