import type { StorageArea } from '@types/chrome'
import type { StoreData, StoreKey } from 'src/types'


abstract class ChromeStorage {
    private readonly store: StorageArea
    private readonly namespace: string

    constructor(store: StorageArea, namespace: string) {
        this.store = store
        this.namespace = namespace

        this.init()
    }

    async readAll(): Promise<StoreData> {
        const stored = await this.store.get(this.namespace)

        return stored[this.namespace] ?? {}
    }

    async read(name: StoreKey): Promise<any> {
        const data: StoreData = await this.readAll()
        const key = this.createKey(name)
        return data[key] ?? null
    }

    async write(name: StoreKey, value: any): Promise<void> {
        const data: StoreData = await this.readAll()
        const key = this.createKey(name)

        data[key] = value

        await this.store.set({[this.namespace]: data})
    }

    async remove(name: StoreKey): Promise<void> {
        const data: StoreData = await this.readAll()
        const key = this.createKey(name)

        delete data[key]

        await this.store.set({[this.namespace]: data})
    }

    async clear(): Promise<void> {
        this.store.remove(this.namespace)
    }

    private init(): void {
        this.store.get(this.namespace, (stored: any) => {
            if (!stored) {
                this.store.set({ [this.namespace]: {} })
            }
        })
    }

    private createKey(name: StoreKey): string {
        return `_${name}`
    }
}


export class ChromeLocalStorage extends ChromeStorage {
    constructor(namespace: string) {
        super(chrome.storage.local, namespace)
    }
}


export class ChromeSyncStorage extends ChromeStorage {
    constructor(namespace: string) {
        super(chrome.storage.sync, namespace)
    }
}


export class ChromeInMemoryStorage extends ChromeStorage {
    constructor(namespace: string) {
        super(chrome.storage.session, namespace)
    }
}
