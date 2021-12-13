import { ICardList } from '../interface/interface';

export class StorageService {
    dataKey = 'data';

    get data(): ICardList[] {
        const dataString = localStorage.getItem(this.dataKey);
        return JSON.parse(dataString ? dataString : '[]');
    }

    set data(data: ICardList[]) {
        localStorage.setItem(this.dataKey, JSON.stringify(data));
    }
}
