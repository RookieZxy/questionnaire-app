import PushNotification from "react-native-push-notification";

const showNotification = (title, message) => {
    PushNotification.localNotification({
        title: title,
        message: message,
        channelId: '1',
    });
};

const handle5SecNotification = (title, message, date) => {
    PushNotification.localNotificationSchedule({
        title: title,
        message: message,
        date: new Date(Date.now() + 5 * 1000),
        channelId: '1',
    });
};

const handleScheduleNotification = (title, message, date) => {
    PushNotification.localNotificationSchedule({
        title: title,
        message: message,
        date: date,
        channelId: '1',
    });
};

const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications();
};

export { showNotification, handleScheduleNotification, handleCancel, handle5SecNotification};