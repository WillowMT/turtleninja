park = document.querySelector('#parkStatus')

const time = new Date()
const hour = time.getHours() 

// const hour = 24
if (hour >= 9 && hour <= 21) {
  park.innerHTML = '<div style="background-color:#caffbf; padding: 10px 20px;border-radius:5px; color:green;border: 1px solid green;width:fit-content;margin-right:15px;">Park is currently Open!</div>'
} else {
  park.innerHTML = '<div style="background-color:#e85d04;padding:10px 30px; border-radius:5px;color:white;width:fit-content;margin-right:15px;">Park is currently Closed! <br /> Opens from 9am to 9pm</div>'
}