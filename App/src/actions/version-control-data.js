import axios from "axios";

export const sendData=(payload)=>{
      axios({
        url: "/",
        method: "POST",
        data: payload,
      })
        .then(() => {
          console.log("Data sent to the server");
        })
        .catch(() => {
          console.log("Data sending error");
        });
  }