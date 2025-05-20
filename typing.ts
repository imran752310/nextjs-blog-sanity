import { title } from 'process';
export type Post ={
    [x: string]: any;
    author: any;
    publishedAt: string | number | Date;
    title:string,
    summary:string,
    image:any,
    slug:string
}