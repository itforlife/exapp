declare module 'firestorter' {
  export class Document {
    constructor(path: string | FirebaseFirestore.DocumentReference)
    set(payload: { [k: string]: any })
    update()
    data: { [k: string]: any }
    ref: FirebaseFirestore.DocumentReference
    id?: string
    path?: string
    mode: 'auto' | 'on' | 'off'
    isActive: boolean
    snapshot: FirebaseFirestore.DocumentSnapshot
    isLoading: boolean
    fetch(): Promise<Document>
    ready(): Promise<void>

  }
  export class Collection {
    constructor(path: string | FirebaseFirestore.CollectionReference)
    docs: Document[]
    ready(): Promise<void>
    add(data: any): Promise<Document>
    ref: FirebaseFirestore.CollectionReference
    query: (
      ref: FirebaseFirestore.CollectionReference
    ) => FirebaseFirestore.Query
    id?: string
    path?: string
    mode: 'auto' | 'on' | 'off'
    isActive: boolean
    fetch(): Promise<Collection>
    isLoading: boolean
    ready(): Promise<void>
    addObserverRef(): boolean
  }
  export function initFirestorter({ firebase: Firebase })
}
