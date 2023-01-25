
interface SeedData{
    entries:SeedEntry[];
}

interface SeedEntry{
    description:string;
    status:string;
    createAt:number;
}

export const seedData:SeedData = {
    entries:[
        {
            description:'Pendiente: Un texto cualquier que se pone como descripcion',
            status:"pending",
            createAt:Date.now()
        },
        {
            description:'En-Progreso: Un texto cualquier que se pone como descripcion',
            status:"in-progress",
            createAt:Date.now() - 1000000
        },
        {
            description:'Terminado: Un texto cualquier que se pone como descripcion',
            status:"finish",
            createAt:Date.now()- 10000
        }
    ]
}