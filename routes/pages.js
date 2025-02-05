const express = require("express");
const LoggedIn = require("../controllers/loggedin")
const find_info = require("../controllers/find_info")
const profile_page = require("../controllers/profile")
const watchTutorials = require("../controllers/watchTutorials");
const library = require("../controllers/library")
const book = require("../controllers/open-book")
const UserPodcast = require("../controllers/UserPodcast")
const Directory = require("../controllers/directory")
const ProfileSettings = require('../controllers/ProfileSettings')
const ProfileUpload = require("../controllers/profileImageUpload")
const DownloadPodcast = require("../controllers/PodcastDownload")
const PlayPodcast = require("../controllers/PlayPodcasts");
const createPodcast = require("../controllers/scholarContols/createPodcast");
const userFollows = require("../controllers/userFollows");
const uploadBooks = require("../controllers/scholarContols/uploadBook");
const BookDownload = require("../controllers/BookDownload");
const dashboard = require("../controllers/dashboard");
const videoConference = require("../controllers/videoConference");

const {v4:uuidv4} = require("uuid");
const PrivateChatRoom = require("../controllers/PrivateChatRoom");
const JoinRoom = require("../controllers/joinRoom");
const render_vc = require("../controllers/render_vc");
const render_main_room = require("../controllers/render_main_room");
const createCourse = require("../controllers/scholarContols/createCourse");
const displayTutorials = require("../controllers/displayTutorials");
const createTutorial = require("../controllers/scholarContols/createTutorial");
const logout = require("../controllers/logout");
const forgotPassword = require("../controllers/forgotPassword");
const renderCourses = require("../controllers/renderCourses");
const profileCoverUpload = require("../controllers/coverImageUpload");
const userCourse = require("../controllers/userCourses");
const deleteAccountPage = require("../controllers/deleteAccount");
const DeleteAccountTrue = require("../controllers/deleteAccountTrue");

const bodyParser = require("body-parser");
const createInstructor = require("../controllers/InstructorControls/createInstructor");
const Assets = require("../controllers/assetes");
const podcastSearchResults = require("../controllers/SearchResults/podcastSearchResults");
const bookSearchResults = require("../controllers/SearchResults/bookSearchResults");
const tutorialSearchResults = require("../controllers/SearchResults/tutorialSearchResults");
const getSpaces = require("../controllers/getSpaces");
const getFollowing = require("../controllers/getfollowing");
const getDiscover = require("../controllers/getDiscover");
const CreateCoursePage = require("../controllers/InstructorControls/createCoursePage");
const displayCoursesOnly = require("../controllers/displayCoursesOnly");
const tutorialsByAuthor = require("../controllers/tutorialsByAuthor");
const TutorialOfSameCategory = require("../controllers/relatedCourses");
const AllCourses = require("../controllers/InstructorControls/allCourses");
const AllCategories = require("../controllers/InstructorControls/allCategories");
const instructorCourses = require("../controllers/InstructorControls/instructorCourses");
const NewNotifications = require("../controllers/SearchResults/newNotifications");
const SpacesChat = require("../controllers/spacesChat");
const becomeScholarPage = require("../controllers/becomeScholar");
const createScholar = require("../controllers/scholarContols/createScholar");
const createSpaces = require("../controllers/createSpaces");
const totalCourses = require("../controllers/SearchResults/totalCourses");
const totalfollowers = require("../controllers/SearchResults/totalFollowing");
const CourseCategories = require("../controllers/SearchResults/CourseCategories");
const FilterCoursesInCategory = require("../controllers/SearchResults/FilterCoursesInCategory");
const getAsTutorial = require("../controllers/SearchResults/getAsTutorials");
const getAsCourses = require("../controllers/SearchResults/getAsCourses");
const getAsLevels = require("../controllers/SearchResults/getAsLevels");
const scholarSearchResults = require("../controllers/SearchResults/scholarSearchResults");
const SpaceParticipants = require("../controllers/SearchResults/spaceParticipants");
const ExitSpace = require("../controllers/SearchResults/exitSpace");
const SpaceChatHistory = require("../controllers/SearchResults/spaceChatHistory");
const getDegree = require("../controllers/SearchResults/getDegreesResult");
const createDegrees = require("../controllers/scholarContols/createDegrees");
const instructorCourseResult = require("../controllers/SearchResults/InstructorCourseResult");
const instructorStudents = require("../controllers/InstructorControls/instructorStudents");
const instructorStudentsResults = require("../controllers/SearchResults/instructorStudentsResults");
const instructorStudentSearch = require("../controllers/InstructorControls/instructorStudentSearch");
const totalStudents = require("../controllers/SearchResults/totalStudents");
const getEditResource = require("../controllers/InstructorControls/getEditResource");
const AllResources = require("../controllers/InstructorControls/AllResources");
const editPodcast = require("../controllers/InstructorControls/editPodcasts");
const editbook = require("../controllers/InstructorControls/editBook");
const editPublication = require("../controllers/InstructorControls/editPublication");
const editTutorial = require("../controllers/InstructorControls/editTutorials");
const getDeleteResource = require("../controllers/InstructorControls/getDeleteResource");
const DeleteTutorial = require("../controllers/InstructorControls/deleteTutorial");
const DeletePodcast = require("../controllers/InstructorControls/deletePodcast");
const DeletePublication = require("../controllers/InstructorControls/deletePublication");
const Deletebook = require("../controllers/InstructorControls/deleteBook");
const SearchResources = require("../controllers/InstructorControls/searchResourceQuery");
const FilterResources = require("../controllers/InstructorControls/filterREsourcesQuery");
const instructorReviews = require("../controllers/InstructorControls/instructorReviews");
const AllReviews = require("../controllers/InstructorControls/AllReviews");
const SortReviews = require("../controllers/InstructorControls/SortReviews");
const getEditCourse = require("../controllers/InstructorControls/getEditCourse");
const editCourse = require("../controllers/InstructorControls/editCourse");
const SearchinstructorCourse = require("../controllers/InstructorControls/SearchInstructorCourses");
const TotalStudentsCount = require("../controllers/InstructorControls/TotalStudentsCount");
const TotalPublications = require("../controllers/TotalPublications");
const renderTutorialsPage = require("../controllers/renderTutorials");
const createWorkHistory = require("../controllers/createWorkHistory");
const WorkHistoryResult = require("../controllers/SearchResults/WorkHistoryResult");
const ExpertiseResult = require("../controllers/SearchResults/ExpertiseResult");
const createSkill = require("../controllers/createSkill");
const AwardResult = require("../controllers/SearchResults/AwardsResult");
const createAward = require("../controllers/createAward");
const userFollowers = require("../controllers/userFollowers");
const totalFollowersCount = require("../controllers/totalfollowers");
const AccountFollowers = require("../controllers/accountFollowers");
const accountFollows = require("../controllers/accountFollows");
const totalFollowing = require("../controllers/SearchResults/totalFollowing");
const MyCoursesList = require("../controllers/scholarContols/myCoursesresList");
const SearchScholarCourses = require("../controllers/scholarContols/searchScholarCourses");
const createReview = require("../controllers/createReview");
const ReviewsSameCourse = require("../controllers/ReviewsSameCourse");

const router = express.Router();
router.use(express.json())

router.get("/", LoggedIn, (req,res)=>{
    if(req.user){
        const username_new = req.user.username
        res.render("index.ejs", {status :"logged", logger:"logged", user : username_new })
       }
       else{
        // res.redirect("/home")
    }
})
router.get("/home", (req,res)=>{
   if(req.cookies.userRegistered){
    res.render("home", {status :"no", logger:"Not logged in", user :"", });
    }else{
    res.render("home", {status :"no", logger:"Not logged in", user :"", });

    }
})
// router.get("/home", (req,res) =>{
//     res.render("home", {
//         UserName: "TestUsername", accountType:"scholar_account", FirstName:"Muhammed", LastName: "Obinna", ProfileImage: "avatar.jpg", Email:"email@hok.com"
//     })
// })
router.get("/app", (req, res) => {
    if(req.cookies.userRegistered){
    const username_new = " "
    res.render("index.ejs", {status :"logged", logger:"logged", user : username_new })
    }else{
    res.render("index.ejs", {status :"no", logger:"Not logged in", user :""})
    
    }
  
   
})

// GET THE DASHBOARD PAGE 
router.get("/dashboard", LoggedIn, dashboard)
// Count total number of students for the instructor dashboard 
router.get("/getTotalinstructorStudents", LoggedIn, TotalStudentsCount)

// GET the toal publications count on the scholar dashboard 
router.get("/getTotalScholarPublications", LoggedIn, TotalPublications)

// GET NOTIFICATIONS 
router.get("/getNewChatNotifications", LoggedIn, NewNotifications)
// GET TOTAL COURSES 
router.get("/:username/totalcourses", totalCourses)
router.get("/:username/totalfollowing", totalFollowing)

router.get("/:username/totalstudents", totalStudents)


// GET THE LIBRARY
router.get("/library", LoggedIn, library)

// GET OPEN BOOK
router.get("/library/b/:bookID",LoggedIn, book)

// GET Download Book
router.get("/library/books/:downloadFile",LoggedIn, BookDownload)

// Search for Books 
router.get("/books/:q",LoggedIn, bookSearchResults)


// UPLOAD BOOKS TO THE library
router.get("/uploadBook", LoggedIn, (req,res) => {
    res.render("bookUpload.ejs")
})

router.post("/uploadBook", uploadBooks)

// router.post("/uploadBook/u", uploadBooks)


// GET Podcast
router.get("/podcasts",LoggedIn, UserPodcast)

//GET PodcastFile
router.get("/podcasts/download/:downloadFile", LoggedIn, DownloadPodcast)
router.get("/podcasts/:EncryptedFileName/:FileOwner", LoggedIn, PlayPodcast)

// Search for a podcast by name or owner name 
router.get("/podcasts/:q",LoggedIn, podcastSearchResults)

// GET Podcast From uesr Profile
router.get("/@:username/podcasts",LoggedIn, UserPodcast)
// ALLOW USERS TO UPLOAD PODCASTS

// router.get("/uploadPodcast", (req,res) => {
//     res.render("podcastUpload.ejs", {root:"./public"})
// })

router.post("/uploadPodcast/u", createPodcast)


// GET THE DIRECTORY
router.get("/directory", LoggedIn, Directory)

// GET the spaces to feed to the directory 
router.get("/directorySpaces", LoggedIn, getSpaces)

// SEARCH THE DIRECTORY 
router.get("/scholars/:scholarsearch", scholarSearchResults)

// GET THE SPACES INTERFACE
router.get("/spaces/:spaceid", LoggedIn, SpacesChat)
// GET SPACE PARTICIPANTS
router.get("/getSpaceParticipants/:spaceid",SpaceParticipants)
// GET SPACE CHAT HISTORY 
router.get("/getSpaceChatHistory/:spaceid", SpaceChatHistory)
// Exit Space 
router.get("/exitSpace/:spaceid",LoggedIn, ExitSpace)

// Create New spaces 
router.post("/createSpaces", LoggedIn, createSpaces)


// GET the accounts a user follows
router.get("/directory/userFollows", LoggedIn, getFollowing)

// GEt the other Accounts users do not follow 
router.get("/directorydiscoverAccounts", LoggedIn, getDiscover)


//GET THE PROFILE PAGE
router.get("/@:username",LoggedIn, profile_page, find_info);

// GET THE TUTORIALS PAGE 
router.get("/tutorials", LoggedIn, renderTutorialsPage)
router.get("/feedTutorials", LoggedIn, displayTutorials)

// GET THE CREAT COURSE PAGE 
router.get("/NewCourse", (req, res) => {
    res.render("createCourse")
})
router.get("/createCourse", LoggedIn, CreateCoursePage)
router.post('/api/scholar/newCourse', createCourse);

// CREATE TUTORIALS WITH POST ON MODAL 
router.get("/createTutorial", (req, res) =>{
    res.render("createTutorial")
})
router.post('/api/scholar/newTutorial', createTutorial)



// GET THE COURSES PAGE 
router.get("/courses", LoggedIn, (req,res)=>{
    res.redirect("/tutorials?q=courses")
})

// ge the courses and add them to the create course Select options 
router.get("/:owner/getCoursesForDropdown", LoggedIn, AllCourses)

// get the Categories for drop down 
router.get("/getCategoriesForDropdown", LoggedIn, AllCategories)

router.get("/tutorials?q=courses",LoggedIn, displayCoursesOnly)
router.get("/tutorial/:q",LoggedIn, tutorialSearchResults)
router.get("/:tutorialOwner/tutorialsByAuthor", LoggedIn, tutorialsByAuthor)
router.get("/:tutorialOwner/:tutorialCategory/tutorialsSameCourse", LoggedIn, TutorialOfSameCategory)
router.get("/getAllCourseCategories", CourseCategories)
router.get("/filterCategory/:filter",FilterCoursesInCategory )
router.get("/getAllAsTutorials", getAsTutorial)
router.get("/getAllAsCourses", getAsCourses)
router.get("/getAllAsLevels/:level", getAsLevels)

// GET THE VIDEO CONFERENCING PAGE  
router.get("/vc", (req,res) => {
    res.redirect(`/vc/${uuidv4()}`)
})
router.get("/vc/:room", LoggedIn, videoConference)


// DELETE THE ABOVE IF THE BELOW WORKS PERFECTLY 
router.get("/join-meeting", LoggedIn, render_vc)

router.get("/meetings/m/:roomId/u/:userId", render_main_room)
 
// Render Private chat room 
router.get("/@:username/chat", LoggedIn, PrivateChatRoom)


// Iinstructor Students
router.get("/instructorStudents",LoggedIn, instructorStudents)

// GET ALL Applied students for instructors  
router.get("/getInstructorStudents", LoggedIn, instructorStudentsResults)

// GET Student Search Query 
router.get("/instructorStudents/:searchInput", LoggedIn, instructorStudentSearch)


//GET THE MAIN TUTORIAL VIDEO INTERFACE
router.get("/:tutorialOwner/:courseID/:tutorialID", LoggedIn, watchTutorials);

//Update user Profile and show the settings page
router.get("/settings", LoggedIn, ProfileSettings)

// Create work history 
router.get("/Work", (req,res)=>{
    res.render("workHistoryForm")
})
router.post("/createworkHistory", LoggedIn, createWorkHistory)

// create Skill 
router.get("/skillForm", (req,res) =>{
    res.render("skillForm")
})
router.post("/createSkill", LoggedIn, createSkill)

// Create Awards 
router.get("/awardsForm", (req,res)=>{
    res.render("awardsForm")
})
router.post("/createAward", LoggedIn, createAward)

// GET THE WORK HISTORY OF A USERS 
router.get("/getWorkHistoryOf/:username", LoggedIn, WorkHistoryResult)
// GET SKills 
router.get("/getSkillsOf/:username", LoggedIn, ExpertiseResult)
// GET AWARDS 
router.get("/getAwardsOf/:username", LoggedIn, AwardResult)

// GET the Degrees for profiles
router.get("/getDegrees/:username", getDegree)

// CREATE NEW DEGREE 
router.post("/createNewDegrees", LoggedIn, createDegrees)

//Upload images to the database
router.post("/profilePhoto/u", LoggedIn, ProfileUpload);

// GET THE LIST OF PEOPLE YOU FOLLOW FROM THE SETTINGS PAGE 
// router.get("/@:loggedUser/following", LoggedIn, userFollows)
router.get("/following", LoggedIn, userFollows)
router.get("/totalFollowersCount", LoggedIn, totalFollowersCount)

// all followers
router.get("/followers", LoggedIn, userFollowers)
router.get("/userFollowers/:loggedUser", LoggedIn, AccountFollowers)
router.get("/userFollows/:loggedUser", LoggedIn, accountFollows)
router.get("/api/userFollowers", LoggedIn, userFollowers)


// GET THE LOGIN PAGE 
router.get("/public", LoggedIn, (req, res) => {
    if(req.user){
        res.sendFile("public", {root : "./login"})
    }
})

router.get("/login", (req, res) => {
    res.sendFile("login.html", {root:"./public"})
})

router.get("/register", (req, res) => {
    res.sendFile("register.html",  {root:"./public"})
})

// SEND REULTS TO THE USER
router.get("/myresults", (req, res) =>{
    res.render("results.ejs", { 
    UserName: "TestUsername", accountType:"user_account", FirstName:"Muhammed", LastName: "Obinna", ProfileImage: "avatar.jpg", Email:"email@hok.com"})
}) 

// RESET USER PASSWORD 
router.get("/passwordReset", (req, res) =>{
    // res.sendFile("forgotPassword.html", {root: "./public"})
    res.render("forgotPassword")
})
router.post("/api/forgot-password", forgotPassword)

router.get("/EmailConfirmation",(req,res)=>{
    const emailData = req.session.emailData || {}
    // console.log(req.session)
    if(emailData){
        res.render("confirmCode.ejs", {emailData:emailData, message:req.session.emailData.message, email:req.session.emailData.email})
    }else{
        // res.render("confrimCode", {emailData:emailData, message:req.session.emailData.message, email:req.session.emailData.email})
        res.redirect("/passwordReset")
    }
})

router.get("/createPassword", (req,res) => {
    // const emailData = req.session.emailData 
    console.log(req.session)
    const emailData = req.session.emailData || {}
    const ConfrimCodeData_ = req.session.tokenData || {}

    if(ConfrimCodeData_){
        res.render("newPassword", {ConfrimCodeData_:ConfrimCodeData_, message:ConfrimCodeData_.confirmCode, email:emailData.email})
    }else{
        // res.render("confrimCode", {emailData:emailData, message:req.session.emailData.message, email:req.session.emailData.email})
        // res.redirect("/passwordReset")
        console.log("NO SESSION DATA")
    }
})

router.get("/instructorCourses",LoggedIn, instructorCourses)

router.get("/getInstructorCourse", LoggedIn, instructorCourseResult)

router.get("/getMycoursesList", LoggedIn, MyCoursesList)

// router.post("/api/confirmEmail/*", ConfrimEmailReset)
// router.post("/api/passwordReset", forgotPassword) 


// Stuff from Funso 
router.get("/deleteAccount", LoggedIn, deleteAccountPage)
router.get("/deleteAccount/del/", LoggedIn, DeleteAccountTrue)



router.get("/becomeInstructor",LoggedIn, (req,res) =>{
   
    if(!req.user){
    res.render("becomeInstructor", {
        UserName: "", accountType:"", FirstName:"", LastName: "", ProfileImage: "", Email:""
    })
}else{
    
    const username = req.user.username
    const FirstName = req.user.first_name
    const LastName = req.user.last_name
    const accountType = req.user.acct_type
    const profilePicture = req.user.profile_picture
    const Email = req.user.email
    
    if(accountType !== "instructor_account"){
    res.render("becomeInstructor", {
        UserName: username, accountType:accountType, FirstName:FirstName, LastName: LastName, ProfileImage: profilePicture, Email:Email
    })
    }else{
        res.redirect("/dashboard")
    }
}
})

router.get("/aboutus", (req,res)=>{
    res.render("aboutUs")
})

router.get("/instructorReviews", LoggedIn, instructorReviews)
// GET ALL reviews 
router.get("/getAllReviews", LoggedIn, AllReviews)
router.get("/instructorReviews/rating", LoggedIn, SortReviews)

// Creata a review from teh courses interface 
router.post("/createReview", LoggedIn, createReview)

router.get("/getAllCourseReviews", LoggedIn, ReviewsSameCourse)


router.get("/becomeScholar",LoggedIn, becomeScholarPage)
router.post("/becomeScholar", createScholar)

router.get("/contactUs", (req,res) =>{
    res.render("contactUs", {
        UserName: "TestUsername", accountType:"scholar_account", FirstName:"Muhammed", LastName: "Obinna", ProfileImage: "avatar.jpg", Email:"email@hok.com"
    })
})

router.get("/forgotpassword", (req,res) =>{
   res.redirect("passwordReset")
})

// router.get("/confirmCode", (req,res) =>{
//     res.render("confirmCode", {
//         UserName: "TestUsername", accountType:"scholar_account", FirstName:"Muhammed", LastName: "Obinna", ProfileImage: "avatar.jpg", email:"email@hok.com", message:"Confirm Code",
//     })
// })

// router.get("/newPassword", (req,res) =>{
//     res.render("newPassword", {
//         UserName: "TestUsername", accountType:"scholar_account", FirstName:"Muhammed", LastName: "Obinna", ProfileImage: "avatar.jpg", email:"email@hok.com", message:"Confirm Code",
//     })
// })


router.get("/scholarAssets", LoggedIn, Assets)

// EDIT RESOURCE MODAL 
router.get("/editResourceModal/:editData", LoggedIn, getEditResource)
router.get("/deleteResourceModal/:deleteData", LoggedIn, getDeleteResource)


// GET ALL RESOURCES 
router.get("/myAssets", LoggedIn, Assets)
router.get("/getAllResources", LoggedIn, AllResources)

// EDIT PODCAST ON ASSETS Page 
router.post("/myAssets/update/podcast", LoggedIn, editPodcast)
router.post("/myAssets/update/book", LoggedIn, editbook)
router.post("/myAssets/update/publication", LoggedIn, editPublication)
router.post("/myAssets/update/tutorials", LoggedIn, editTutorial)

// DELETE ASSETS for user
router.post("/myAssets/delete/tutorial", LoggedIn, DeleteTutorial)
router.post("/myAssets/delete/podcast", LoggedIn, DeletePodcast)
router.post("/myAssets/delete/publication", LoggedIn, DeletePublication)
router.post("/myAssets/delete/book", LoggedIn, Deletebook)

// Search Resources 
router.get("/myAssets/search/q/:searchQuery", LoggedIn, SearchResources)
router.get("/myAssets/search/type/:filterQuery", LoggedIn, FilterResources)


router.get("/mycourses", LoggedIn, userCourse)
// edit courses
// get the course modal 
router.get("/editInstructorCourseModal/:editData", LoggedIn, getEditCourse )
// edit the data
router.post("/courses/update/course", LoggedIn, editCourse)
// SearchForCourses 
router.get("/mycourses/search/q/:searchQuery", LoggedIn, SearchinstructorCourse)

// Search for Scholar personal course ther enrolled for  
router.get("/scholarCourses/search/q/:searchQuery", LoggedIn, SearchScholarCourses)


router.post("/coverImage", LoggedIn, profileCoverUpload)




router.get("/logout", logout)

// SEND AN ERROR PAGE IF THE PAGE WASN'T FOUND
router.get('*', (req,res) => {
    res.status(404).render('error.ejs', {status: "Page doesn't exist"})
})


module.exports = router;