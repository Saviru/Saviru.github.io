const notify = document.querySelector(".notifications");
const closed = notify.querySelector(".fa-x");

let showNotification = (title, message) => {
    notify.querySelector(".notifytitle").textContent = title;
    notify.querySelector(".notifymsg").textContent = message;
    notify.querySelector(".notifyicon").innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    notify.style.right = "20px";
    notify.style.transform = "scale(1)";
    notify.classList.add("notify");

    const closeNotification = () => {
        notify.style.right = "-50%";
        notify.style.transform = "scale(0) ";
    }

    setTimeout(() => {
        closeNotification();
    }, 5000);

    closed.addEventListener("click", () => {    
        closeNotification();
    });
}





