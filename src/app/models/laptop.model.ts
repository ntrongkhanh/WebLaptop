
export class LaptopModel {
     id: number;
     idManufacturer: number;
     manufacturer: string;
     idCategory: number;
     category: string;
     idProductType: number;
     productType: string;
     idImage: number;
     image: string;
     modelCode: string;
     name: string;
     year: Date;
     status: string;
     amount: number;
     price: number;
     national: string;
     weight: string;
     guarantee: string;
     description: string;
     color: string;

     cpu: string;
     ram: string;
     screen: string;
     graphicCard: string;
     storage: string;
     battery: string;
     port: string;
     os: string;

     constructor() 
     constructor(id?: number, idManufacturer?: number, manufacturer?: string, idCategory?: number, category?: string, idProductType?: number, productType?: string, idImage?: number, image?: string, modelCode?: string, name?: string, year?: Date, status?: string, amount?: number, price?: number, national?: string, weight?: string, guarantee?: string, description?: string, color?: string, cpu?: string, ram?: string, screen?: string, graphicCard?: string, storage?: string, battery?: string, port?: string, os?: string,){

          this.id = id;
          this.idManufacturer = idManufacturer;
          this.manufacturer = manufacturer;
          this.idCategory = idCategory;
          this.category = category;
          this.idProductType = idProductType;
          this.productType = productType;
          this.idImage = idImage;
          this.image = image;
          this.modelCode = modelCode;
          this.name = name;
          this.year = year;
          this.status = status;
          this.amount = amount;
          this.price = price;
          this.national = national;
          this.weight = weight;
          this.guarantee = guarantee;
          this.description = description;
          this.color = color;
          this.cpu = cpu;
          this.ram = ram;
          this.screen = screen;
          this.graphicCard = graphicCard;
          this.storage = storage;
          this.battery = battery;
          this.port = port;
          this.os = os;
     }
}