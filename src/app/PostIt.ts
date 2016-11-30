export class PostIt {
    idPostIt: number;
    content: string;
    sizeX: number;
    sizeY: number;
    positionX: number;
    positionY: number;
	
	constructor() {
        this.content = "";
		this.sizeX = 300;
		this.sizeY = 200;
		this.positionX = 500;
		this.positionY = 300;
	}
}