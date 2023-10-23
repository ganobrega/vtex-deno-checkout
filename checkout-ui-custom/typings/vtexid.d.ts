// https://io.vtex.com.br/vtex.js/2.0.0/vtex.min.js

export as namespace MVID;

interface IStartOptions {
    returnUrl: string
    userEmail: string
    locale: string
    title: string
}

export interface Namespace {
    readonly start: (options: IStartOptions) => void
    readonly accountId: string
    readonly accountName: string
    readonly setScopeName: (scopeName: string) => void
    readonly setScope: (accountId: string) => void
}

// export const start: Pick<Namespace, 'start'>