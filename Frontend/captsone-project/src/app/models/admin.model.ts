export class AdminUserModel {
    user!: string;
    password!: string;
}

export class ServiceMessae {
    message!: string;
    text!: string;
}

export class AdminProductModel {
    name!: string;
    price!: number;
    quantity!: number;
}

export class AdminProductUpdateModel {
    id!: string;
    price!: number;
    quantity!: number;
}

export class AdminViewRequestModel {
    id!: string;
    request!: string;
}
