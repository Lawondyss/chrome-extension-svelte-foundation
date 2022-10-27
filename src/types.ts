export type StoreKey = string | number
export type StoreData = Record<string, any>

export type ButtonType = 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | 'link' | 'glass'
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs' | 'wide' | 'block'

export type FieltTextType = 'text' | 'password' | 'email' | 'tel' | 'date' | 'time' | 'url' | 'number' | 'multiline'

export type SignInValues = { login: string, password: string, code: number, server: 'eu' | 'usa', remember: boolean, timestamp: number }
