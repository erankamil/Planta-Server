export class Utils {
    public static cleanObject(obj: any) {
        for (let propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined) {
                delete obj[propName];
            }
        }
    }
}