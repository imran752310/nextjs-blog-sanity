import { defineType,defineField } from "sanity";

export const author = defineType({
    name:'author',
    type:'document',
    title:'Author',
    fields:[
        defineField({
            name:'name',
            type:'string',
            title:"AuthorName"
        }),
        defineField({
            name:'bio',
            type:'text',
            title:'Bio'
        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image',
            options:{
                hotspot:true
            }
        })
    ]

})


// import { defineType, defineField } from "sanity";
// import { title } from "process";

// export const author = {

//     name: "author",
//     title: "Author",
//     type : "document",
//     fields: [
//        defineField(
//         {
//             name: "name",
//             title: "Name",
//             type: "string",
//             description:"Enter Title of your post",
//             validation: (Rule)=> Rule.required().min(10).max(15)
//         }),
//         defineField({
//             name:'bio',
//             type:'text',
//             title:'Bio'
//         }),
//         defineField({
//             name:'image',
//             type:'image',
//             title:'Image',
//             options:{
//                 hotspot:true
//             }
//         })
          
      
//     ],
// };