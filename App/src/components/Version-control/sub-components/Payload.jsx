export default function getPayLoad(){
    const today = new Date();
    return {
      title: "Payload data",
      body: document.querySelector(".Whole").innerHTML,
      date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
      time:
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    };
  }