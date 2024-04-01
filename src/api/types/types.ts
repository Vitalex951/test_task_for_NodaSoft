export interface IUser {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: ICompany;
    address: IAddress
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface IGeo {
    lat: string;
    lng: string;
}


export interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
}
