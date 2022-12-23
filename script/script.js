park = document.querySelector('#parkStatus')

const time = new Date()
const hour = time.getHours() 

// const hour = 11
if (hour >= 9 && hour <= 21) {
  park.innerHTML = '<div style="background-color:#caffbf; padding: 10px 20px;border-radius:30px; color:green;border: 1px solid green;">Park is currently OPEN!</div>'
} else {
  park.innerHTML = '<div style="background-color:#e85d04;padding:10px 30px; border-radius:50px;color:white;">Park is currently CLOSED! <br /> Opens from 9am to 9pm</div>'
}