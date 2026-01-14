export type BaseEntity = {
    id: string;
}

export type Entity<T> = {
    [K in keyof T]: T[K];
} & BaseEntity;

export type Agenda = Entity<{
    title: string;
    time: string;
    description: string;
}>

export type Kegiatan = Entity<{
    title: string;
    description: string;
    flayer_image: string;
}>
