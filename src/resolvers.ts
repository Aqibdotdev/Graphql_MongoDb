import { title } from 'process';
import {User, Comment, Game} from './mongooseSchema.js';
import { DateTimeResolver } from 'graphql-scalars';


export const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        async users(_, {limit}){
            return await User.find({}).limit(limit || 6)
        },

        async user(_, {_id}){
            const doc = await User.findById({_id})// instead of {_id} we can use any word similar to what we have defined in above line
            console.log(doc)
            return doc
        },
        async comments(){
           console.log('sssadasdasdasdasd , sadasd');


            return await Comment.find({}).limit(11)
        }  
    },
// To query USers & Comments on appollo Server:
// query usersQuery{
//     users {
//       name,
//       email,
//       _id,
//       __typename
//     }
//     comments {
//       _id,
//       name,
//       email,
//       movie_id,
//       text,
//       date,
//       __typename
//     }
//   }
    Mutation: {
        // On appollo Server to deleteUser:
        // mutation deleteUserIdQuery($_id: ID!){
        //     deleteUser(_id : $_id) {
        //       name,
        //       email,
        //       _id,
        //     }
            
        //   }
        // ----------------------------------------
        // {
        //     "_id": "59b99db5cfa9a34dcd7885b9"
        // }
        async deleteUser(_, {_id}){
            const deleteDoc = await User.findByIdAndDelete({_id})
            // console.log(deleteDoc)
            // const docAll = await User.find({}).limit(6)
            // console.log(docAll)
            return deleteDoc
        },
        // On appollo Server to addGame:
        // mutation addGame($g: GameInput ){
    //     addGame (gameInput1: $g){
    //       title,
    //       company,
    //       platform
    //     }
    //   }
    // -----------------------------------------
    // {
    //     "g": {
    //       "title": "GTA11",
    //       "company": "RockStar",
    //       "platform": [
    //         "PC",
    //         "PS5"
    //       ]
    //     }
    //   }
        async addGame(_, { gameInput1: {title, company, platform}}){
            const insert = await Game.create({title, company, platform})
            // const res =await new Game({ title, company, platform }).save()
            console.log(insert)
            return insert
        },
        async deleteGame(_, {_id}){
            const delGame = await Game.findByIdAndDelete({_id})
            console.log(delGame)
            return delGame
        }
        
    }

}