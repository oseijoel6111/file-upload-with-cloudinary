const cloudinary = require('cloudinary').v2

// cloudinary configuration
cloudinary.config({
    cloud_name: 'dk6vnx2ly',
    api_key: '662895717321312',
    api_secret: 'ohYIkM6cqM2sFYnLCv8fiJ6Yom0'
})

const uploadImage = './Profiles.JPG'

const uploadFile = async()=>{
    try{
    const res = await cloudinary.uploader.upload(uploadImage)
    console.log(res);
    }catch(err){
        console.log(err);
    }
}

uploadFile()