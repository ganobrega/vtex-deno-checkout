// https://io.vtex.com.br/vtex.js/2.0.0/vtex.min.js

export as namespace MVJS;

interface ICatalog {
    readonly getSKU: (skuId: string) => Promise<unknown>
    readonly getProductWithVariations: (productId: string) => Promise<unknown>
    readonly getCurrentProductWithVariations: () => Promise<unknown>
}

interface ICheckout {
    readonly getOrderForm: () => Promise<unknown>
}

export interface Namespace {
    readonly catalog: ICatalog
    readonly checkout: ICheckout
}

// export const catalog: Pick<Namespace, 'catalog'>
// export const checkout: Pick<Namespace, 'checkout'>