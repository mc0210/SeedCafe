export function createHours(content) {
  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hours-container");
  content.appendChild(hoursContainer);
  let alocation = document.createElement("a");
  alocation.id = "alocation";
  alocation.href = "https://goo.gl/maps/rR6gziw7VzVQP13Z6";
  alocation.target = "_blank";
  hoursContainer.appendChild(alocation);

  const address = document.createElement("p");
  address.innerText = "250 Main St \n Pawtucket, RI 02860";

  alocation.appendChild(address);
  const hours1 = document.createElement("p");
  hours1.innerText = "Tuesday \u2013 Sunday";
  const hours2 = document.createElement("p");
  hours2.innerText = "7am to 6pm";
  const hours3 = document.createElement("p");
  hours3.id = "hours3";
  hours3.innerText = "Closed on Monday";

  hoursContainer.appendChild(hours1);
  hoursContainer.appendChild(hours2);
  hoursContainer.appendChild(hours3);

  const iframeMap = document.createElement("iframe");
  iframeMap.id = "iframeMap";

  iframeMap.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.6800028370324!2d-71.38618537074508!3d41.87737009725482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e443547e8d00bd%3A0xeb0f2956ca270d6e!2s250%20Main%20St%2C%20Pawtucket%2C%20RI%2002860!5e0!3m2!1sen!2sus!4v1679167238199!5m2!1sen!2sus";
  iframeMap.allowfullscreen = "";
  iframeMap.loading = "lazy";
  iframeMap.referrerpolicy = "no-referrer-when-downgrade";

  content.appendChild(iframeMap);
}
