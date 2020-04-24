export abstract class AbstractStorage{

    protected _valueMap:Map<string, string>;

    public abstract setValue(key: string, value: string): void;
    public abstract getValue(key: string): string;

    get navigationElements(): Map<string, string> {
        return this._valueMap;
    }
    
    set navigationElements(value: Map<string, string>) {
        this._valueMap = value;
    }

}