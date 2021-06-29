import { membersDAL, moviesDAL } from "../DALs/initDataDAL";
import Member from '../models/members';
import Movie from '../models/movies';
import { IMember, IMovie } from "../types";
import { countMembers } from "../controllers/members";
import { countMovies } from "../controllers/movies";



export const populateMembers = async () => {
    try {
        const membersCount = await countMembers();
        if (membersCount === 0) {
            const members: any = await membersDAL();
            const membersData = members.data.map((member: any) => (
                {
                    name: member.name,
                    email: member.email,
                    city: member.address.city
                }
            ));
            membersData.forEach((member: IMember) => {
                member = new Member({
                    name: member.name,
                    email: member.email,
                    city: member.city
                })
                member.save();
            });
        }
    } catch (error) {
        throw error
    }
}


export const populateMovies = async () => {
    try {
        const moviesCount = await countMovies();
        if (moviesCount === 0) {
            const movies: any = await moviesDAL();
            const moviesData = movies.data.map((movie: any) => (
                {
                    name: movie.name,
                    genres: movie.genres,
                    image: movie.image.original,
                }
            ));
            moviesData.forEach((movie: IMovie) => {
                movie = new Movie({
                    name: movie.name,
                    genres: movie.genres,
                    image: movie.image,
                    permited: new Date()
                })
                movie.save();
            });
        }
    } catch (error) {
        throw error
    }
}