import cron from 'node-cron'
cron.schedule('*/10 * * * *', () => {
    // Your task to be executed every 10 minutes
    console.log('Cron job is running every 10 minutes!');
});