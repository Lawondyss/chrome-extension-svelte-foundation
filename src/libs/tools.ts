let pointer = 0
export function createFormFieldId(fieldName: string) {
    return `${fieldName}:${++pointer}`
}
