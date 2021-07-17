export class ErrorMsgs extends Error{
    public ErrorToClient: string;
    public ErrorToDeveloper: string;
    public StatusCode: number;

    constructor(etc:string, etd:string = '', isClientError: boolean = false) {
        super();
        this.ErrorToClient = etc;
        this.ErrorToDeveloper = etd || etc;
        this.StatusCode = isClientError ? 400 : 500
    }
}