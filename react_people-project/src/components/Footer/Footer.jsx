import '../../styles/Footer.css';

export const Footer = () => {

    const storageTime = localStorage.getItem('fetchLastTime');
    const update = (newDate) => {
        const updateTimeSeconds = Math.floor(Date.now() - newDate)/1000;
        if(updateTimeSeconds < 60) {
            return `1 minute ago`;
        } else if(updateTimeSeconds > 60 && updateTimeSeconds < 3600) {
            let minute = Math.floor(updateTimeSeconds / 60);
            return `${minute} minutes ago`;
        } else if(updateTimeSeconds === 3600) {
            return `1 hour ago`;
        } else if(updateTimeSeconds > 3600 && updateTimeSeconds < 86400) {
            let hours = Math.floor(updateTimeSeconds / 60 / 60);
            return `${hours} hours ago`;
        } else if(updateTimeSeconds === 86400) {
            return `1 day ago`;
        } else if(updateTimeSeconds > 86400 && updateTimeSeconds < 604799) {
            let days = Math.floor(updateTimeSeconds / 60 / 60 / 24);
            return `${days} days ago`;
        } else if(updateTimeSeconds === 604800) {
            return `1 week ago`;
        } else if(updateTimeSeconds > 604800 && updateTimeSeconds < 2629799) {
            let weeks = Math.floor(updateTimeSeconds / 60 / 60 / 24 / 7);
            return `${weeks} weeks ago`;
        } else if(updateTimeSeconds === 2629800) {
            return `1 month ago`;
        } else if(updateTimeSeconds > 2629800 && updateTimeSeconds < 31557599) {
            let months = Math.floor(updateTimeSeconds / 2629800);
            return `${months} months ago`;
        } else if(updateTimeSeconds > 31557600) {
            return `over a year ago`;
        } else {
            return '';
        }
    }

    return (
        <footer>
            <span>&copy; Andjelija Stankovic 2023</span>
            <span>Last update: {update(storageTime)}</span>
        </footer>
    );
}