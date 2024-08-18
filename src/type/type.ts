export interface DataRes{
    code: number;
    message: string;
    value: DataIner[];
}

export interface DataIner{
    bankUrl: string;
    id: string;
    keyCode: number;
    keyTrigger: string;
    url: string;
}