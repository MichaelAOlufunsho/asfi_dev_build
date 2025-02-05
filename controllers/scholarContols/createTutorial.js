const multer = require('multer');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg'); // Make sure you have fluent-ffmpeg installed
const db = require('../../routes/db.config');

// Configure Multer for video and thumbnail uploads
const VideoDestination = path.join(__dirname, "../../public/userUpload/videos/");
const ThumbnailDestination = path.join(__dirname, "../../public/userUpload/thumbnails/");

const newVideoNameArray = []
const newThumbnailNameArray = []


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        if (file.fieldname === 'video') {
            callback(null, VideoDestination);
            newVideoNameArray.push(VideoDestination)
        } else if (file.fieldname === 'thumbnail') {
            callback(null, ThumbnailDestination);
            newThumbnailNameArray.push(ThumbnailDestination)
        }
    },
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Define the createTutorial function
const createTutorial = (req, res) => {
    // Handle video and thumbnail uploads
    upload.fields([{ name: 'video', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }])(req, res, (uploadError) => {
        if (uploadError) {
            console.error(uploadError);
            return res.status(500).json({ error: 'Error uploading files' });
        }
        // The uploaded files are now available in req.files
        const videoPath = VideoDestination + req.files['video'][0].filename;
        const thumbnailPath = ThumbnailDestination + req.files['thumbnail'][0].filename;

        
        const newVideoName = req.files['video'][0].filename;
        const newThumbnailName = req.files['thumbnail'][0].filename;
        const CourseTitle = "N/A"
        const CourseID = req.body.course_id
        const CourseDuration = "N/A"
        const CourseDescription = req.body.shortDescription
        const CourseOwner = req.body.Owner
        const CommentId  = req.body.commentBuffer
        const tutorialCategory = req.body.category
        const CourseLevel = "N/A"
        const CourseCost = "N/A"
        const CourseCurrency = "N/A"
        const tutorialID = req.body.tutorialBuffer
        const TutorialTitle = req.body.tutorialTitle
        
        processVideo(videoPath, thumbnailPath, newVideoName, TutorialTitle, tutorialID, newThumbnailName,  CourseID, CourseOwner, CommentId, CourseDescription, tutorialCategory, res);

    }); 
};

function processVideo(videoPath, thumbnailPath,  newVideoName, TutorialTitle, tutorialID, newThumbnailName, CourseID, CourseOwner, CommentId, CourseDescription, tutorialCategory, res) {
//     // Get video duration using fluent-ffmpeg
    ffmpeg.ffprobe(videoPath, (err, metadata) => {
        if (err) {
            console.error(err);
            res.send('Error processing video.');
        } else {
            const duration = metadata.format.duration; // Video duration in seconds

            // console.log(duration);
            // console.log(metadata);
            db.query("SELECT * FROM tutorials WHERE ?", [{tutorial_id:tutorialID}], async (err, tutorialExists) => {
                if(err) throw err
                if(tutorialExists[0]){
                    // console.log("Turorial Exists")
                    res.redirect("/Tutorials")
                }else{
                    db.query("INSERT INTO tutorials SET ?", [{tutorial_title:TutorialTitle, tutorial_id:tutorialID, tutorial_description: CourseDescription, tutorial_owner:CourseOwner, comments_ID:CommentId, related_course_id:CourseID, tutorial_thumbnail:newThumbnailName, tutorial_video:newVideoName, video_duration: duration, category:tutorialCategory}], async (err, tutorialCreated) => {
                        if(err) throw err
                        res.redirect("/Tutorials")
                    })
                }
            })
   
            // res.render('upload', { duration, thumbnailPath }); 
        }
    });
}

module.exports = createTutorial;
