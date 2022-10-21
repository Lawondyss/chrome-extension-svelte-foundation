import { writable } from 'svelte/store'
import { ChromeLocalStorage } from 'libs/storages'

const counterStorage = new ChromeLocalStorage('counter')

export const counter = writable((id: number, value?: number) => value
    ? counterStorage.write(id, value)
    : counterStorage.read(id)
)


let pointer = 0

export const createId: () => number = () => ++pointer
