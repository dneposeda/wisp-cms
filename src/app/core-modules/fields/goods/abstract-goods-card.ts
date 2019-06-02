export abstract class AbstractGoodsCard {
    public id: number;
    public title: string;
    public image: string;
    public description: string;

    public clickMore() {
        alert('You click goods id = ' + this.id);
    }
}
