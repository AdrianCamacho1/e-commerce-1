// export const Rating = ({rating}) => {
//     let ratingArray = Array(5).fill(false);
//     for(let i =0; i<rating; i++){
//         ratingArray[i] = true;
//     }

//   return (
//     <>
//         {ratingArray.map((value, index)=> (
//             value ? (
//                 <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>

//             ) : (
//                 <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>

//             )
//         ))}
//     </>
//   )
// }

import { StarIcon } from '@heroicons/react/solid'; // Importing filled star icon
import { StarIcon as OutlineStarIcon } from '@heroicons/react/outline'; // Importing empty star icon

export const Rating = ({ rating }) => {
    const maxRating = 5; // Maximum number of stars
    let ratingArray = Array(maxRating).fill(false);
    for (let i = 0; i < rating; i++) {
        ratingArray[i] = true;
    }

    return (
        <div className="flex">
            {ratingArray.map((value, index) => (
                <div key={index} className="flex items-center">
                    {value ? (
                        <StarIcon key={index} className="h-5 w-5 text-yellow-500" />
                    ) : (
                        <OutlineStarIcon key={index} className="h-5 w-5 text-gray-400" />
                    )}
                </div>
            ))}
        </div>
    );
};



