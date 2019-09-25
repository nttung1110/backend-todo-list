var admin=require('firebase-admin');
const serviceAccount=require('../../todolist-dev-3e715-firebase-adminsdk-4dpsg-65d7376e97.json')
export async function initFirebaseConnection(firebase){
    try{
        var firebaseConfig={
            apiKey: "AIzaSyBfaoj7A7Pv3iWduetQsmZAyLada3a_Uk4",
            authDomain: "todolist-dev-3e715.firebaseapp.com",
            databaseURL: "https://todolist-dev-3e715.firebaseio.com",
            projectId: "todolist-dev-3e715",
            storageBucket: "",
            messagingSenderId: "424824951267",
            appId: "1:424824951267:web:76c082cc77ee0989b910d6"
        };
        //testing
        firebase.initializeApp(firebaseConfig);
        /*
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
            var errorCode=error.Code;
            var errorMessage=error.message;
            console.log('errorCodecreate',errorCode);
            console.log('errorMessagecreate',errorMessage);
          });
          */
    }
    catch(error){
        throw error;
    }
}
//exports.authCloudExplicit = async ({projectId, keyFilename}) => {
export async function authCloudExplicit ({projectId, keyFilename})  {
    // [START auth_cloud_explicit]
    // Imports the Google Cloud client library.
    const {Storage} = require('@google-cloud/storage');
  
    // Instantiates a client. Explicitly use service account credentials by
    // specifying the private key file. All clients in google-cloud-node have this
    // helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
    // const projectId = 'project-id'
    // const keyFilename = '/path/to/keyfile.json'
    const storage = new Storage({projectId, keyFilename});
  
    // Makes an authenticated API request.
    try {
      const [buckets] = await storage.getBuckets();
  
      console.log('Buckets:');
      buckets.forEach(bucket => {
        console.log(bucket.name);
      });
    } catch (err) {
      console.error('ERROR:', err);
    }
    // [END auth_cloud_explicit]
  };
  
//exports .initAdmin=async()=>{
export async function initAdmin(){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://todolist-dev-3e715.firebaseio.com/'
      });
}
exports.admin=admin;
