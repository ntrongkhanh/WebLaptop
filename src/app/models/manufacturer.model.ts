export class ManufacturerModel{
     id: number;
     name: string;
     idImage: string;
     image: string;
     idProductType: string;
     productType: string;
     national: string;

     constructor()
     constructor(id?: number, name?: string, idImage?: string, image?: string, idProductType?: string,           productType?: string, national?: string){
          
          this.id = id;
          this.name = name;
          this.idImage = idImage;
          this.image = image;
          this.idProductType = idProductType;
          this.productType = productType;
          this.national = national;

     }
}