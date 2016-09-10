function showNotification() {
    Push.create('Hello World from push.js', {
        body: 'Tutorial de Push js',
        icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-128.png',
        timeout: 4000,
        onClick: function () {
            // window.location = 'http://localhost:8085/pushjs/index.html';
            window.focus();
            this.close();
        }
    });    
}