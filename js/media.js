const data = [
    {
        id:1,
        active:true,
        src:"https://www.youtube.com/embed/8G1mMsBxsDY",
        thumbnail:"https://i.ytimg.com/vi/8G1mMsBxsDY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhTIGUoKDAP&rs=AOn4CLB6-QCtcMT5GrVttr2Gz6bwGsMyvw",
        title:"Long range blinds",
        description:"An individual training by one of the club members, practicing long range blind retrieves in hard cover with his retriever Bora."
    },
    {
        id:2,
        active:false,
        src:"https://www.youtube.com/embed/qwIn0Kft0zI",
        thumbnail:"https://i.ytimg.com/vi/qwIn0Kft0zI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIF0oTTAP&rs=AOn4CLBNkLKeTl68BNBVHgBSZpOswgasag",
        title:"Hand signal practice",
        description:"More experienced club members practice pushing their dogs through distracting scent trails and hand signals."
    },
    {
        id:3,
        active:false,
        src:"https://www.youtube.com/embed/TkoIMDFkdVc",
        thumbnail:"https://i.ytimg.com/vi/TkoIMDFkdVc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVyCzkmhr_7LcgfGeKMfRBROYX0w",
        title:"Ditch and high cover work",
        description:"Club founder Evgeniya doing difficult retrieves from high cover and obstacles with one of her dogs."
    },
    {
        id:4,
        active:false,
        src:"https://www.youtube.com/embed/owZESse1Nc4",
        thumbnail:"https://i.ytimg.com/vi/owZESse1Nc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXZJyvNxF05Vl6PNM2WcPRt5JFhQ",
        title:"WT practice session",
        description:"Club members prepare for Working Test in conditions similar to the real event."
    },
    {
        id:5,
        active:false,
        src:"https://www.youtube.com/embed/3ie18Ob-V9A",
        thumbnail:"https://i.ytimg.com/vi/3ie18Ob-V9A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDt90e3L3eBTY2_beArTu1TOBOEIw",
        title:"WT station 3 - Beginners class",
        description:"One of the stations at the Working Test - Beginner class."
    }
]

const imageArray =[
    {
        id:1,
        src:"../images/IMG_20190707_192116.jpg",
        active:true,
    },
    {
        id:2,
        src:"../images/IMG_20191110_143027.jpg",
        active:false,
    },
    {
        id:3,
        src:"../images/IMG_20191123_102649.jpg",
        active:false,
    },
    {
        id:4,
        src:"../images/IMG_20200915_182409.jpg",
        active:false,
    },
    {
        id:5,
        src:"../images/IMG_20200918_143837.jpg",
        active:false,
    },
    {
        id:6,
        src:"../images/IMG_20200926_090648.jpg",
        active:false,
    },
    {
        id:7,
        src:"../images/IMG_20200926_092435.jpg",
        active:false,
    },
    {
        id: 8,
        src:"../images/IMG_20200926_092440.jpg",
        active:false
    },
    {
        id: 9,
        src:"../images/IMG_20200926_092442.jpg",
        active:false
    }
]

function displayVideo(index){
    let mainVideo = document.querySelector("#main-video");
    data[index].status = !data[index].status;
    mainVideo.src = data[index]?.src;
}
function displayImage(index){
    let mainImage = document.querySelector("#main-image");
    imageArray[index].status = !imageArray[index].status;
    mainImage.src = imageArray[index]?.src;
}
function videoGallery(){
    let mainVideo = document.querySelector("#main-video");
    let videoList = document.querySelector(".video-list");
    if(data){
        let innerHtml = ""
        data?.forEach((video,index)=>{
            console.log(video)
            if(video?.active){
                console.log(mainVideo)
                mainVideo.src = video.src
            }
            innerHtml += `
              <div class="video" id="video-${index}">
                <div class="thumbnail">
                    <img src="${video?.thumbnail}" alt="">
                </div>
                <div class="title">
                    <h2>${video?.title}</h2>
                </div>
                <div class="">
                    <p>${video?.description}</p>
                </div>
                <button onclick="displayVideo(${index})">play</button>
            </div>
            `
        })
        videoList.innerHTML = innerHtml;
    }

}
function imageGallery(){
    let mainImg = document.querySelector("#main-image");
    let imageList = document.querySelector(".image-list");
    if(imageArray){
        let innerHtml = ""
        imageArray?.forEach((image,index)=>{
            if(image?.active){
                mainImg.src = image.src;
            }
            innerHtml += `
              <div class="image" id="image-${index}">
               <img src="${image?.src}" onclick="displayImage(${index})"/>
            </div>
            `
        })
        imageList.innerHTML = innerHtml;
    }
}

document.addEventListener("DOMContentLoaded",videoGallery)

document.addEventListener("DOMContentLoaded",imageGallery)