export class ImageModel {
     id: number;
     image: string;

     constructor()
     constructor(id?: number, image?: string){
          this.id = id;
          this.image = image;
     }
}