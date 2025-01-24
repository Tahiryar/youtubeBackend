import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'; // Correct import statement for fs module

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Correctly access env variable
    api_key: process.env.CLOUDINARY_API_KEY, // Correctly access env variable
    api_secret: process.env.CLOUDINARY_SECRET_KEY // Correctly access env variable
});
