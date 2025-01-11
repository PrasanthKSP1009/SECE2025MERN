// async function asAw(){
//     setTimeout(()=>{
//         console.log("Inside TimeOut");
//     },5000)
//     return "This is async/await example"
// }
// asAw().then(function(output){
//     console.log(output);
// })

// Instagram Example

commentCode = async () => {
  return new Promise((commentingPost) => {
    setTimeout(() => {
      commentingPost("Comment posted to the post created successfully");
    }, 5000);
  });
};
async function likeCode() {
  return new Promise((likingPost) => {
    setTimeout(() => {
      likingPost("Liked the post created");
    }, 2000);
  });
}
async function creatPost() {
  var post = new Promise((cPost) => {
    setTimeout(() => {
      cPost("Post Created Successfully");
    }, 1000);
  });
  var [post, like, comment] = await Promise.all([
    post,
    likeCode(),
    commentCode(),
  ]);
  console.log(post);
  console.log(like);
  console.log(comment);
}
creatPost();
