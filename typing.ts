import { title } from 'process';
export type Post ={
    publishedAt: string | number | Date;
    title:string,
    summary:string,
    image:any,
    slug:string
}